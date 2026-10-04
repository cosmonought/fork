# ForkMark

Fork's wordmark, FORK, cut in two by a slash: in the site's header it cuts once as you arrive and holds; elsewhere it is whole at rest and cut when you reach for it. It is the same cut mark the Neta DAO Academy and netadao.org use for the journal, with the same pink-to-blue slash.

## Use
- It names the journal as a brand: at the left of the header strip on every page. Not in running text, where you write "Fork", and never set FORK in type beside it.
- Inline SVG in `currentColor`, so it is `ink` on `paper` and `on-issue` on an `issue` fill (`fk-mark--on-issue`).
- Sizes: `fk-mark--bar` (112px, the header), `fk-mark--compact` (150px), `fk-mark--masthead` (clamp 180–280px, for a title page or a card); or give it a width. It scales from its 240×65 box; keep it at least 96px wide. Cutting it never changes the box: the lower half slips into room the box already holds.

## Motion
- **In the header, on arrival**: `Fork.enhance()` leaves the mark whole for a beat (450ms), then cuts it, and it holds the cut. That happens once a visit (the first Fork page opened in the tab); every later page opens with the mark already cut (`is-cut is-held`, set by the header's inline script before the page paints, so it never replays or flashes). Hover changes nothing once it is cut.
- **Elsewhere**: hovering or focusing the mark, or the link around it, draws the slash left to right, pink to blue (340ms, fast then easing out) and, 70ms in, the lower half slips 6 units right and 5 down with a slight overshoot (460ms), opening the gap the slash shows through. Leaving closes the gap (300ms) and fades the slash (200ms).
- Touch screens can't hover: there `Fork.enhance()` cuts a mark outside the header once, when three quarters of it is in view, and it stays cut.
- Under reduced motion it switches between whole and cut with no drawing or slipping; the header's mark is simply cut.
- `is-cut` pins the cut state (as the preview's second mark does).

## You provide
- The markup below, with the paths copied whole (the guideline shortens them). Wrap it in the link it stands for, with an `aria-label` ("Fork, home"); on its own, give the span `role="img" aria-label="Fork"`.
- The slash's gradient (`#C9338A` to `#5B8EF0`, at 90%) belongs to the mark: it is not a token, and it goes nowhere else. `Fork.enhance()` gives each mark's gradient its own id, so a mark keeps painting when another on the page is hidden.
- Where CSS and inline SVG can't go (email, social cards), the files in `assets/Logos`: `fork-mark-ink.svg` on light grounds, `fork-mark-paper.svg` on dark or `issue` grounds, `fork-mark-cut-ink.svg` where one still picture should show the cut.

## Markup
```html
<a class="fk-header__home" href="/" aria-label="Fork, home">
  <span class="fk-mark fk-mark--compact"><svg viewBox="0 25 240 65" aria-hidden="true" focusable="false"><defs><linearGradient id="fk-slash" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#C9338A"/><stop offset="1" stop-color="#5B8EF0"/></linearGradient></defs><path class="fk-mark__slash" pathLength="1" stroke="url(#fk-slash)" d="M0 58.5 240 43.5"/><path class="fk-mark__top" d="…"/><path class="fk-mark__bottom" d="…"/></svg></span>
</a>
```

## Don't
- Don't recolour the slash, show it without the cut (or the cut without it), stretch the mark, fill it with an image, or animate it again and again (it moves once on arrival, or when someone reaches for it).
