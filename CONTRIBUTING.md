# Deine Baseball Card erstellen / Add Your Baseball Card

So fügst du dich zum SECJUR Team-Board hinzu — in wenigen Minuten, direkt in GitHub.
How to add yourself to the SECJUR team board — takes just a few minutes, directly in GitHub.

---

## 🇩🇪 Schritt-für-Schritt-Anleitung

### 1. Datei öffnen
Navigiere im Repository zu `people/cards.json` und klicke auf das **✏️ Bleistift-Symbol**.

### 2. Deinen Eintrag hinzufügen

Kopiere diesen Block und füge ihn **vor der letzten `]`** ein (Komma nach dem vorherigen Eintrag nicht vergessen!):

```json
{
  "name": "Vorname Nachname",
  "photo": "https://github.com/DEIN-USERNAME.png",
  "department": "Dein Team",
  "aufgaben": [
    "Aufgabe 1",
    "Aufgabe 2",
    "Aufgabe 3"
  ],
  "ansprechpartner_fuer": [
    "Thema 1",
    "Thema 2"
  ]
}
```

| Feld | Beschreibung | Pflicht |
|------|-------------|---------|
| `name` | Vollständiger Name | ✅ |
| `photo` | Foto-URL (github.com/USERNAME.png funktioniert immer) | ❌ |
| `department` | Team / Abteilung | ✅ |
| `aufgaben` | Tägliche Aufgaben (3–6 Punkte) | ✅ |
| `ansprechpartner_fuer` | Themen, für die du Ansprechpartner bist | ✅ |

### 3. Änderung speichern
1. Scrolle zu **"Commit changes"**
2. Kurze Nachricht: `Add baseball card: Vorname Nachname`
3. **"Commit directly to the main branch"** → **"Commit changes"**

Fertig! Deine Card erscheint nach wenigen Sekunden auf der Team-Seite.

---

## 🇬🇧 Step-by-Step Guide

### 1. Open the file
Navigate to `people/cards.json` in the repository and click the **✏️ pencil icon**.

### 2. Add your entry

Copy this block and paste it **before the last `]`** (don't forget the comma after the previous entry!):

```json
{
  "name": "First Last",
  "photo": "https://github.com/YOUR-USERNAME.png",
  "department": "Your Team",
  "aufgaben": [
    "Responsibility 1",
    "Responsibility 2",
    "Responsibility 3"
  ],
  "ansprechpartner_fuer": [
    "Topic 1",
    "Topic 2"
  ]
}
```

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Full name | ✅ |
| `photo` | Photo URL (github.com/USERNAME.png always works) | ❌ |
| `department` | Team / Department | ✅ |
| `aufgaben` | Daily responsibilities (3–6 items) | ✅ |
| `ansprechpartner_fuer` | Topics you are the go-to person for | ✅ |

### 3. Save your changes
1. Scroll to **"Commit changes"**
2. Short message: `Add baseball card: First Last`
3. **"Commit directly to the main branch"** → **"Commit changes"**

Done! Your card appears within seconds on the team page.

---

Questions? Open a GitHub Issue or reach out on Slack.
