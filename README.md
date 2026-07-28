# THIS IS WHERE WE'RE FROM

A six-month photography and storytelling learning hub for young photographers in Kibera, Nairobi. Led by Brian Otieno.

The site is a single page containing the full 24-lesson curriculum, an exposure triangle simulator, a photo review contact sheet, a zine sequencing board, an exhibition wall planner, safety guidance, and a glossary.

## What is in here

```
site/
  index.html              the whole learning hub
  support.js              runtime (loads React from unpkg)
  data/
    lessons-1.js          lessons 1–12
    lessons-2.js          lessons 13–24
    reference.js          months, glossary, presets, challenges, prompts, badges
  assets/                 logo files
  fonts/                  Bobby Jones Soft, TT Norms
  manifest.webmanifest
  404.html
  _headers                security and cache headers for Cloudflare Pages
```

## Run locally

The page loads `data/*.js` as ES modules, so it needs a server rather than `file://`:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to Cloudflare Pages

**Direct upload**

```bash
npx wrangler pages deploy site --project-name this-is-where-we-are-from --branch production
```

**Git integration**

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Pick this repository.
3. Production branch: `production`.
4. Build command: leave empty. Build output directory: `site`.
5. Save and deploy.

There is no build step. The site is static files.

## Notes

- Participant progress, notes, reviews, journal entries, and zine text are stored in `localStorage` on the visitor's own device. Nothing is uploaded.
- Photographs added to the lesson cards, the review sheet, and the zine board stay in the browser session only.
- The lesson library has a **Reset local data** control that clears everything from the device.
- Fonts are licensed desktop/web files supplied by the project. Check your licence before serving them from a public domain.
- Long-form serif text falls back to Georgia; TT Norms Pro Serif was not supplied.

## Copyright

© Brian Otieno. All learning content is copyrighted. All rights reserved.
