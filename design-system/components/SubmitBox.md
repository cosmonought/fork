# SubmitBox

The last section of a reading page that asks something of the reader: what to do, by when, and the button.

## Use
- The system's one raised surface: `sheet` fill, `rule` border, `radius-0`, no shadow.
- Heading in `heading` with its § number; one paragraph in `body-s`; one solid Button.
- On the call: "To submit or pitch", the address and both deadlines.

## Markup
```html
<section class="fk-box" id="submit" aria-labelledby="submit-h">
  <h2 id="submit-h"><span class="fk-sec">§ 3</span>To submit or pitch</h2>
  <p>Write to <a class="fk-link" href="mailto:academy@netadao.org">academy@netadao.org</a>. Written submissions due 15 January 2027. Artwork (color and B&amp;W) due 15 January 2027.</p>
  <a class="fk-button" href="/submit.html">Submit work</a>
</section>
```
