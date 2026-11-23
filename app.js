/* Portfolio V2 — app.js.
   Renders the work grid from videos.js, video modal, mobile nav,
   and the contact form (FormSubmit AJAX to hello@drizoeditz.pro,
   same endpoint as the live site). No analytics, no tracking. */
(function () {
  'use strict';

  var EMAIL = 'hello@drizoeditz.pro';
  var FORM_URL = 'https://formsubmit.co/ajax/' + EMAIL;
  var WHATSAPP_URL = 'https://wa.me/4917688649232';

  var CLIENTS = {
    ahp: 'Art Home Photo',
    as: 'Art Social',
    charlie: "Charlie's Pokecards",
    hercules: 'Hercules Training'
  };

  /* Reduced motion: do not autoplay the hero showreel. */
  var heroVideo = document.getElementById('hero-video');
  if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  }

  /* Mobile nav. */
  var nav = document.querySelector('.nav');
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  function setNavOpen(open) {
    if (!nav || !navToggle) return;
    nav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      setNavOpen(!nav.classList.contains('open'));
    });
  }
  if (navMenu) {
    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNavOpen(false);
    });
  }
  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target)) setNavOpen(false);
  });

  /* Work grid. */
  var grid = document.getElementById('work-grid');
  if (grid && typeof VIDEOS !== 'undefined') {
    VIDEOS.forEach(function (v, i) {
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'work-card' + (v.vertical ? '' : ' wide');
      card.setAttribute('data-index', String(i));
      card.setAttribute('aria-label', 'Play video: ' + v.title);

      var wrap = document.createElement('span');
      wrap.className = 'work-poster-wrap';
      var img = document.createElement('img');
      img.className = 'work-poster';
      img.src = v.poster;
      img.alt = v.title + ' — ' + (CLIENTS[v.client] || v.client);
      img.loading = 'lazy';
      img.decoding = 'async';
      var badge = document.createElement('span');
      badge.className = 'play-badge';
      badge.setAttribute('aria-hidden', 'true');
      badge.textContent = '▶';
      wrap.appendChild(img);
      wrap.appendChild(badge);

      var body = document.createElement('span');
      body.className = 'work-body';
      var title = document.createElement('span');
      title.className = 'work-title';
      title.textContent = v.title;
      var meta = document.createElement('span');
      meta.className = 'work-meta';
      meta.textContent = (CLIENTS[v.client] || v.client) + ' · ' +
        (v.vertical ? 'Reel — Vertical' : 'YouTube');
      body.appendChild(title);
      body.appendChild(meta);

      card.appendChild(wrap);
      card.appendChild(body);
      card.addEventListener('click', function () { openModal(i, card); });
      grid.appendChild(card);
    });
  }

  /* Video modal. */
  var modal = document.getElementById('video-modal');
  var dialog = document.getElementById('modal-dialog');
  var modalTitle = document.getElementById('modal-title');
  var modalMedia = document.getElementById('modal-media');
  var modalClose = document.getElementById('modal-close');
  var lastFocus = null;

  function openModal(index, invoker) {
    var v = VIDEOS[index];
    if (!v || !modal) return;
    lastFocus = invoker || document.activeElement;
    modalTitle.textContent = v.title;
    dialog.classList.toggle('vertical', !!v.vertical);
    modalMedia.innerHTML = '';
    if (v.youtube) {
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + v.youtube + '?autoplay=1&rel=0';
      frame.title = v.title;
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      frame.allowFullscreen = true;
      modalMedia.appendChild(frame);
    } else {
      var video = document.createElement('video');
      video.src = v.src;
      video.poster = v.poster;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = 'auto';
      modalMedia.appendChild(video);
    }
    modal.hidden = false;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    if (!modal || !modal.classList.contains('open')) return;
    modalMedia.innerHTML = '';
    modal.classList.remove('open');
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      setNavOpen(false);
    }
  });

  /* Contact form. */
  var form = document.getElementById('contact-form');
  if (form) {
    var nameEl = document.getElementById('contact-name');
    var emailEl = document.getElementById('contact-email');
    var typeEl = document.getElementById('contact-type');
    var formatEl = document.getElementById('contact-format');
    var briefEl = document.getElementById('contact-brief');
    var footageEl = document.getElementById('contact-footage');
    var statusEl = document.getElementById('contact-status');
    var submitBtn = document.getElementById('contact-submit');

    function setStatus(text, isError) {
      statusEl.textContent = text;
      statusEl.style.fontWeight = isError ? '600' : '400';
    }
    function setStatusHtml(html) {
      statusEl.innerHTML = html;
    }
    function isUrl(v) {
      return /^https?:\/\/[^\s/.]+\.[^\s]{2,}$/i.test(v);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      [nameEl, emailEl, briefEl, footageEl].forEach(function (el) {
        el.removeAttribute('aria-invalid');
      });
      var name = nameEl.value.trim();
      var email = emailEl.value.trim();
      var brief = briefEl.value.trim();
      var footage = footageEl.value.trim();
      if (footage && !/^https?:\/\//i.test(footage)) footage = 'https://' + footage;
      var bad = [];
      var parts = [];
      if (!name) { bad.push(nameEl); parts.push('your name'); }
      if (!email) { bad.push(emailEl); parts.push('your email'); }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        bad.push(emailEl);
        setStatus('That email does not look right. Check it and send again.', true);
        bad.forEach(function (el) { el.setAttribute('aria-invalid', 'true'); });
        bad[0].focus();
        return;
      }
      if (!brief) { bad.push(briefEl); parts.push('your brief'); }
      if (footage && !isUrl(footage)) { bad.push(footageEl); }
      if (bad.length) {
        var msg = parts.length
          ? 'Add ' + parts.join(' and ') + ', then send again.'
          : 'One of those links does not look right. Paste the full address, for example https://drive.google.com/...';
        setStatus(msg, true);
        bad.forEach(function (el) { el.setAttribute('aria-invalid', 'true'); });
        bad[0].focus();
        return;
      }
      submitBtn.disabled = true;
      var originalLabel = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      setStatus('Sending your brief…', false);
      var payload = {
        name: name,
        email: email,
        'project-type': typeEl.value,
        format: formatEl.value,
        brief: brief,
        'footage-link': footage,
        _subject: 'Project brief - ' + name,
        _template: 'table',
        _captcha: 'false'
      };
      fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (res) {
        if (!res.ok) throw new Error('FormSubmit returned ' + res.status);
        return res.json().catch(function () { return {}; });
      }).then(function () {
        setStatus('Brief sent. Driss will reply to ' + email + ' soon.', false);
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }).catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        setStatusHtml('Could not send your brief, please try again or message Driss on <a href="' + WHATSAPP_URL + '">WhatsApp</a>.');
      });
    });
  }
})();
