# fork.netadao.org

Fork: The Journal of Interchain Theory and Politics, published by Neta DAO Academy. Static pages, no build step, served by GitHub Pages.

## Design system

The site is built on Fork's design system (Offprint): Newsreader and IBM Plex Mono on paper and ink, one colour per volume, the cut Fork mark and the fork divider.

- `design-system/README.md`: the brand book (voice, colour, the issue colour, type, layout, motion, imagery). Start here.
- `design-system/components/<Name>.md`: each component's guideline and markup, the site's pages (Homepage, AboutPage, ScopePage, CallForPapersPage, SubmitPage, StatementPage) and the templates for a published volume (IssuePage, ArticlePage).
- `design-system/tokens.json`: the tokens, compiled into `ds/tokens.css`.
- `design-system/assets/Logos/`: the Fork mark as files, for email and social cards.
- `ds/`: what the pages load: `tokens.css`, `bundle.css`, `bundle.js` (`window.Fork`; each page calls `Fork.enhance()`), and `fonts/` (Newsreader and IBM Plex Mono, under the SIL Open Font License, licences beside them). These come from the design system as a set: change them together with its guidelines.
- `assets/neta-mark-paper.png`: the Neta DAO mark in the footer (supplied artwork).

Every page also loads Neta DAO Radio from `https://netadao.org/radio/radio.js`.

## Local preview

Run `python -m http.server 8792 --bind 127.0.0.1` in this folder, then open `http://127.0.0.1:8792`.
