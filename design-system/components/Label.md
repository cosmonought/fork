# Label

The small mono line above a title or beside a section: what this is and where it belongs.

## Use
- `label` style (12px mono, `.12em`, capitals by CSS).
- `fk-label--issue` in `issue`: the kicker above a title that belongs to a volume ("Vol. 0 · Inaugural issue · Call for papers"). One per view.
- `fk-label`: a section's name in the left column of a split (About, Scope, Vol. 0 · Contents).
- `fk-label--quiet`: `ink-2`, regular weight, for headings of small apparatus (On this page).
- Separate parts with " · ".

## Markup
```html
<p class="fk-label fk-label--issue">Vol. 0 · Inaugural issue · Call for papers</p>
<h2 class="fk-label">About</h2>
```
