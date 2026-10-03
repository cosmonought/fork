# SiteFooter

The journal's sign-off: the Neta DAO mark, the journal's name in italic, its publisher, the four links and the small print.

## Use
- Opens with a 2px `ink` rule (`stroke-strong`), the only other one besides the masthead's.
- The Neta DAO mark (`assets/Logos/neta-mark-paper.png`, 34px tall) links to netadao.org. It is supplied artwork: never redraw, recolour or crop it.
- The name in italic (`text`, 19px); "Published by Neta DAO Academy" and the small print in `smallprint`, `ink-2`.
- The small print is fixed: "© Neta DAO Academy. Open access. No rights reserved. · fork.netadao.org".

## Markup
```html
<footer class="fk-footer">
  <div class="fk-wrap fk-footer__inner">
    <div class="fk-footer__brand">
      <a href="https://netadao.org" aria-label="Neta DAO"><img src="/assets/neta-mark-paper.png" alt="" width="251" height="192"></a>
      <div class="fk-footer__names">
        <span class="fk-footer__title">Fork · The Journal of Interchain Theory and Politics</span>
        <span class="fk-footer__by">Published by <a href="https://academy.netadao.org">Neta DAO Academy</a></span>
      </div>
    </div>
    <nav class="fk-footer__nav" aria-label="Footer">
      <a href="/about.html">About</a><a href="/scope.html">Scope</a><a href="/cfp.html">Call for Papers</a>
      <a href="/submit.html">Submit</a><a href="https://netadao.org">Neta DAO ↗</a>
    </nav>
    <p class="fk-footer__print">© Neta DAO Academy. Open access. No rights reserved. · fork.netadao.org</p>
  </div>
</footer>
```
