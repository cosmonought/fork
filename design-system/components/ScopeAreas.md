# ScopeAreas

The four areas the journal publishes in, numbered, each opened by a rule.

## Use
- A grid of `fk-area`s (240px at least): number in `numeral`, `issue`; name in `heading-s`; description in `text-s`, `ink-2`.
- The homepage gives each area its first sentence; the Scope page (`fk-areas--wide`, two columns) gives the full text, the second paragraph in `ink-2`.
- The numbers are the areas' order on the Scope page; keep it: Governance, Political Economy, Philosophy, Law and Rights.

## Markup
```html
<div class="fk-areas">
  <article class="fk-area">
    <span class="fk-area__no">01</span>
    <h3 class="fk-area__title">Governance</h3>
    <p class="fk-area__text">On-chain and off-chain governance mechanisms, DAO constitutions, voting systems, and token-weighted democracy.</p>
  </article>
</div>
```
