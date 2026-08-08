// ============================================
//   HRITHIKA E B — Portfolio 2 Scripts
// ============================================

// ── THEME TOGGLE ──
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('p2theme') || 'light';
html.setAttribute('data-theme', savedTheme);

toggleBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('p2theme', next);
  buildMarquee();
});

// ── CURSORS ──
const cursorBow   = document.getElementById('cursor-bow');
const cursorMouse = document.getElementById('cursor-mouse');
let mx = 0, my = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursorBow.style.left   = mx + 'px'; cursorBow.style.top   = my + 'px';
  cursorMouse.style.left = mx + 'px'; cursorMouse.style.top = my + 'px';
});

document.querySelectorAll('a, button, .proj-card, .mascot, .sgn-icons img').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorBow.style.transform   = 'translate(-50%,-50%) scale(1.5) rotate(10deg)';
    cursorMouse.style.transform = 'translate(-50%,-50%) scale(1.3)';
  });
  el.addEventListener('mouseleave', () => {
    cursorBow.style.transform   = 'translate(-50%,-50%) scale(1)';
    cursorMouse.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

// ── MARQUEE ──
const lightItems = [
  '🌸 frontend dev', '🎀 bharatanatyam dancer', '✿ published poet',
  '🌿 acrylic painter', '🍒 final-year cse', '✦ thrissur, kerala',
  '🌷 figma enthusiast', '🎀 1st prize @ AURA 4.0', '✿ firebase & supabase',
  '🍒 open to internships', '🌸 computer vision nerd', '✦ opencv & mediapipe',
];
const darkItems = [
  '[FRONTEND_DEV]', '[BHARATANATYAM_DANCER]', '[PUBLISHED_POET]',
  '[ACRYLIC_PAINTER]', '[FINAL_YEAR_CSE]', '[THRISSUR_KL]',
  '[FIGMA]', '[1ST_PLACE_AURA_4.0]', '[FIREBASE_+_SUPABASE]',
  '[OPEN_TO_INTERNSHIPS]', '[OPENCV_+_MEDIAPIPE]', '// deployed_on: vercel',
];

const track = document.getElementById('mtrack');

function buildMarquee() {
  track.innerHTML = '';
  const isDark = html.getAttribute('data-theme') === 'dark';
  const items  = isDark ? darkItems : lightItems;
  [...items, ...items].forEach(t => {
    const s = document.createElement('span');
    s.className = 'm-item';
    s.innerHTML = t + '<span class="m-sep"> · </span>';
    track.appendChild(s);
  });
}
buildMarquee();

// ── MASCOT ACTIVITY ──
const cat   = document.getElementById('pixelCat');
const ghost = document.getElementById('pixelGhost');

// Cat blinks randomly
setInterval(() => {
  const eyes = document.querySelectorAll('.pixel-cat .cat-eye');
  eyes.forEach(e => { e.style.height = '2px'; e.style.borderRadius = '0'; });
  setTimeout(() => {
    eyes.forEach(e => { e.style.height = '7px'; e.style.borderRadius = '50%'; });
  }, 120);
}, 3500);

// Ghost wobbles and flickers
setInterval(() => {
  const gb = document.querySelector('.ghost-body');
  if (!gb) return;
  gb.style.transform = 'skewX(5deg)';
  gb.style.filter = 'brightness(1.4)';
  setTimeout(() => {
    gb.style.transform = 'skewX(0deg)';
    gb.style.filter = 'brightness(1)';
  }, 100);
}, 4000);

// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('up'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── NAV SCROLL SHADOW ──
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.boxShadow =
    window.scrollY > 40 ? '0 4px 30px var(--shadow)' : 'none';
}, { passive: true });