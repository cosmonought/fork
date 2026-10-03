# TextLink

Two kinds of link: the mono arrow link that moves between pages, and the underlined link inside prose.

## Use
- `fk-arrow`: `button` style in `ink`, underlined, ending "→" for a page of the site and "↗" for another site. It closes a section ("About the journal →", "The journal's scope →").
- `fk-link` (and any `a` inside `fk-prose`): the text's own colour, a 2px `issue` underline; hover turns it `issue`.
- No `mailto:` links: a link that opens the reader's mail app loses them. An address is written out as plain text ("academy@netadao.org"); anything the reader sends us goes through a form (see Field).
- Link text says where it goes, never "click here".

## Markup
```html
<a class="fk-arrow" href="/about.html">About the journal →</a>
<p>Questions: <a class="fk-link" href="https://discord.com/invite/gvjC86WXC2">Neta DAO Discord ↗</a></p>
```
