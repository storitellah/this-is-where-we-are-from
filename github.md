repo: storitellah/this-is-where-we-are-from
branch: production
path: site

## Last sync

date: 2026-07-31
commit: (none - repository is empty; nothing has been pulled or pushed from here)

### Updated in this project
- Removed all participant ages and group-size figures so the course suits any group.
- Added a student area and a code-protected teacher area (default code 2013).
- Added nine printable branded worksheets, empty photo placeholders, and a Kibera Stories case study.
- Zine step now hands off to zineit.app; credited Brian Otieno, founder of @KiberaStories.
- Made the layout mobile-safe for Android, iOS, Windows, and macOS.

## Screen map

| Screen / feature | Built from |
| --- | --- |
| Whole learning hub (single page) | `This Is Where We're From.dc.html` -> `site/index.html` |
| Lessons 1-12 content | `data/lessons-1.js` |
| Lessons 13-24 content | `data/lessons-2.js` |
| Months, glossary, exposure presets, challenges, prompts, badges | `data/reference.js` |
| Student area, teacher area, worksheets, case study | template in `This Is Where We're From.dc.html` |
| Logos, favicons, worksheet branding | `assets/Logo-01...08.png` |
| Typefaces | `fonts/BobbyJonesSoft.otf`, `fonts/TTNorms-*.otf` |
| Not found page | `site/404.html` |

## Sync history

- 2026-07-29 - packaged the hub as a static Cloudflare Pages folder at `site/`; added 404, manifest, and _headers.
