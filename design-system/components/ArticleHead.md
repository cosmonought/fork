# ArticleHead

The head of a published piece: volume and type, title, author, the particulars, and the abstract.

## Use
- Kicker `fk-label--issue` ("Vol. 0 · Research article"), title `display-l` (`fk-title`), byline in italic with the affiliation upright in `ink-2`.
- Facts (ruled): Published, Peer review, Licence, Cite as. The citation follows Chicago author-date.
- Abstract and keywords between an `ink` rule and a `rule` hairline. Artwork and creative pieces may leave the abstract out.
- Everything in brackets is the piece's own: never fill it with stand-in text on the live site.

## Markup
```html
<div class="fk-titleblock">
  <p class="fk-label fk-label--issue">Vol. 0 · Research article</p>
  <h1 class="fk-title">[Title of the article]</h1>
  <p class="fk-byline">[Author] <span class="fk-byline__aff">· [Affiliation]</span></p>
</div>
<section class="fk-abstract" aria-labelledby="abstract"><h2 class="fk-label" id="abstract">Abstract</h2><p>[Abstract]</p></section>
```
