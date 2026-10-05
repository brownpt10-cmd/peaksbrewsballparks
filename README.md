# Peaks to Brews to Ballparks

A static expedition-log website. Plain HTML/CSS/JS — no build step, works on GitHub Pages or by double-clicking `index.html`.

## Structure

```
Challenge/
├── index.html            Home: hero, stats, intro, Peaks/Brews/Ballparks, latest, Up Next
├── expeditions.html      Expedition Log with filters (?cat=peaks|brews|ballparks|planned)
├── expedition.html       One template for every trip (?id=<id>)
├── about.html            The Challenge, Rules, Scorecard, Crew
├── peaks.html            Peaks: Colorado 14ers tracker (progress, facts, difficulty, sortable list of 58)
├── assets/
│   ├── css/style.css     All styles (palette tokens at the top)
│   ├── js/data.js        ← EDIT THIS to add expeditions
│   ├── js/fourteeners.js ← EDIT THIS when you summit a 14er
│   ├── js/main.js        Header/mega-menu, footer, rendering
│   ├── img/              Logo + favicon (SVG placeholders — swap in the real logo)
│   └── photos/<id>/      Web-sized photos (≈1800px, used by the site)
├── tools/resize_photos.py
└── Images/               Original iPhone photos (NOT pushed to GitHub — see .gitignore)
```

## Add an expedition

1. Put original photos in `Images/<Brews|Peaks|Ballparks>/<State>/<Folder>/`.
2. Make web-sized copies:
   ```
   python3 tools/resize_photos.py Images/Brews/Colorado/Red_Leg red-leg
   ```
   → writes `assets/photos/red-leg/img_xxxx.jpg` and prints the `photos:` list to paste.
3. In `assets/js/data.js`, add (or update) an entry with `id: "red-leg"`, set `status: "logged"`, fill in title, location, date, summary, story, cover and photos. Put newest at the top.

The header menu, home page stats, cards, and detail page all update automatically.

## Log a 14er summit

1. Add the hike to `data.js` as above with `category: "peaks"` (e.g. `id: "mount-elbert"`).
2. In `assets/js/fourteeners.js`, find the peak and set `date: "2027-07-15"` and `expedition: "mount-elbert"`.

The peak turns orange-highlighted with a ✓, the progress bar / home stats / Peaks menu update, the table's "View hike & photos" links to the trip page, and the trip page shows elevation, range, class and 14er rank.

## Palette (from `style.css`)

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#1E1E1E` | Header, mega menu, footer |
| `--orange` | `#F77F3C` | Accent: tags, CTA, active menu |
| `--paper` | `#F5F5F5` | Page background |
| `--mist` | `#EAEAEA` | Alternate sections |

Fonts: Barlow (body/headings) + Space Mono (menu, labels).

## Publish to GitHub Pages

```
cd Challenge
git init && git add . && git commit -m "Initial site"
gh repo create peaks-brews-ballparks --public --source=. --remote=origin --push
gh api -X POST repos/<owner>/peaks-brews-ballparks/pages -f "source[branch]=main" -f "source[path]=/"
```
Live at `https://<owner>.github.io/peaks-brews-ballparks/`.

Note: GitHub Pages is case-sensitive — keep photo filenames lowercase (the resize script does this).
