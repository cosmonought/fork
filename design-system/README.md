Fork is the Journal of Interchain Theory and Politics, an annual, open-access, peer-reviewed journal published by Neta DAO Academy. Its identity is an offprint: a near-white page, black ink, a book face set for long reading, small mono capitals for the apparatus, hairline rules, and one colour per volume. Two things move: the cut Fork mark, when someone reaches for it, and the fork divider, a rule that splits in two as the page turns.

## Using this system

- Load `tokens.css`, the fonts in `fonts/`, `components/bundle.css` and `components/bundle.js`; put `class="fk-page"` on `body` and call `Fork.enhance()` once the page has loaded. Components are HTML and CSS patterns with a small vanilla enhancer on `window.Fork` (the mark's cut on touch screens, the divider's drawing, the register-interest form); there is no framework, as the site is static pages. Copy each component's markup from its guideline.
- One theme, Paper. The journal has no dark mode: it is a printed page.
- Host the files yourself: the fonts (`fonts/`, all under the SIL Open Font License, licences beside them) and the Neta DAO mark (`assets/Logos/neta-mark-paper.png`) for the footer. The Fork mark is inline SVG; its files in `assets/Logos` are for email and social cards.
- Build a page from one of the pages (Homepage, AboutPage, ScopePage, CallForPapersPage, SubmitPage, StatementPage) or the templates for a published volume (IssuePage, ArticlePage), or from SiteHeader + content + SiteFooter.

## Content fundamentals

- **Voice**: a scholarly journal speaking plainly to its contributors and readers. Exact, unhurried, without hype. Its own sentences are the model: "Fork publishes theoretical and critical work on the politics of decentralized systems." "We take blockchain seriously as a site of political and intellectual contestation, not merely technical innovation."
- **We and you**: the journal is "we"; the reader and contributor are "you" only in instructions ("Send submissions and pitches to academy@netadao.org").
- **Addresses**: written out as plain text, never a `mailto:` link (people close the mail app and the message is lost). What a reader sends us, such as a registration of interest, goes through a form that posts to the Academy's database and appears in its Admin (see Field).
- **Names**: "Fork" in running text and headings (the mark is the only FORK in capitals); "Fork: The Journal of Interchain Theory and Politics" in full; "Neta DAO Academy" (DAO in capitals) as publisher; "Neta DAO"; "the Interchain"; "Web3"; "Coining Reason" for the seminar.
- **Volumes**: "Vol. 0", "Vol. 1". The first is "Vol. 0 · Inaugural issue". A volume has a theme, its title: "The Event of Web3 and the Question Concerning Technology".
- **Casing**: sentence case in the source; CSS sets the capitals of labels, navigation and buttons. Titles of pieces keep their authors' casing.
- **Dates**: "15 January 2027". Ranges with spaced en dashes: "500 – 15,000 words".
- **Separators**: a middle dot with spaces between parts of a label or value: "Vol. 0 · Inaugural issue · Call for papers", "Annual · Open access".
- **Actions**: verb first: "Read the call", "Submit work", "Register interest". Links between pages end "→", links to another site "↗".
- **Placeholders**: anything not yet known is shown in brackets ("[Title of contribution]", "[Contributor]") or said plainly ("Announced with the issue."). Never invent titles, names, figures or dates.
- **Citations**: Chicago author-date; author-title for humanities submissions. The same style the journal asks of contributors sets its own references.
- No emoji, no exclamation marks.

## Visual foundations

### Colour

- The page is `paper`; text, display type, rules that open lists, solid buttons and the mark are `ink`. Most of every page is these two.
- `ink-2` for secondary copy, contributor names, captions and mono metadata. `rule` for hairlines between rows and sections.
- `sheet` is the one raised surface: fields, and the submit box at the end of a reading page. Bordered by `rule`; nothing in the system has a shadow.
- `issue` is the volume's colour, and the only colour. It marks what belongs to the volume: its cover (at full strength), the kicker above a title, numbers (contents, scope areas, § marks, notes), the pull quote, the underline of links in prose and one branch of the fork divider. Text on it is `on-issue`. `issue-tint` is for selected text and a note you jumped to, never a block.
- Errors are not coloured (the colour belongs to the volume): an invalid field's border thickens and its message says what to do.
- The focus ring is `focus` (`ink`), 2px, offset 3px; on an `issue` fill, `on-issue`.
- No gradients in the interface. The one gradient is the slash inside the Fork mark, pink to blue (`#C9338A` to `#5B8EF0`), as on the Academy and netadao.org: it belongs to the mark and goes nowhere else.

