/* ============================================================
   MAIN.JS — All site logic. You don't need to edit this file.
   To change content, edit js/config.js instead.
   ============================================================ */

/* ===== CURSOR ===== */
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
});
(function loop() {
  rx += (mx - rx) * .11; ry += (my - ry) * .11;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();
function addCursorTargets() {
  document.querySelectorAll('a,button,.filter-btn,.fq,.tdot,.step,.wc,.pc,.beh-card,.g-item,.nav-logo,.fl,.nav-hamburger').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
  });
}

/* ===== MOBILE MENU ===== */
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
function closeMobileMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', closeMobileMenu));

/* ===== CANVAS BACKGROUND ===== */
let animStarted = false;
function initCanvas() {
  const c = document.getElementById('bg');
  if (!c || animStarted) return;
  animStarted = true;
  const ctx = c.getContext('2d');
  function rs() { c.width = c.offsetWidth; c.height = c.offsetHeight; }
  rs(); window.addEventListener('resize', rs);
  const orbs = [
    { x: .2, y: .35, ox: .2, oy: .35, r: .38, hue: 210 },
    { x: .78, y: .62, ox: .78, oy: .62, r: .3, hue: 140 },
    { x: .52, y: .18, ox: .52, oy: .18, r: .24, hue: 60 }
  ];
  let t = 0, hmx = .5, hmy = .5;
  document.querySelector('.hero')?.addEventListener('mousemove', e => {
    hmx = e.clientX / innerWidth; hmy = e.clientY / innerHeight;
  });
  (function draw() {
    const W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H);
    orbs.forEach((o, i) => {
      o.x = o.ox + Math.sin(t * .0004 * 1000 + i) * .1 + (hmx - .5) * (i + 1) * .04;
      o.y = o.oy + Math.cos(t * .0006 * 1000 + i) * .08 + (hmy - .5) * (i + 1) * .03;
      const x = o.x * W, y = o.y * H, r = o.r * Math.min(W, H);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `hsla(${o.hue},55%,45%,.2)`);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    });
    t++; requestAnimationFrame(draw);
  })();
}

/* ===== PAGE NAVIGATION ===== */
function nav(page, sub = '') {
  const ov = document.getElementById('page-overlay');
  ov.classList.add('entering');
  setTimeout(() => {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    if (page === 'detail') { loadDetail(sub); document.getElementById('page-detail').classList.add('active'); }
    else { document.getElementById('page-' + page).classList.add('active'); }
    window.scrollTo(0, 0);
    updateNavActive(page);
    initReveal();
    ov.classList.remove('entering'); ov.classList.add('leaving');
    setTimeout(() => ov.classList.remove('leaving'), 500);
    if (page === 'home') { setTimeout(() => { initCanvas(); initCounters(); buildGallery('gallery-home'); }, 80); }
    if (page === 'about') { setTimeout(() => { initSkills(); buildGallery('gallery-about'); }, 250); }
    setTimeout(addCursorTargets, 100);
  }, 320);
}

function updateNavActive(page) {
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.page === page));
  document.querySelectorAll('#mobile-menu a[data-page]').forEach(a => a.classList.toggle('active', a.dataset.page === page));
  document.querySelector('nav').style.background = 'rgba(8,8,8,0.75)';
}
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.background = scrollY > 50 ? 'rgba(8,8,8,.92)' : 'rgba(8,8,8,.75)';
});

/* ===== LOAD DETAIL PAGE ===== */
function loadDetail(id) {
  const p = PROJ[id]; if (!p) return;
  document.getElementById('d-bg').style.background = p.bg;
  document.getElementById('d-bc').textContent = id.charAt(0).toUpperCase() + id.slice(1);
  document.getElementById('d-title').innerHTML = p.title;
  document.getElementById('d-meta').innerHTML = p.meta.map(m => `<div class="dmi"><label>${m.l}</label><value>${m.v}</value></div>`).join('');
  // Add Behance link if available
  const behLink = p.behanceUrl ? `<div style="margin-top:2.5rem"><a href="${p.behanceUrl}" target="_blank" rel="noopener" class="btn-outline" style="cursor:auto">View on Behance ↗</a></div>` : '';
  document.getElementById('d-body').innerHTML = p.body + behLink;
}

/* ===== SCROLL REVEAL ===== */
let revObs;
function initReveal() {
  if (revObs) revObs.disconnect();
  revObs = new IntersectionObserver(en => {
    en.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => { el.classList.remove('in'); revObs.observe(el); });
}

/* ===== COUNTERS ===== */
function initCounters() {
  const co = new IntersectionObserver(en => {
    en.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, tgt = +el.dataset.target, sp = el.querySelector('.count');
      let s = null;
      (function step(ts) {
        if (!s) s = ts;
        const p = Math.min((ts - s) / 1200, 1), ease = 1 - Math.pow(1 - p, 3);
        sp.textContent = Math.round(ease * tgt);
        if (p < 1) requestAnimationFrame(step);
        else { sp.textContent = tgt; el.classList.add('counted'); }
      })();
      co.unobserve(el);
    });
  }, { threshold: .6 });
  document.querySelectorAll('.stat').forEach(el => co.observe(el));
}

/* ===== FILTER ===== */
document.querySelectorAll('.filter-btn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const f = b.dataset.f;
    document.querySelectorAll('.wc').forEach(c => c.classList.toggle('filtered', f !== 'all' && c.dataset.cat !== f));
  });
});

