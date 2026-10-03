# SiteHeader

The masthead on the homepage and a compact bar on every other page, both carrying the Fork mark and the same four links.

## Masthead (homepage)
- A strip in `ink-2` mono: "← Neta DAO" and "Published by Neta DAO Academy · Open access".
- A 2px `ink` rule (`stroke-strong`), then the mark at `fk-mark--masthead` inside the page's `h1`, and the subtitle in italic `subtitle` beside it after a hairline `rule`.
- The navigation between two 1px `ink` rules: About, Scope, Call for Papers, Submit, and "Neta DAO Academy ↗" pushed right (`fk-nav__out`).

## Compact (every other page)
- One row over a 1px `ink` rule: the mark at `fk-mark--compact`, the subtitle at 19px, the navigation right, ending "Academy ↗".
- The current page's link gets `aria-current="page"` and an `issue` underline.

## Use
- Labels are written in sentence case; CSS sets the capitals. Other sites take ↗.
- At phone width the rows wrap; nothing is hidden behind a menu button (five links fit).
- Put a skip link (`fk-skip`, "Skip to content") before it.

## Markup
```html
<header class="fk-header fk-header--compact">
  <div class="fk-wrap">
    <div class="fk-header__row">
      <a class="fk-header__home" href="/" aria-label="Fork, home"><!-- ForkMark, fk-mark--compact --></a>
      <span class="fk-header__subtitle">The Journal of Interchain Theory and Politics</span>
      <nav class="fk-nav" aria-label="Main">
        <a href="/about.html">About</a><a href="/scope.html">Scope</a>
        <a href="/cfp.html" aria-current="page">Call for Papers</a><a href="/submit.html">Submit</a>
        <a href="https://academy.netadao.org">Academy ↗</a>
      </nav>
    </div>
  </div>
</header>
```
The masthead's markup is in the Homepage page.
