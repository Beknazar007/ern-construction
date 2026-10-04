/* ERN Construction LLC — site logic (no inline handlers, CSP-friendly) */
(function () {
  'use strict';

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
  var FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwlpgjjq';
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  function showStatus(msg, kind) {
    if (!status) return;
    status.textContent = msg;
    status.className = 'form-status ' + kind;
    status.hidden = false;
  }
  if (form) {
    var lang = document.documentElement.lang === 'ru' ? 'ru' : 'en';
    var msgs = lang === 'ru'
      ? { notready: 'Форма ещё не подключена. Напишите нам на info@ern-construction.com.', sending: 'Отправка…', thanks: 'Спасибо! Мы свяжемся с вами в ближайшее время.', error: 'Что-то пошло не так. Напишите нам на info@ern-construction.com.' }
      : { notready: 'The form is not connected yet. Please email info@ern-construction.com.', sending: 'Sending…', thanks: 'Thank you! We will contact you shortly.', error: 'Something went wrong. Please email info@ern-construction.com.' };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      // Not configured yet — fail loudly in the console, guide the user politely.
      if (FORMSPREE_ENDPOINT.indexOf('YOUR_FORM_ID') !== -1) {
        showStatus(msgs.notready, 'err');
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      showStatus(msgs.sending, 'ok');

      fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          showStatus(msgs.thanks, 'ok');
        } else {
          showStatus(msgs.error, 'err');
        }
      }).catch(function () {
        showStatus(msgs.error, 'err');
      }).finally(function () {
        if (btn) btn.disabled = false;
      });
    });
  }

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
