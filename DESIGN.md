# Design - Tally Court Website

> Folgt der globalen Baseline: `~/Development/claude-stuff/design/baseline.md`.
> Dieses File listet nur die **Abweichungen** und die Tally-Court-spezifische **Voice**. Alles andere kommt aus der Baseline.
> Quelle der Wahrheit für Werte bleibt `style.css` (`:root`). Stand 10.11.2026, aus dem bestehenden Code abgeleitet.
> Öffentlich: GitHub Pages liefert das ganze Repo aus, auch diese Datei. Das Repo ist ohnehin öffentlich (MIT).

## Projekt-Charakter

Kleine englische Begleitseite zur App Tally Court, einem Zähler für Racket- und Rallye-Sportarten auf Apple Watch und iPhone. Drei Seiten: Landing, Privacy, Support (die beiden letzten verlangt der App Store). **Blau** als Markenfarbe, iOS-nah durch System-Schrift und grosse Radien. Kein Build-Schritt, gehostet auf GitHub Pages.

## Abweichungen von der Baseline

### Colors
- **Blau statt Petrol.** `{colors.blue}` (#1a75d2) für Links und das Blau im Logo. Der Store-Button ist schwarz (`{colors.ink}`), wie in der Baseline.
- **Grün** `{colors.green}` (#29a866) als zweite Farbe, nur im Logo und im Wort "badminton".
- **Fläche** `{colors.bg}` (#f5f7fb) mit Karten in `{colors.card}` (Weiss).
- **Verlauf** im Seitenhintergrund (Blau 10 % nach `{colors.bg}`).
- **Kein Dark Mode.**

### Typography
- **System-Stack** (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`), gleich wie die Baseline.
- **h1** 2.1rem auf **800**, -0.02em. **h2** 1.3rem, **Sektions-Titel** 1.45rem, **h3** 1.05rem. Body 1rem, Zeilenhöhe 1.6.

### Radius
- Gross und iOS-nah: Karten 20px, Feature-Karten und Screenshots 18px, Logo 22px, Buttons als Pill.

### Spacing & Layout
- **Ein schmaler Container** von 720px, Screenshots brechen auf bis 940px aus.

### Elevation
- Weiche Schatten auf allen Karten (`0 6px 20px rgba(0,0,0,0.06)`), stärker auf Screenshots und Logo.

## Komponenten

- **Store-Button** (`.btn.store`): schwarz, Pill, Apple-Symbol.
- **Sekundär-Button** (`.btn.alt`): hellgraue Pill für Privacy, Support, Contact.
- **Intro-Karte** (`.card`): ein Absatz Fliesstext in einer weissen Karte.
- **Feature-Karten** (`.feature`): 4 Stück, je farbiges Icon (inline SVG mit eigenen Farben, beim Herz ein Verlauf), nicht klickbar.
- **Screenshots**: 3 Handy-Bilder nebeneinander.
- **Rechtsseiten**: der ganze Inhalt in einer Karte.
- **E-Mail** wird per `mail.js` zusammengesetzt, damit sie nicht im HTML steht.

## Voice & Tone

- **Englisch, direkt, Du-nah** ("Keep score...", "your Apple Watch").
- **Konkret:** sieben Sportarten mit Namen, Regeln (Sets, Tiebreaks, no-ad), "No account, no ads, no tracking".

## Don'ts

- **Kein weiterer Farbakzent** neben Blau und Grün.
- **Kein Webfont**, kein Tracking, keine Drittdienste. Die Privacy Policy sagt "no analytics".

## Known Gaps

- **Anbieter nicht genannt:** Privacy Policy und Support sagen "we" und nennen nur die E-Mail `hello@nextara.ch`. Bewusst so belassen (10.11.2026).
- **Generik-Muster:** Karten um reinen Text (Intro, Rechtsseiten), 4 Feature-Karten mit bunten Icons und einem Verlauf, Verlauf im Hintergrund. Bewusst so belassen (10.11.2026), gehört zum iOS-nahen Auftritt.
- **Kontrast:** Das grüne "badminton" (#29a866 auf Weiss) erreicht 3.05:1, unter 4.5:1. Nur Tennis und Badminton sind eingefärbt, die anderen fünf Sportarten nicht. Bewusst so belassen (10.11.2026).
- **Werte ausserhalb der Tokens:** `#2b2f36`, `#fff`, `#eef1f6`, `#000` in `style.css`, Icon-Farben direkt im HTML.
- **Screenshots** 480px breit bei bis zu 300px Anzeige (Faktor 1.6, unter Retina). Die App-Store-Originale liegen im App-Repo in 1320x2868.
- **`design.html`** existiert nicht.

## Tokens (machine-readable)

Nur die **Abweichungen** von der Baseline. Quelle der Wahrheit bleibt `style.css`, dieser Block spiegelt sie für `/audit-design` und `/verify-ui`.

```jsonc
{
  "extends": "baseline",
  "font": {
    "display": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
    "body": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
  },
  "typography": {
    "h1": { "size": "2.1rem", "weight": 800, "tracking": "-0.02em" },
    "section": { "size": "1.45rem" },
    "h2": { "size": "1.3rem" },
    "h3": { "size": "1.05rem" },
    "body": { "size": "1rem", "lineHeight": 1.6, "weight": 400 }
  },
  "colors": {
    "blue": "#1a75d2", "green": "#29a866", "ink": "#1c1c1e", "muted": "#6b7280",
    "bg": "#f5f7fb", "card": "#ffffff"
  },
  "radius": { "card": "20px", "feature": "18px", "mark": "22px", "pill": "999px" },
  "container": { "max": "720px", "shots": "940px" },
  "requirements": {
    "darkMode": false,
    "responsive": true,
    "tokensOnly": false,
    "gradients": true
  }
}
```

## Quellen

- Tokens in [`style.css`](style.css), `:root`.
- Seiten: `index.html`, `privacy.html`, `support.html`.
