# TextLink

Two kinds of link: the mono arrow link that moves between pages, and the underlined link inside prose.

## Use
- `fk-arrow`: `button` style in `ink`, underlined, ending "→" for a page of the site and "↗" for another site. It closes a section ("About the journal →", "The journal's scope →").
- `fk-link` (and any `a` inside `fk-prose`): the text's own colour, a 2px `issue` underline; hover turns it `issue`.
- Email addresses are written out as the link text ("academy@netadao.org"), never "click here".

## Markup
```html
<a class="fk-arrow" href="/about.html">About the journal →</a>
<p>Write to <a class="fk-link" href="mailto:academy@netadao.org">academy@netadao.org</a>.</p>
```
