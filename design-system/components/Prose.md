# Prose

The reading column: articles, the call, About. Newsreader at reading size, numbered sections, figures and the occasional pull quote.

## Use
- `fk-prose` holds the text: `body` (21/1.62) stopping at `measure`; paragraphs `space-5` apart, no indents.
- Section headings in `heading`, after a § number (`fk-sec`, `index` mono in `issue`).
- Open a page's first paragraph with a few words in small capitals (`fk-leadin`).
- Links are `fk-link`. Block quotations indent 1.4em at `body-s`; one PullQuote at most.
- Figures (`fk-figure`) take the column's width: the image, then a caption in `note`, `ink-2`, led by "Fig. 1" in mono. Artwork comes in colour or black and white, as submitted; never crop it to fit.

## Markup
```html
<article class="fk-prose">
  <h2 id="question"><span class="fk-sec">§ 1</span>The Question</h2>
  <p><span class="fk-leadin">Where did blockchain technology come from,</span> and where is it going? …</p>
  <figure class="fk-figure"><img src="…" alt="…"><figcaption><span class="fk-figure__no">Fig. 1</span>[Artist], <i>[Title of work]</i>, [year].</figcaption></figure>
</article>
```
