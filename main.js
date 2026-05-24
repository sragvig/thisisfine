// ── Mobile nav toggle ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.textContent = '☰';
  });
});

// ── Scroll reveal ──────────────────────────────────────────────
const revealTargets = [
  '.stat-card',
  '.fact-card',
  '.award-card',
  '.tl-card',
  '.video-card',
  '.wphoto',
  '.workshop-cta-block',
  '.play-inner',
  '.section-title',
  '.section-sub',
];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Nav scroll style ───────────────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 4px 24px rgba(26,26,46,0.14)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── Smooth stat counter animation ─────────────────────────────
function animateCount(el, target, suffix = '') {
  const duration = 1500;
  const start = performance.now();
  const isDecimal = String(target).includes('.');

  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = isDecimal
      ? (eased * target).toFixed(1)
      : Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statNums = document.querySelectorAll('.stat-num');
const statMap = {
  '5K+': [5000, 'K+'],
  '250': [250, ''],
  '37+': [37, '+'],
  '784': [784, ''],
  '7': [7, ''],
  '91%': [91, '%'],
};

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.dataset.raw;
      const info = statMap[text];
      if (info) animateCount(el, info[0], info[1]);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => {
  el.dataset.raw = el.textContent;
  statObserver.observe(el);
});
