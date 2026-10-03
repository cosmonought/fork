# Facts

A row of terms and values: the journal's particulars on the homepage, a call's deadlines on its page.

## Use
- A `dl`: terms in `meta` mono (`ink-2`), values in `body-s` serif. Columns fit themselves (200px at least) and wrap.
- `fk-facts--ruled` adds a 1px `ink` rule above, where the row opens a page; every row ends on a `rule` hairline.
- Values are exact and short: dates as "15 January 2027", counts as "500 – 15,000 words", an email as itself.

## Markup
```html
<dl class="fk-facts fk-facts--ruled">
  <div><dt>Submission deadline</dt><dd>15 January 2027</dd></div>
  <div><dt>Word count</dt><dd>500 – 15,000 words</dd></div>
</dl>
```
