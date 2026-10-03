/* @ds-bundle: {"format":4,"namespace":"Fork","components":[{"name":"ForkMark"},{"name":"ForkDivider"},{"name":"SiteHeader"},{"name":"SiteFooter"},{"name":"Button"},{"name":"TextLink"},{"name":"Label"},{"name":"IssueCover"},{"name":"Facts"},{"name":"Contents"},{"name":"ScopeAreas"},{"name":"PullQuote"},{"name":"Principles"},{"name":"OnThisPage"},{"name":"Prose"},{"name":"Notes"},{"name":"ArticleHead"},{"name":"Field"},{"name":"SubmitBox"}]} */
/* Fork · Offprint. A small vanilla enhancer for the static site: call Fork.enhance() once the page has loaded. */
(function () {
  'use strict';
  var Fork = window.Fork || {};
  var motion = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var hover = window.matchMedia ? window.matchMedia('(hover: hover)') : null;
  function reduced() { return !!(motion && motion.matches); }
  function each(root, sel, fn) {
    var list = (root || document).querySelectorAll(sel);
    for (var i = 0; i < list.length; i++) fn(list[i]);
  }
  function below(el) {
    var r = el.getBoundingClientRect();
    return r.top > (window.innerHeight || document.documentElement.clientHeight);
  }

  /* The Fork mark is whole at rest and cut by hover or keyboard focus (CSS), its slash in the mark's own pink-to-blue. A touch screen can't hover,
     so there the mark cuts itself once, when three quarters of it is in view, and stays cut. */
  var marks = 0;
  Fork.mark = function (el) {
    if (el.__fkMark) return;
    el.__fkMark = true;
    // each mark gets its own gradient id: repeated ids all point at the first mark's gradient, which stops
    // painting when that mark is hidden
    var grad = el.querySelector('linearGradient[id]');
    if (grad) {
      var ref = 'url(#' + grad.id + ')', id = grad.id + '-' + (++marks);
      grad.id = id;
      each(el, '[stroke="' + ref + '"]', function (p) { p.setAttribute('stroke', 'url(#' + id + ')'); });
    }
    if (hover && hover.matches) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('is-cut'); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.intersectionRatio >= 0.75) { el.classList.add('is-cut'); io.disconnect(); }
      });
    }, { threshold: [0, 0.75, 1] });
    io.observe(el);
  };

  /* The fork divider draws itself left to right, once, as it comes into view. One already on screen when the
     page loads is simply there; under reduced motion every divider is. */
  Fork.divider = function (el) {
    if (el.__fkDivider) return;
    el.__fkDivider = true;
    if (reduced() || !('IntersectionObserver' in window) || !below(el)) return;
    el.classList.add('is-waiting');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { el.classList.remove('is-waiting'); io.disconnect(); }
      });
    }, { threshold: 0.5 });
    io.observe(el);
  };

  /* Register interest: the site has no server, so the form writes the message into the visitor's mail app
     (data-fk-mailto names the address) and then shows its done note (the form's [data-fk-done] sibling). */
  Fork.form = function (form) {
    if (form.__fkForm) return;
    form.__fkForm = true;
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (form.checkValidity && !form.checkValidity()) { if (form.reportValidity) form.reportValidity(); return; }
      var to = form.getAttribute('data-fk-mailto');
      var lines = [];
      each(form, 'input, select, textarea', function (f) {
        if (!f.name || f.type === 'submit') return;
        if ((f.type === 'checkbox' || f.type === 'radio') && !f.checked) return;
        var label = form.querySelector('label[for="' + f.id + '"]'), name = f.name;
        if (label) {   // the label's own words, without "(optional)"
          var copy = label.cloneNode(true);
          each(copy, '.fk-field__opt', function (o) { o.parentNode.removeChild(o); });
          name = copy.textContent.replace(/\s+/g, ' ').trim();
        }
        lines.push(name + ': ' + (f.value.trim() || 'Not provided'));
      });
      if (to) {
        var subject = form.getAttribute('data-fk-subject') || 'Fork';
        window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
      }
      var done = form.parentNode && form.parentNode.querySelector('[data-fk-done]');
      if (done) { form.hidden = true; done.hidden = false; if (done.focus) { done.setAttribute('tabindex', '-1'); done.focus(); } }
    });
  };

  Fork.enhance = function (root) {
    each(root, '.fk-mark', Fork.mark);
    each(root, '.fk-divider', Fork.divider);
    each(root, 'form[data-fk-form]', Fork.form);
  };

  Fork.version = '1.0.0';
  window.Fork = Fork;
})();
