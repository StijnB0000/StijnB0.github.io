/* Navigation toggle — shared across all pages */

// Inject animated background orbs
(function () {
  const counts = [1, 2, 3, 4];
  counts.forEach(n => {
    const orb = document.createElement('div');
    orb.className = `bg-orb bg-orb-${n}`;
    document.body.appendChild(orb);
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('nav-hamburger-btn');
  const panel = document.getElementById('nav-mobile-panel');

  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    panel.setAttribute('aria-hidden', !isOpen);
  });

  // Close panel when a link is tapped
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
    }
  });
});
