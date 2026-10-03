# IssueCover

A volume's cover: its number, huge, on the volume's colour. The homepage shows the current volume's beside its call.

## Use
- 3:4, `issue` fill, text and rules in `on-issue`, `radius-0`. Top row: "Fork" and "Vol. N" in mono; the numeral in `cover-numeral`; at the foot, over a hairline, the theme in italic and one line of dates in mono.
- Link the whole cover to the volume's page (or, while it is a call, to the call), with an `aria-label` naming the volume and its theme; the numeral is `aria-hidden`.
- `fk-cover--s` (150px wide, no foot) for lists of volumes. `fk-cover--next` (a dashed `ink-2` outline) stands for a volume announced before its colour is chosen.
- Each volume's colour is its own (README: Issues). The cover is where it is seen at full strength.

## Markup
```html
<a class="fk-cover" href="/cfp.html" aria-label="Vol. 0: The Event of Web3 and the Question Concerning Technology">
  <span class="fk-cover__top"><span>Fork</span><span>Vol. 0</span></span>
  <span class="fk-cover__numeral" aria-hidden="true">0</span>
  <span class="fk-cover__foot">
    <span class="fk-cover__theme">The Event of Web3 and the Question Concerning Technology</span>
    <span class="fk-cover__note">Written work and artwork due 15 January 2027</span>
  </span>
</a>
```

## Don't
- No pictures on a cover, no second colour, no gradient. Artwork belongs inside the issue.
