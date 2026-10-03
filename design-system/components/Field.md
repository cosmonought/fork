# Field

Labelled inputs, selects and text areas: square, on `sheet`, with a 1px `ink` border.

## Use
- The label sits above in mono capitals (`label` style); "(optional)" follows it in `ink-2`, lower case. Never use a placeholder as the label.
- Inputs at `body-s` (19px, so phones don't zoom), 50px tall, `radius-0`. Focus: a 2px `focus` ring, offset 2px.
- Help text below in `note`, `ink-2`. An error sets `aria-invalid="true"` (the border thickens to 2px) and says what to do in italic `ink`, linked by `aria-describedby`. Errors are not coloured: the system keeps colour for the volume.
- Choices: a `fieldset.fk-field` with a `legend` and `fk-choice` rows (20px boxes in `ink`).
- A form that sends something to us gets `data-fk-form`, `data-fk-store` (the Firebase Realtime Database list it posts to: the Academy's `…/forkInterests` for Register interest) and `data-fk-source` ("fork.netadao.org"). `Fork.enhance()` posts the named fields as one record with the server's time, shows the button's `data-fk-busy` words ("Registering…") while it sends, then swaps the form for its `[data-fk-done]` note. If the database refuses, `data-fk-fallback` names a second list to try; if nothing takes it, the form stays filled in and its `[data-fk-error]` note (`fk-field__error`, `role="alert"`, hidden until needed) says so. Without `data-fk-store` (previews) it only shows the note.
- Select options carry short values (`submitting`, `editorial`, `reviewing`, `updates`): the database's rules accept only those. Registrations appear in the Academy Admin, under Fork.
- Never a `mailto:` form or link: people close the mail app and the message is lost.

## Markup
```html
<div class="fk-field">
  <label for="email">Email</label>
  <input class="fk-input" id="email" name="email" type="email" autocomplete="email" required>
</div>
<div class="fk-field">
  <label for="area">Research area <span class="fk-field__opt">(optional)</span></label>
  <input class="fk-input" id="area" name="area" type="text">
  <p class="fk-field__help">Your registration goes to the editors at Neta DAO Academy. We use it only to contact you about Fork.</p>
</div>
```
