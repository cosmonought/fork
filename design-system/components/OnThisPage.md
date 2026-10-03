# OnThisPage

The sections of a reading page, numbered as the page numbers them, in the margin beside the column.

## Use
- Mono `label`-sized links, numbered with §; the heading "On this page" in `ink-2`. On wide screens it stays in view as you read (sticky); on phones it sits above the text.
- Only on pages with three or more sections.

## Markup
```html
<nav class="fk-toc" aria-label="On this page">
  <span class="fk-toc__head">On this page</span>
  <a href="#question">§ 1 The Question</a>
  <a href="#scope">§ 2 Disciplinary scope</a>
</nav>
```
