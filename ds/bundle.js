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

  /* Register interest: the form sends its named fields, as one record, to the list data-fk-store names (a Firebase
     Realtime Database URL ending in the list; the database's rules decide what it accepts), stamped with the server's
     time and data-fk-source. If the list refuses the record, data-fk-fallback names a second list to try. Once a list
     has it, the form gives way to its done note (the [data-fk-done] sibling); if none has it, the form stays, filled in,
     and its [data-fk-error] note says so. Without data-fk-store (a preview) the form only shows its done note.
     Nothing here opens the visitor's mail app. */
  function send(url, record) {
    // a plain-text body keeps this a simple request (no CORS preflight); the database reads it as JSON
    return fetch(url.replace(/\/+$/, '') + '.json', { method: 'POST', body: JSON.stringify(record) }).then(function (r) {
      if (r.ok) return r;
      var e = new Error('Not accepted (' + r.status + ')'); e.status = r.status; throw e;
    });
  }
  Fork.form = function (form) {
    if (form.__fkForm) return;
    form.__fkForm = true;
    var button = form.querySelector('[type="submit"]'), label = button ? button.innerHTML : '';
    var error = form.querySelector('[data-fk-error]'), busy = false;
    function wait(on) {
      busy = on;
      form.setAttribute('aria-busy', on ? 'true' : 'false');
      if (button) { button.disabled = on; button.innerHTML = on ? (button.getAttribute('data-fk-busy') || 'Sending…') : label; }
    }
    function finished() {
      var done = form.parentNode && form.parentNode.querySelector('[data-fk-done]');
      form.reset();
      if (!done) return;
      form.hidden = true; done.hidden = false;
      done.setAttribute('tabindex', '-1'); if (done.focus) done.focus();
    }
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (busy) return;
      if (error) error.hidden = true;
      if (form.checkValidity && !form.checkValidity()) { if (form.reportValidity) form.reportValidity(); return; }
      var store = form.getAttribute('data-fk-store'), fallback = form.getAttribute('data-fk-fallback');
      if (!store || !window.fetch) { finished(); return; }
      var record = {};
      each(form, 'input, select, textarea', function (f) {
        if (!f.name || f.disabled || f.type === 'submit' || f.type === 'button') return;
        if ((f.type === 'checkbox' || f.type === 'radio') && !f.checked) return;
        var v = String(f.value || '').trim();
        if (f.type === 'email') v = v.toLowerCase();
        if (v) record[f.name] = v;   // an empty optional field is left out
      });
      if (form.getAttribute('data-fk-source')) record.source = form.getAttribute('data-fk-source');
      record.submittedAt = { '.sv': 'timestamp' };
      wait(true);
      send(store, record).catch(function (e) {
        if (fallback && e.status && e.status < 500) return send(fallback, record);   // refused by the rules: the second list
        throw e;
      }).then(function () { wait(false); finished(); }, function () {
        wait(false);
        if (error) error.hidden = false;   // role="alert": announced where it appears
        if (button && button.focus) button.focus();   // sending disabled it, which dropped the focus
      });
    });
  };

  Fork.enhance = function (root) {
    each(root, '.fk-mark', Fork.mark);
    each(root, '.fk-divider', Fork.divider);
    each(root, 'form[data-fk-form]', Fork.form);
  };

  Fork.version = '1.1.0';
  window.Fork = Fork;
})();