/* ===== SERVICE GLOW ===== */
document.querySelectorAll('.srv').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

/* ===== PROCESS STEPS ===== */
document.querySelectorAll('.step').forEach(s => {
  s.addEventListener('mouseenter', () => {
    document.querySelectorAll('.step').forEach(x => x.classList.remove('active'));
    s.classList.add('active');
  });
});

/* ===== TESTIMONIALS ===== */
let tIdx = 0;
const tt = document.querySelector('.tt');
const tdots = document.querySelectorAll('.tdot');
function go(i) {
  tIdx = (i + 3) % 3;
  tt.style.transform = `translateX(-${tIdx * 100}%)`;
  tdots.forEach((d, j) => d.classList.toggle('active', j === tIdx));
}
function slide(d) { go(tIdx + d); }
document.getElementById('tPrev').onclick = () => slide(-1);
document.getElementById('tNext').onclick = () => slide(1);
setInterval(() => slide(1), 5500);

/* ===== FAQ ===== */
function faq(el) {
  const it = el.closest('.fi'), op = it.classList.contains('open');
  document.querySelectorAll('.fi').forEach(i => i.classList.remove('open'));
  if (!op) it.classList.add('open');
}

/* ===== SKILLS BAR ===== */
function initSkills() {
  const so = new IntersectionObserver(en => {
    en.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.sk-fill').forEach(f => { f.style.width = f.dataset.w + '%'; });
      so.unobserve(e.target);
    });
  }, { threshold: .4 });
  document.querySelectorAll('.ab-skills').forEach(el => so.observe(el));
}

/* ===== INSTAGRAM / PHOTOGRAPHY GALLERY ===== */
const PALETTE = [
  { bg: 'linear-gradient(135deg,#1a2a4a,#050d1a)', lbl: 'Street' },
  { bg: 'linear-gradient(135deg,#2a1a3a,#0a0515)', lbl: 'Urban' },
  { bg: 'linear-gradient(135deg,#0a2a1a,#030a07)', lbl: 'Light' },
  { bg: 'linear-gradient(135deg,#3a1010,#0f0303)', lbl: 'Mono' },
  { bg: 'linear-gradient(135deg,#2a2510,#0a0803)', lbl: 'Dusk' },
  { bg: 'linear-gradient(135deg,#102a3a,#030f16)', lbl: 'Rain' },
  { bg: 'linear-gradient(135deg,#1a1a3a,#050512)', lbl: 'Night' },
  { bg: 'linear-gradient(135deg,#2a1a10,#0a0603)', lbl: 'Gold' },
  { bg: 'linear-gradient(135deg,#1a3020,#040c08)', lbl: 'Mist' },
  { bg: 'linear-gradient(135deg,#3a2010,#100803)', lbl: 'Rust' },
];

function makeItem(idx) {
  const ph = PALETTE[idx % PALETTE.length];
  // Use real image URL from config if available, otherwise use gradient placeholder
  const imgUrl = INSTAGRAM_IMAGES[idx % INSTAGRAM_IMAGES.length];
  const a = document.createElement('a');
  a.className = 'g-item';
  a.href = INFO.instagram;
  a.target = '_blank'; a.rel = 'noopener';

  if (imgUrl) {
    // Real photo
    a.innerHTML = `<img src="${imgUrl}" alt="Photography by ${INFO.instaHandle}" loading="lazy"
      onerror="this.parentElement.innerHTML=this.parentElement.getAttribute('data-ph')" />
      <div class="g-ovr"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/></svg></div>`;
    a.setAttribute('data-ph', `<div class="g-ph" style="width:100%;height:100%;background:${ph.bg};display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/></svg><span style="font-size:.58rem;color:rgba(255,255,255,0.18);letter-spacing:.06em;text-transform:uppercase">${ph.lbl}</span></div><div class="g-ovr"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/></svg></div>`);
  } else {
    // Gradient placeholder
    a.innerHTML = `<div class="g-ph" style="width:100%;height:100%;background:${ph.bg};display:flex;align-items:center;justify-content:center;flex-direction:column;gap:6px">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.2)" stroke="none"/></svg>
      <span style="font-size:.58rem;color:rgba(255,255,255,0.18);letter-spacing:.06em;text-transform:uppercase">${ph.lbl}</span></div>
      <div class="g-ovr"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/></svg></div>`;
  }
  return a;
}

function buildRow(root, startIdx, dir, speed) {
  const row = document.createElement('div'); row.className = 'g-row';
  const inner = document.createElement('div'); inner.className = 'g-inner';
  inner.style.animation = `${dir} ${speed}s linear infinite`;
  for (let i = 0; i < 10; i++) inner.appendChild(makeItem(startIdx + i));
  for (let i = 0; i < 10; i++) inner.appendChild(makeItem(startIdx + i)); // duplicate for seamless
  row.appendChild(inner); root.appendChild(row);
}

function buildGallery(id) {
  const root = document.getElementById(id);
  if (!root || root.dataset.built) return;
  root.dataset.built = '1';
  buildRow(root, 0, 'gL', 38);
  buildRow(root, 10, 'gR', 44);
}

/* ===== INIT ===== */
window.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initCounters();
  initReveal();
  buildGallery('gallery-home');
  addCursorTargets();
});
