/* ERN Construction LLC — site logic (no inline handlers, CSP-friendly) */
(function () {
  'use strict';

  var translations = window.translations || {};
  window._lang = 'ru';

  function setLang(lang) {
    if (!translations[lang]) lang = 'en';
    window._lang = lang;
    document.documentElement.lang = lang;
    var t = translations[lang];

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Document title
    document.title = lang === 'en'
      ? 'ERN Construction LLC — Environmental Remediation Network'
      : 'ERN Construction LLC — ЭРН-Строй';

    // Active button state
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Remember choice
    try { localStorage.setItem('ern_lang', lang); } catch (e) {}
  }
  window.setLang = setLang;

  // Language switch buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  // Mobile navigation menu
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  var scrim = document.getElementById('nav-scrim');
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('open');
    if (toggle) { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open menu'); }
    if (scrim) scrim.hidden = true;
  }
  function openMenu() {
    if (!menu) return;
    menu.classList.add('open');
    if (toggle) { toggle.setAttribute('aria-expanded', 'true'); toggle.setAttribute('aria-label', 'Close menu'); }
    if (scrim) scrim.hidden = false;
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    if (scrim) scrim.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Contact form — submits to a Formspree endpoint (set your form ID below)
  var FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  function showStatus(msg, kind) {
    if (!status) return;
    status.textContent = msg;
    status.className = 'form-status ' + kind;
    status.hidden = false;
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var t = translations[window._lang] || translations.en || {};

      // Not configured yet — fail loudly in the console, guide the user politely.
      if (FORMSPREE_ENDPOINT.indexOf('YOUR_FORM_ID') !== -1) {
        showStatus(t['form.notready'] || 'Form is not connected yet. Please email info@ern-construction.com.', 'err');
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      showStatus(t['form.sending'] || 'Sending…', 'ok');

      fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          showStatus(t['form.thanks'] || 'Thank you! We will contact you shortly.', 'ok');
        } else {
          showStatus(t['form.error'] || 'Something went wrong. Please email info@ern-construction.com.', 'err');
        }
      }).catch(function () {
        showStatus(t['form.error'] || 'Something went wrong. Please email info@ern-construction.com.', 'err');
      }).finally(function () {
        if (btn) btn.disabled = false;
      });
    });
  }

  // Language auto-detection: saved choice > browser language > Russian default
  (function initLang() {
    var lang = 'ru';
    try {
      var saved = localStorage.getItem('ern_lang');
      if (saved && translations[saved]) {
        lang = saved;
      } else {
        var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        lang = nav.indexOf('ru') === 0 ? 'ru' : 'en';
      }
    } catch (e) {
      var n = (navigator.language || 'en').toLowerCase();
      lang = n.indexOf('ru') === 0 ? 'ru' : 'en';
    }
    setLang(lang);
  })();

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }
})();
