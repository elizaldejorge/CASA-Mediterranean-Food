# CASA — Mediterranean Food &amp; Wine

A mobile-first, single-page website for **CASA**, a family-run Mediterranean
restaurant &amp; natural wine bar in Puerto Aventuras, Quintana Roo, Mexico.

Static site — plain HTML, CSS and JavaScript. No build step, no dependencies,
no framework. Open `index.html` in a browser and it runs.

## Project structure

```
casa/
├── index.html          # markup / page content
├── css/
│   └── styles.css      # all styling (mobile-first, theme variables up top)
├── js/
│   └── main.js         # header scroll state, "today" hours, scroll reveal
├── assets/
│   └── favicon.svg     # browser tab icon (matches the logo)
└── README.md
```

## Local preview

Just open `index.html` in any browser. For a more production-like preview
(so relative paths and fonts behave exactly as when hosted), run a tiny
local server from inside the `casa/` folder:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (free hosting)

### GitHub Pages
1. Create a public repo and upload the **contents** of this folder
   (so `index.html` sits at the repo root).
2. Repo **Settings → Pages → Branch: `main` / root → Save**.
3. Live in ~1 minute at `https://<username>.github.io/<repo>/`.

### Netlify / Cloudflare Pages
Drag the whole `casa/` folder onto **app.netlify.com/drop** for an instant URL,
or connect the repo in Cloudflare Pages (build command: none, output: `/`).

## Customizing

- **Colours &amp; spacing** — edit the CSS variables in the `:root` block at the
  top of `css/styles.css`.
- **Fonts** — Josefin Sans (logo/labels), Cormorant Garamond (headings),
  Karla (body), loaded from Google Fonts in `index.html`.
- **Menu items / hours / contact** — all plain text in `index.html`.
- **Photos** — the gallery and hero currently hot-link images from the
  Tripadvisor CDN. They work fine when hosted online. To make the site fully
  self-contained, download the images into `assets/`, then update the `src`
  URLs in `index.html` and the `--hero` background URL in `styles.css`.

## Real business details used

- **Address:** Bahía Xcacel, Local B9, Puerto Aventuras 77733, Q.R., Mexico
- **Phone:** +1 917-747-7974
- **Hours:** Tue–Sun 8:00 AM – 10:30 PM · Closed Mondays
- Cuisine, menu items and the family story are sourced from the restaurant's
  public Google and Tripadvisor profiles. Prices are intentionally omitted
  (shown as the verified `$$–$$$` range) since exact figures weren't published.

---
© 2026 CASA — Mediterranean Food &amp; Wine.
