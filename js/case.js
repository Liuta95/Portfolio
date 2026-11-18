/* Shared behaviour for the case-study pages: scroll reveal, the top-bar
   menu, and the numbered screen sliders. */
(function () {
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal
  if (!reduced && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('has-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }

  // Hero cover videos hold their poster frame under reduced motion
  if (reduced) {
    document.querySelectorAll('.cs-hero__visual video, .cs-shot video').forEach(function (v) { v.removeAttribute('autoplay'); v.pause(); });
  }

  // Typewriter: cycles the phrases in data-typewriter ("a|b|c"); static under reduced motion
  document.querySelectorAll('[data-typewriter]').forEach(function (el) {
    if (reduced) return;
    var phrases = el.getAttribute('data-typewriter').split('|');
    var p = 0, i = phrases[0].length, deleting = true;
    function tick() {
      var full = phrases[p];
      if (deleting) {
        i--;
        if (i <= 0) { deleting = false; p = (p + 1) % phrases.length; }
      } else {
        i++;
        if (i >= phrases[p].length) { deleting = true; el.textContent = phrases[p]; return setTimeout(tick, 2400); }
      }
      el.textContent = phrases[p].slice(0, Math.max(0, i));
      setTimeout(tick, deleting ? 22 : 48);
    }
    setTimeout(tick, 2600);
  });

  // Top-bar menu
  var menu = document.getElementById('caseMenu');
  if (menu) {
    var trigger = menu.querySelector('.case-menu__trigger');
    var close = function () {
      menu.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) { if (!menu.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  // Screen sliders: chips, counter, progress bar and arrows all follow
  // the track's native horizontal scroll, so swipe and trackpad work too.
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  document.querySelectorAll('[data-slider]').forEach(function (root) {
    var track = root.querySelector('.cs-track');
    var slides = Array.prototype.slice.call(track.children);
    var steps = Array.prototype.slice.call(root.querySelectorAll('.cs-step'));
    var counter = root.querySelector('.cs-counter');
    var bar = root.querySelector('.cs-progress span');
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    var total = slides.length;

    function step() { return slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth; }
    function visible() { return Math.max(1, Math.round(track.clientWidth / step())); }

    function update() {
      var first = Math.round(track.scrollLeft / step());
      var last = Math.min(total, first + visible());
      var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      if (atEnd) { last = total; first = Math.max(0, total - visible()); }
      if (counter) {
        counter.innerHTML = '<b>' + pad(first + 1) + (last - first > 1 ? '–' + pad(last) : '') + '</b> / ' + pad(total);
      }
      if (bar) bar.style.width = (last / total * 100) + '%';
      steps.forEach(function (s, i) {
        // Chips with data-slide mark a group that starts at that slide
        var from = s.dataset.slide != null ? +s.dataset.slide : i;
        var to = s.dataset.slide != null ? (steps[i + 1] && steps[i + 1].dataset.slide != null ? +steps[i + 1].dataset.slide : total) : i + 1;
        var on = from < last && to > first;
        s.classList.toggle('is-active', on);
        if (on) s.setAttribute('aria-current', 'true'); else s.removeAttribute('aria-current');
      });
      if (prev) prev.disabled = track.scrollLeft <= 4;
      if (next) next.disabled = atEnd;
    }

    function goTo(i) {
      i = Math.max(0, Math.min(total - 1, i));
      track.scrollTo({ left: slides[i].offsetLeft - slides[0].offsetLeft, behavior: reduced ? 'auto' : 'smooth' });
    }

    steps.forEach(function (s, i) { s.addEventListener('click', function () { goTo(s.dataset.slide != null ? +s.dataset.slide : i); }); });
    if (prev) prev.addEventListener('click', function () { goTo(Math.round(track.scrollLeft / step()) - visible()); });
    if (next) next.addEventListener('click', function () { goTo(Math.round(track.scrollLeft / step()) + visible()); });

    var raf = null;
    track.addEventListener('scroll', function () {
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = null; update(); });
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
})();
