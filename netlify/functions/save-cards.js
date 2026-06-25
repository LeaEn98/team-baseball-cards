exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return { statusCode: 500, headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "GITHUB_TOKEN not configured on server." }) };
  }

  let payload;
  try { payload = JSON.parse(event.body); }
  catch(e) { return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) }; }

  const { card, originalName, isEdit } = payload;
  const REPO = "LeaEn98/team-baseball-cards";
  const FILE = "people/cards.json";
  const BASE = "https://api.github.com";
  const headers = {
    Authorization: "token " + token,
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json",
    "User-Agent": "baseball-cards-app"
  };

  // 1. Fetch current file
  const getRes = await fetch(BASE + "/repos/" + REPO + "/contents/" + FILE, { headers });
  if (!getRes.ok) {
    const e = await getRes.json();
    return { statusCode: getRes.status, headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: e.message || "Could not fetch file" }) };
  }
  const fileData = await getRes.json();
  const sha = fileData.sha;
  const current = JSON.parse(Buffer.from(fileData.content.replace(/\n/g, ""), "base64").toString("utf8"));

  // 2. Update array
  let updated;
  if (isEdit && originalName) {
    let found = false;
    updated = current.map(x => { if (x.name === originalName) { found = true; return card; } return x; });
    if (!found) updated.push(card);
  } else {
    updated.push(card);
  }

  // 3. Save
  const newContent = Buffer.from(JSON.stringify(updated, null, 2), "utf8").toString("base64");
  const putRes = await fetch(BASE + "/repos/" + REPO + "/contents/" + FILE, {
    method: "PUT", headers,
    body: JSON.stringify({
      message: (isEdit ? "Update" : "Add") + " card: " + card.name,
      content: newContent, sha
    })
  });
  if (!putRes.ok) {
    const e = await putRes.json();
    return { statusCode: putRes.status, headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: e.message || "Could not save file" }) };
  }

  return { statusCode: 200, headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true }) };
};
