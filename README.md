# THIS IS WHERE WE'RE FROM

A six-month photography and storytelling course for young people, developed by **Brian Otieno**, photographer and founder of [Kibera Stories](https://instagram.com/kiberastories).

The site is a single page: the full 24-lesson curriculum, an exposure triangle simulator, a student area, a code-protected teacher area, printable branded worksheets, a photo review contact sheet, zine planning that hands off to [zineit.app](https://zineit.app), an exhibition wall planner, a Kibera Stories case study, safety guidance, and a glossary.

## What is in here

```
site/
  index.html              the whole learning hub
  support.js              runtime (loads React from unpkg)
  data/
    lessons-1.js          lessons 1-12
    lessons-2.js          lessons 13-24
    reference.js          months, glossary, presets, challenges, prompts, badges
  assets/                 logo files
  fonts/                  Bobby Jones Soft, TT Norms
  manifest.webmanifest
  404.html
  _headers                security and cache headers for Cloudflare Pages
```

## Teacher area

The facilitator area (`#teachers`) and the trainer preparation and trainer notes inside each lesson open with a four-digit code. The default code is **2013**.

To change it, edit the `teacherPin` default in `site/index.html` (search for `teacherPin`). It is a soft gate for classroom use, not security — do not put confidential material behind it.

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

1. Cloudflare dashboard, Workers & Pages, Create, Pages, Connect to Git.
2. Pick this repository.
3. Production branch: `production`.
4. Build command: leave empty. Build output directory: `site`.
5. Save and deploy.

There is no build step. The site is static files.

## Notes

- Works on Android, iOS, Windows, and macOS. The navigation collapses into a Menu button on narrow screens, all tap targets are at least 44px, and form fields are sized so iOS does not zoom on focus.
- Progress, notes, reviews, journal entries, and zine text are stored in `localStorage` on the visitor's own device. Nothing is uploaded.
- Photographs added to lessons, the training album, the case study wall, the review sheet, and the zine board stay in the browser session only.
- Worksheets print from a branded A4 print view. Nine sheets, printable one at a time or as a pack.
- The lesson library has a **Reset local data** control that clears everything from the device.
- Fonts are licensed files supplied by the project. Check the licence before serving them from a public domain.
- Long-form serif text falls back to Georgia; TT Norms Pro Serif was not supplied.

## Copyright

Developed by Brian Otieno, founder of @KiberaStories. (c) Brian Otieno. All learning content is copyrighted. All rights reserved.
