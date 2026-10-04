# Homepage

fork.netadao.org: the header, the open call beside its cover, the journal's particulars, About, the scope, and the principles.

## Order
1. SiteHeader, the same sticky strip as every page. The page's `h1` is the journal's full name, visually hidden ("Fork: The Journal of Interchain Theory and Politics").
2. The hero (`fk-hero`): the current call's kicker, title (`display-xl`), its question in italic, Read the call / Submit work; beside it the volume's IssueCover. Once Vol. 0 is published, the hero becomes the volume: its title, the editor's statement link and "Read the issue".
3. Facts: Publisher, Frequency, Format, Status ("Vol. 0 in preparation" says the volume isn't out yet).
4. About (a split: label left, lede and copy right), then the ForkDivider.
5. Scope, with the four areas' first sentences, then the ForkDivider.
6. Principles, then the SiteFooter.

## Use
- Sections are separated by `rule` hairlines; the two ForkDividers replace the rule where the page turns (`fk-section--open` before each).
- One `issue` kicker, one cover. No images.
- Nothing unpublished is shown as if it were there: no bracketed titles or contributors on the public site. When a volume is published, its Contents (the Contents component, as on IssuePage) go between About and Scope.
