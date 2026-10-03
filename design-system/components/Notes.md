# Notes

Notes and references at the end of a piece: numbered notes that link both ways, and a reference list in the journal's citation style.

## Use
- A note's number in the text is `fk-noteref`: mono, superscript, `issue`, linking to the note; the note links back (↩). Jumping to a note flashes it in `issue-tint`.
- The end of the text is marked by the ForkDivider's end mark; then Notes, then References, each opened by a 1px `ink` rule and headed in mono.
- Notes and references in `note` (16/1.5). References hang (28px) and follow Chicago author-date, as the journal asks of contributors (author-title for humanities submissions).

## Markup
```html
<p>… not merely technical innovation.<sup class="fk-noteref"><a href="#note-1" id="ref-1" aria-label="Note 1">1</a></sup></p>
<section class="fk-notes" aria-labelledby="notes"><h2 id="notes">Notes</h2>
  <ol><li id="note-1">… <a class="fk-notes__back" href="#ref-1" aria-label="Back to the text">↩</a></li></ol>
</section>
<section class="fk-references" aria-labelledby="refs"><h2 id="refs">References</h2>
  <ul><li>Heidegger, Martin. 1977. “The Question Concerning Technology.” In <i>The Question Concerning Technology and Other Essays</i>, translated by William Lovitt. New York: Harper &amp; Row.</li></ul>
</section>
```
