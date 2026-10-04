# ScopeAreas

The four areas the journal publishes in, numbered, each opened by a rule.

## Use
- A grid of `fk-area`s (240px at least): number in `numeral`, `issue`; name in `heading-s`; description in `text-s`, `ink-2`.
- The homepage gives each area its first sentence; the Scope page (`fk-areas--wide`, two columns) gives the full text, the second paragraph in `ink-2`.
- The numbers are the journal's priority, the same on the homepage and the Scope page: Philosophy, Political Economy, Law and Rights, Governance.

## Markup
```html
<div class="fk-areas">
  <article class="fk-area">
    <span class="fk-area__no">01</span>
    <h3 class="fk-area__title">Philosophy</h3>
    <p class="fk-area__text">Post-structuralist, psychoanalytic, and critical theory approaches to Web3.</p>
  </article>
</div>
```
