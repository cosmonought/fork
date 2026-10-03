# Field

Labelled inputs, selects and text areas: square, on `sheet`, with a 1px `ink` border.

## Use
- The label sits above in mono capitals (`label` style); "(optional)" follows it in `ink-2`, lower case. Never use a placeholder as the label.
- Inputs at `body-s` (19px, so phones don't zoom), 50px tall, `radius-0`. Focus: a 2px `focus` ring, offset 2px.
- Help text below in `note`, `ink-2`. An error sets `aria-invalid="true"` (the border thickens to 2px) and says what to do in italic `ink`, linked by `aria-describedby`. Errors are not coloured: the system keeps colour for the volume.
- Choices: a `fieldset.fk-field` with a `legend` and `fk-choice` rows (20px boxes in `ink`).
- A form that registers interest gets `data-fk-form data-fk-mailto="academy@netadao.org"`: `Fork.enhance()` writes the message into the visitor's mail app and then shows the form's `[data-fk-done]` note (there is no server).

## Markup
```html
<div class="fk-field">
  <label for="email">Email</label>
  <input class="fk-input" id="email" name="email" type="email" autocomplete="email" required>
</div>
<div class="fk-field">
  <label for="area">Research area <span class="fk-field__opt">(optional)</span></label>
  <input class="fk-input" id="area" name="area" type="text">
  <p class="fk-field__help">Your information will only be used to contact you about Fork.</p>
</div>
```
