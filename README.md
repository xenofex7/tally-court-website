# Tally Court Website

<p align="center">
  <img src="mark.svg" alt="Tally Court" width="110">
</p>

<p align="center">
  <a href="https://github.com/xenofex7/tally-court-website/blob/main/LICENSE"><img src="https://img.shields.io/github/license/xenofex7/tally-court-website" alt="license"></a>
  <img src="https://img.shields.io/badge/hosted-GitHub%20Pages-222?logo=github&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/github/last-commit/xenofex7/tally-court-website" alt="last commit">
  <img src="https://img.shields.io/github/commit-activity/y/xenofex7/tally-court-website" alt="commit activity">
</p>

<p align="center">
  <a href="https://xenofex7.github.io/tally-court-website/"><strong>xenofex7.github.io/tally-court-website</strong></a>
</p>

Public companion website for the Tally Court app (a racket and rally sport scorekeeper for Apple Watch and iPhone). It is a small static site served via GitHub Pages and provides the App Store landing page plus the legally required privacy policy and support pages. No build step, no dependencies.

## Pages

- **Landing** (`index.html`) - presents the app with screenshots and feature highlights
- **Privacy** (`privacy.html`) - the app's privacy policy ("data not collected")
- **Support** (`support.html`) - quick tips and contact
- **Not found** (`404.html`) - served by GitHub Pages for unknown paths, uses absolute `/tally-court-website/` links

Shared assets: `style.css` (styling), `mark.svg` (brand mark), `mail.js` (assembles the contact email at runtime so it is not in the HTML source), `og-image.jpg` (1200x630 social preview). `llms.txt` and `sitemap.xml` describe the site for crawlers. Design rules: `DESIGN.md`.

## Local preview

```bash
git clone https://github.com/xenofex7/tally-court-website.git
cd tally-court-website
python3 -m http.server 4173
```

Open `http://localhost:4173` in your browser. Any static file server works; Python 3 is just the no-install option.

## Development

- **Deploy:** push to `main` - GitHub Pages serves the repo root automatically and the live site updates within a minute.
- **Contact email:** assembled from parts in `mail.js` to deter scraping bots; change the `addr` value there to update it everywhere.
- **Screenshots:** the phone images in `shots/` are the 6.9" App Store screenshots from the app repo (`store/screenshots/iphone-6.9/`), resized to 720px wide and saved as JPG. 720px covers the 300px display size on Retina screens.

### Commit convention

Prefixes Add, Fix, Update, Remove, Refactor, Polish. Imperative mood, first line under 72 characters.

## License

MIT, see [LICENSE](LICENSE).
