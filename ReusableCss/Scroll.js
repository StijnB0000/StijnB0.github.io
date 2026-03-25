/* =====================================================
   Scroll animations & reading progress bar
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Reading progress bar ──────────────────────── */
  const bar = document.getElementById('reading-progress');
  if (bar) {
    const updateBar = () => {
      const scrolled  = window.scrollY;
      const totalH    = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${totalH > 0 ? scrolled / totalH : 0})`;
    };
    window.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  /* ── Scroll reveal ─────────────────────────────── */
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold:   0.08,
    rootMargin: '0px 0px -28px 0px'
  });

  targets.forEach(el => observer.observe(el));

});
