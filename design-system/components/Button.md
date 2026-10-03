# Button

Square mono-caps buttons: solid `ink` for the page's one main action, an outline for the second.

## Variants
- `fk-button`: `ink` fill, `paper` label. Hover turns it `issue` with an `on-issue` label.
- `fk-button--outline`: 1px `ink` border on the ground. Hover fills it `ink`.
- Disabled: 45% and inert; say why in the label ("Submissions closed").

## Use
- 46px tall, `radius-0`, label in `button` (CSS sets the capitals; write "Read the call").
- At most two side by side (`fk-buttons`), the solid one first.
- `<a class="fk-button">` when it goes somewhere, `<button>` when it acts.
- Between pages, prefer a TextLink; a button is for the call to act (read the call, submit work, register).

## Markup
```html
<div class="fk-buttons">
  <a class="fk-button" href="/cfp.html">Read the call</a>
  <a class="fk-button fk-button--outline" href="/submit.html">Submit work</a>
</div>
```
