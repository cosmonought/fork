# SiteFooter

The journal's sign-off: the Neta DAO mark, the journal's name in italic, its publisher, the family's sites with X and Discord, and the small print. The header carries the journal's own pages, so the footer doesn't repeat them. It is the footer every Neta DAO site shares (netadao.org, the Academy, Fork, Ludum), set in Fork's style. Each place appears once: the mark is the link to netadao.org, so there is no "Neta DAO" text link beside it.

## Use
- Opens with a 2px `ink` rule (`stroke-strong`), the only one on the site.
- The Neta DAO mark (`assets/Logos/neta-mark-paper.png`, 34px tall) links to netadao.org. It is supplied artwork: never redraw, recolour or crop it.
- The name in italic (`text`, 19px); "Published by Neta DAO Academy" and the small print in `smallprint`, `ink-2`.
- Beside the journal's name, at the right: the family's sites (Academy, Fork, Ludum, mono capitals; Fork is current, underlined in `issue`), a hairline, then X (the Academy's account, @NetaDAO_Academy, as Fork's publisher) and Discord as their own 20px marks, each with an accessible name. The small print has the last row to itself.
- The Neta DAO mark stays the still (`neta-mark-paper.png`): Fork's stock is light, and the animated mark is a white N on black.
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
    <nav class="fk-footer__family" aria-label="Neta DAO">
      <ul class="fk-footer__sites"><li><a href="https://academy.netadao.org">Academy</a></li><li><a href="https://fork.netadao.org" aria-current="true">Fork</a></li><li><a href="https://ludum.netadao.org">Ludum</a></li></ul>
      <ul class="fk-footer__marks">
        <li><a class="fk-footer__icon" href="https://x.com/NetaDAO_Academy" aria-label="Neta DAO Academy on X"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></svg></a></li>
        <li><a class="fk-footer__icon" href="https://discord.com/invite/gvjC86WXC2" aria-label="Neta DAO on Discord"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515c-.074.127-.158.298-.217.432a18.27 18.27 0 0 0-5.487 0 4.64 4.64 0 0 0-.218-.432A19.736 19.736 0 0 0 4.625 4.37 20.02 20.02 0 0 0 1 18.855a19.9 19.9 0 0 0 5.993 3.03 14.62 14.62 0 0 0 1.226-1.994 12.7 12.7 0 0 1-1.93-.934c.162-.12.32-.246.474-.373a14.18 14.18 0 0 0 12.281 0c.155.127.313.252.475.373-.616.366-1.265.68-1.93.934a14.49 14.49 0 0 0 1.225 1.994 19.87 19.87 0 0 0 5.994-3.03A20.03 20.03 0 0 0 20.317 4.37ZM8.02 15.332c-1.17 0-2.128-1.065-2.128-2.366S6.85 10.6 8.02 10.6c1.18 0 2.147 1.075 2.128 2.366 0 1.301-.947 2.366-2.128 2.366Zm7.974 0c-1.17 0-2.128-1.065-2.128-2.366s.958-2.366 2.128-2.366c1.18 0 2.147 1.075 2.128 2.366 0 1.301-.947 2.366-2.128 2.366Z"/></svg></a></li>
      </ul>
    </nav>
    <p class="fk-footer__print">© Neta DAO Academy. Open access. No rights reserved. · fork.netadao.org</p>
  </div>
</footer>
```
