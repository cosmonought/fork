# SiteHeader

One narrow strip, the same on every page: the Fork mark on the left, the navigation on the right. It is sticky: it stays at the top of the window as the page scrolls, as the Academy's and netadao.org's headers do.

## Use
- `paper` behind it and a 1px `ink` rule under it, full width; the row inside `fk-wrap`, at least 60px tall.
- The mark at `fk-mark--bar` (112px), alone: no subtitle beside it. It cuts once as a visit arrives and holds (see ForkMark).
- The navigation: About, Scope, Call for Papers, Submit, then "Academy ↗". The current page's link gets `aria-current="page"` and an `issue` underline.
- Phones (720px and under): the navigation folds behind a Menu button (`fk-header__menu`, mono, 1px `ink` border; `ink` fill while open), and opens as a list under the strip. `Fork.enhance()` wires it (`is-menu`, `is-open`, `aria-expanded`; Escape closes it). Without script the links wrap under the mark.
- `html` gets `scroll-padding-top` so a jump to a heading (OnThisPage, notes) lands below the strip.
- The homepage has no masthead: its `h1` is the journal's full name, visually hidden. Put a skip link (`fk-skip`, "Skip to content") before the header.
- Labels are written in sentence case; CSS sets the capitals. Other sites take ↗.

## Markup
```html
<header class="fk-header">
  <div class="fk-wrap fk-header__row">
    <a class="fk-header__home" href="/" aria-label="Fork, home"><!-- ForkMark, fk-mark--bar --></a>
    <button class="fk-header__menu" type="button" aria-expanded="false" aria-controls="fk-nav">Menu</button>
    <nav class="fk-nav" id="fk-nav" aria-label="Main">
      <a href="/about.html">About</a><a href="/scope.html">Scope</a>
      <a href="/cfp.html" aria-current="page">Call for Papers</a><a href="/submit.html">Submit</a>
      <a href="https://academy.netadao.org">Academy ↗</a>
    </nav>
  </div>
  <script>try{if(sessionStorage.getItem('fk-arrived')==='1')document.currentScript.parentNode.querySelector('.fk-mark').classList.add('is-cut','is-held')}catch(e){}</script>
</header>
```
