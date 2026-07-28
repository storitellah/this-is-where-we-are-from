repo: storitellah/this-is-where-we-are-from
branch: production
path: site

## Last sync

date: 2026-07-29
commit: (none — repository was empty at time of packaging; nothing pulled)

### Updated in this project
- Packaged the learning hub as a static Cloudflare Pages folder at `site/`.
- Added `404.html`, `manifest.webmanifest`, and `_headers` (security + cache rules).
- Added `README.md` with local-run and Cloudflare Pages deploy steps.

## Screen map

| Screen / feature | Built from |
| --- | --- |
| Whole learning hub (single page) | `This Is Where We're From.dc.html` → `site/index.html` |
| Lessons 1–12 content | `data/lessons-1.js` |
| Lessons 13–24 content | `data/lessons-2.js` |
| Months, glossary, exposure presets, challenges, prompts, badges | `data/reference.js` |
| Logos and favicons | `assets/Logo-01…08.png` |
| Typefaces | `fonts/BobbyJonesSoft.otf`, `fonts/TTNorms-*.otf` |
| Not found page | `site/404.html` |