### Issues: one colour per volume

- Each volume chooses its own colour, and every page of that volume uses it as `issue`. The current volume's colour is the site's (the tokens hold Vol. 0's, `#b4236f`).
- A volume's colour must read both ways: at least 4.5:1 against `paper` (as text on the page and as the ground under `on-issue`) and 3:1 against `ink` (so the focus ring shows on its cover). In practice: a deep, saturated colour, about as dark as Vol. 0's magenta.
- Set it on the root of the volume's pages: `<html style="--issue: #…; --issue-tint: #…">` (the tint: the colour at about 12% on `paper`). Never two volumes' colours on one page; a list of past volumes shows them only on their small covers.

### Type

- **Newsreader** (the `text` family) sets everything you read: display, headings and text. It is a variable face with an optical-size axis, so the browser draws the display cut at 72px and the text cut at 16px from one family (`font-optical-sizing: auto`); never set a second serif. Display sizes are Regular (400) and tightly tracked (`-0.015em`); headings are Medium (500); italic for the subtitle, the question under a title, contributor names, the principles line and the pull quote. No bold in running text.
- **IBM Plex Mono** (`mono`) is the apparatus: labels, navigation, buttons, terms, numbers, captions' figure numbers. Always small (11–13px), uppercase by CSS, tracked `.1em`–`.12em`.
- The scale: `cover-numeral`, `display-xl`, `display-l`, `statement`, `numeral`; `lede`, `subtitle`, `quote`, `heading`, `heading-s`, `entry`, `body`, `body-s`, `text-s`, `note`; `label`, `button`, `meta`, `index`, `smallprint`. Display sizes are fluid (each style's note gives its clamp).
- Reading copy is `body` (21/1.62) and stops at `measure` (680px). Open a reading page's first paragraph with a few words in small capitals.
- `Newsreader Ext` is the same face's Central European letters (Ž, ł, ő…): it sits second in the stack and fills in only those, so contributors' names set correctly.

### Layout

- Content centres at `page-max` (1240px) with `gutter` at the sides (16–48px).
- Homepage sections are separated by `rule` hairlines and padded `section-pad`. A section's name sits in a narrow left column and its content in a wide right one (`fk-split`); on phones they stack.
- Lists open with a 1px `ink` rule and separate their rows with `rule`. The masthead and the footer open with a 2px `ink` rule (`stroke-strong`), the only two.
- Everything is square (`radius-0`). No cards: rules and space do the structuring; the submit box is the one bordered surface.
- Reading pages put OnThisPage in the left margin and the text in a single column at `measure`.

### The fork divider

- A rule that splits in two, after the journal's name: "A fork is the moment when a shared history diverges and two possible futures emerge." The trunk and one branch are `ink`, the other branch `issue`, all `stroke-divider`.
- It marks where a page turns, at most twice a page, in place of a section's rule; its short end mark closes an article before the notes.

### Motion

- Two things move, both only once something brings them on, and neither under reduced motion:
  - The Fork mark cuts when you hover or focus it: the slash draws, pink to blue (340ms) and the lower half slips down and right (460ms, a slight overshoot); leaving closes it. On a touch screen it cuts once, in view, and stays cut.
  - A fork divider that starts below the fold draws itself left to right (1.1s) the first time it comes into view.
- Buttons and links change colour in 150ms. Nothing else animates: no fades on scroll, no parallax.

### Imagery

- The journal's imagery is its contributors' artwork (colour and black and white), shown inside the pieces as figures at the column's width with a caption: never cropped to fit, never used as decoration, never on a cover.
- Covers are typographic: the volume's number on its colour.
- Decorative images get `alt=""`; artwork gets an `alt` that describes it, and its caption credits it.

### Iconography

- None. The arrows "→" and "↗", "§" for sections, "↩" back from a note, and the middle dot "·" are the only glyphs that act as icons. The select's chevron is the one drawn mark.
- The Neta DAO mark (`assets/Logos/neta-mark-paper.png`) appears once, in the footer, linking to netadao.org: supplied artwork, never redrawn, recoloured or cropped.
