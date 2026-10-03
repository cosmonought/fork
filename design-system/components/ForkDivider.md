# ForkDivider

A line that splits in two: the journal's name drawn as a rule. It divides a page's major movements, where a plain rule would do but the page turns.

## Use
- One or two to a page, between its big parts: on the homepage before the contents and before the principles; on About before "The Name"; at the end of a reading page before its notes (`fk-divider--end`). Never under a heading, inside a list, or two in a row.
- It replaces the section's own rule: give the section before it `fk-section--open`.
- The trunk and the lower branch are `ink`, the upper branch is `issue`; all three `stroke-divider` (1.5px) at every width.
- Full width, 64px tall; it stretches with its column and its curves widen with it. `fk-divider--end` is 240px wide and 32px tall.
- Decorative: `aria-hidden="true"`.

## Motion
- `Fork.enhance()` draws a divider left to right (1.1s) the first time it comes half into view. One already on screen when the page loads is simply there, as is every divider under reduced motion or without script.

## Markup
```html
<div class="fk-divider" aria-hidden="true"><svg viewBox="0 0 1280 80" preserveAspectRatio="none" focusable="false"><path class="fk-divider__trunk" d="M0 40H540"/><path class="fk-divider__branch--a" d="M540 40C700 40 760 6 1280 6"/><path class="fk-divider__branch--b" d="M540 40C700 40 760 74 1280 74"/></svg></div>

<div class="fk-divider fk-divider--end" aria-hidden="true"><svg viewBox="0 0 240 32" preserveAspectRatio="none" focusable="false"><path class="fk-divider__trunk" d="M0 16H90"/><path class="fk-divider__branch--a" d="M90 16C130 16 150 2.5 240 2.5"/><path class="fk-divider__branch--b" d="M90 16C130 16 150 29.5 240 29.5"/></svg></div>
```

## Don't
- Don't turn it, flip it, recolour a branch, thicken it, or use it as a bullet or an icon.
