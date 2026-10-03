# Contents

A volume's table of contents: number, title, contributor, and what kind of piece it is.

## Use
- An `ol` opened by a 1px `ink` rule; each entry ends on a `rule` hairline.
- Number in `index` mono, `issue`; title in `entry` (a link to the piece once it is published); contributor in italic `text-s`, `ink-2`; type in `meta` mono.
- Types are the journal's own: Research article, Review essay, Intervention, Memoir, Manifesto, Whitepaper, Artwork, Translation.
- Until a volume is announced, say so ("Announced with the issue.") and show its shape with bracketed placeholders, never invented titles or names.

## Markup
```html
<ol class="fk-contents">
  <li class="fk-entry">
    <span class="fk-entry__no">01</span>
    <span class="fk-entry__main"><a class="fk-entry__title" href="/vol-0/[slug].html">[Title of contribution]</a><span class="fk-entry__by">[Contributor]</span></span>
    <span class="fk-entry__type">Research article</span>
  </li>
</ol>
```
