/* Homepage case-card video covers (exported from the user's Unicorn
   Studio scene). Under prefers-reduced-motion they hold their poster
   frame instead of looping. */
(function () {
  if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.case-card__video').forEach(function (v) {
    v.removeAttribute('autoplay');
    v.pause();
  });
})();
