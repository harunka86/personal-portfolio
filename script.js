const projects = [
  {
    title: "McWorld — McDonald's Worldwide Menu Tracker",
    description: "A one-stop tracker for McDonald's menus across 9 countries (Japan, Germany, Poland, USA, UK, South Korea, India, Canada, France). Browse exclusive items, new launches, and limited-time offers with real official product photos.",
    longDescription: "McWorld is a one-stop tracker for McDonald's menus across 9 countries (Japan, Germany, Poland, USA, UK, South Korea, India, Canada, France). Browse exclusive items, new launches, and limited-time offers — all with real official product photos so you never have to Google each country separately.\n\nBuilt around a filterable country grid, tag-based discovery (new, exclusive, limited), and a detail sheet for each menu item with pricing and availability windows.",
    thumbnails: ["Country picker grid", "Menu item detail", "Limited-time feed"],
    images: [
      "McWorld/country picker grid.png",
      "McWorld/menu item detail.png",
      "McWorld/limited-time feed.png",
    ],
    category: "Utility",
    tech: "React",
    date: "April 2026",
    live: "https://mcworldmenu.xyz/",
  },
  {
    title: "Yoshi Yoshi",
    description: "A mobile app where you pet a virtual cat and send \"yoshi yoshi\" notifications to friends. Features friend invites, custom cat names, daily streak tracking, and a leaderboard.",
    longDescription: "A mobile-first app where you pet a virtual cat and send \"yoshi yoshi\" notifications to friends. Pet your own cat, name it, and send encouraging taps to your friends' phones — tracked with daily streaks and a friendly leaderboard.\n\nFeatures include friend invites by code, custom cat names and colors, daily streak tracking, push notifications, and a global leaderboard.",
    thumbnails: ["Home — pet cat", "Friends list", "Leaderboard", "Streak summary"],
    category: "Entertainment",
    tech: "React",
    date: "March 2026",
    live: "https://yoshicat-cggjabxg.manus.space/",
  },
  {
    title: "CAT Tools (Combined)",
    description: "A single-file HTML app and Chrome extension combining the CAT Carets Extractor and CAT Caret Italiciser in one tabbed interface. Switch between the two tools without leaving the page.",
    longDescription: "A single-file HTML app and Chrome extension that combines the CAT Carets Extractor and CAT Caret Italiciser in one tabbed interface. Switch between the two tools without leaving the page, or pin it as a Chrome extension for quick toolbar access.\n\nDesigned for court reporters and legal transcriptionists who need to process CAT ASCII files frequently.",
    thumbnails: ["Tabbed tool UI", "Chrome toolbar access"],
    category: "Productivity",
    tech: "HTML / JS",
    date: "March 2026",
  },
  {
    title: "CAT Caret Italiciser",
    description: "A browser-based tool that takes a CAT ASCII transcript and a Word (.docx) file, extracts all caret-marked phrases, and automatically italicises every occurrence in the document. Handles multi-word phrases and legal case references.",
    longDescription: "A browser-based tool that takes a CAT ASCII transcript and a Word (.docx) file, extracts all caret-marked phrases, and automatically italicises every occurrence of each phrase in the Word document.\n\nHandles multi-word phrases, legal case references (e.g. Apple v. Google), and outputs a new .docx file — all processed locally in the browser, no server upload required.",
    thumbnails: ["Upload transcript", "Extracted phrases", "Output .docx"],
    category: "Productivity",
    tech: "HTML / JS",
    date: "March 2026",
  },
  {
    title: "Michal & Haruna — Wedding Invitation",
    description: "A bilingual (English/Japanese) wedding invitation website. Features a countdown timer, event schedule, venue maps, and an RSVP form for a ceremony at Hokkaido Jingu Shrine.",
    longDescription: "A bilingual (English / Japanese) wedding invitation website for Michal & Haruna. Guests are greeted with a language switcher, a ceremony countdown, the event schedule, venue maps, and an RSVP form tailored for a ceremony at Hokkaido Jingu Shrine.\n\nDesigned mobile-first so guests can RSVP from anywhere in the world.",
    thumbnails: ["Cover — countdown", "Schedule", "Venue map", "RSVP form"],
    category: "Wedding",
    tech: "React",
    date: "March 2026",
    live: "https://michalharuna-gzeoe3cm.manus.space/",
  },
  {
    title: "Forever Yours — Wedding Invitation Generator",
    description: "A full-featured wedding website generator offering 6 beautiful themes (Traditional Japanese, Botanical, Modern Elegant, Scandinavian, Rustic, Classic). Includes RSVP management, event schedules, photo galleries, interactive maps, and a secure admin panel.",
    longDescription: "A full-featured wedding website generator offering 6 beautiful themes: Traditional Japanese, Botanical, Modern Elegant, Scandinavian, Rustic, and Classic.\n\nCouples get RSVP management, event schedules, photo galleries, interactive maps, and a secure admin panel to review responses. Guests get a gorgeous, mobile-friendly invite they can respond to in seconds.",
    thumbnails: ["Theme picker", "Theme — Japanese", "Admin — RSVPs", "Photo gallery"],
    category: "Wedding",
    tech: "React",
    date: "March 2026",
    live: "https://foreveryours.manus.space/",
  },
  {
    title: "Pat the Cat",
    description: "A Chrome extension that places a draggable pixel-art cat on any webpage. Pat the cat by holding left-click — it reacts with animations and floating hearts. Pat count persists across sessions.",
    longDescription: "A Chrome extension that places a draggable pixel-art cat on any webpage. Pat the cat by holding left-click and moving the cursor horizontally — it reacts with animations, floating hearts, and tracks your total pat count.\n\nDrag the cat to reposition it, and your pat count persists across sessions. A little joy injected into any tab.",
    thumbnails: ["Cat on any page", "Floating hearts"],
    category: "Entertainment",
    tech: "JavaScript",
    date: "February 2026",
  },
  {
    title: "My Diary",
    description: "A private, authenticated personal diary app. Users sign in to access a secure space for their personal thoughts and journal entries.",
    longDescription: "A private, authenticated personal diary app. Users sign in to access a secure space for their personal thoughts and journal entries.\n\nEntries are organized by date with a calendar view, support for rich text, and a gentle, quiet interface that gets out of the writer's way.",
    thumbnails: ["Sign in", "Entry editor", "Calendar view", "Entry detail"],
    category: "Personal",
    tech: "React",
    date: "February 2026",
    live: "https://mydiary-nkwzgbdb.manus.space/diary",
  },
  {
    title: "LibFinder — 近くの図書館を探す",
    description: "A Japanese library search app that lets users find nearby libraries by entering their prefecture and city. Powered by the Calil Library API.",
    longDescription: "A Japanese library search app that lets users find nearby libraries by entering their prefecture (都道府県) and city (市町村). Results show each library's address, hours, and system affiliation.\n\nPowered by the Calil Library API.",
    thumbnails: ["Prefecture picker", "Results list", "Library detail"],
    category: "Utility",
    tech: "React",
    date: "February 2026",
    live: "https://libfinder-dswb9dzd.manus.space/",
  },
  {
    title: "RandoPoke — Random Pokémon",
    description: "A fun web app that displays a random Pokémon with each button press. Powered by PokéAPI, with a bilingual interface in English and Japanese.",
    longDescription: "A fun web app that displays a random Pokémon with each button press. Tap the button, get a new Pokémon — complete with artwork, stats, and type information.\n\nBilingual interface (English / Japanese), powered by PokéAPI.",
    thumbnails: ["Random draw", "Pokémon stats", "Language toggle"],
    category: "Entertainment",
    tech: "React",
    date: "February 2026",
    live: "https://randopoke-jlqrkfwc.manus.space/",
  },
  {
    title: "Stopwatch & Timer",
    description: "A clean and minimal precision timing tool with both a stopwatch and countdown timer. Features keyboard shortcuts (Space bar) and a smooth circular UI.",
    longDescription: "A clean and minimal precision timing tool with both a stopwatch and countdown timer modes. Space bar toggles start/stop, and the circular progress UI gives you an at-a-glance read on remaining time.\n\nBuilt to load fast and stay out of the way.",
    thumbnails: ["Stopwatch mode", "Timer mode", "Split laps"],
    category: "Productivity",
    tech: "React",
    date: "February 2026",
    live: "https://simplestpwtctimer.manus.space/",
  },
  {
    title: "CAT Carets Extractor",
    description: "A browser-based tool that parses CAT transcript ASCII files and extracts all caret-marked words and phrases. Results are displayed as cards with page number, line number, and timecode, plus a live progress counter.",
    longDescription: "A browser-based tool that parses CAT transcript ASCII files and extracts all caret-marked words and phrases. Each result is displayed as a card with page number, line number, and timecode, plus a live progress counter as the file is parsed.\n\nRuns entirely in the browser — no upload, no server, no waiting.",
    thumbnails: ["Upload ASCII", "Extracted cards", "Progress counter"],
    category: "Productivity",
    tech: "HTML / JS",
    date: "January 2026",
  },
];

const automations = [
  {
    title: "Engoo Schedule Auto-Opener",
    description: "Monitors a designated Google Calendar for events named 'Open for Engoo' and automatically translates those free periods into open teaching slots on the Engoo platform — no manual clicking required.",
    longDescription: "This automation simplifies the process of managing tutor availability on Engoo. By monitoring a designated Google Calendar for specific events named 'Open for Engoo', the system automatically translates those free periods into open teaching slots on the Engoo platform.\n\nNo more manually clicking through the Engoo scheduler every week — if it's on your calendar, it's on Engoo.",
    thumbnails: ["Calendar trigger", "Engoo schedule", "Run log"],
    category: "Automation",
    tech: "Node.js",
    date: "April 2026",
    notionUrl: "https://www.notion.so/harunakono-portfolio-2407neko/Engoo-Schedule-Auto-Opener-348fb465dffc81f98cafd14832c33189?pvs=25",
  },
  {
    title: "Engoo Schedule to Google Calendar Sync",
    description: "Automatically parses the Engoo weekly schedule page, identifies reserved lesson slots, and creates corresponding Google Calendar events — keeping the tutor's personal calendar always in sync.",
    longDescription: "This automation seamlessly connects the Engoo tutor platform with Google Calendar, ensuring that all reserved teaching slots are accurately reflected in the tutor's personal schedule.\n\nThe system automatically parses the Engoo weekly schedule page, identifies reserved slots, and creates precise calendar events — no manual transcription needed.",
    thumbnails: ["Engoo schedule parse", "Calendar events", "Sync log"],
    category: "Automation",
    tech: "Node.js",
    date: "April 2026",
    notionUrl: "https://www.notion.so/harunakono-portfolio-2407neko/Engoo-Schedule-to-Google-Calendar-Sync-348fb465dffc815da805f8fde8673f90?pvs=25",
  },
];

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function cardHTML(p, isAutomation = false, idx = 0) {
  const links = [];
  if (p.live) links.push(`<a href="${p.live}" target="_blank" rel="noopener" class="card-link">Live ↗</a>`);
  if (p.notionUrl) links.push(`<a href="${p.notionUrl}" target="_blank" rel="noopener" class="card-link">Details ↗</a>`);

  const kind = isAutomation ? 'automation' : 'project';
  return `
    <div class="card" role="button" tabindex="0" data-kind="${kind}" data-index="${idx}" data-category="${p.category || ''}" aria-label="Open ${escapeHtml(p.title)} details">
      <span class="card-title">${escapeHtml(p.title)}</span>
      <p class="card-desc">${escapeHtml(p.description)}</p>
      <div class="card-tags">
        <span class="tag ${isAutomation ? 'tag-auto' : 'tag-cat'}">${isAutomation ? 'Automation' : escapeHtml(p.category)}</span>
        <span class="tag tag-tech">${escapeHtml(p.tech)}</span>
      </div>
      <div class="card-footer">
        <span class="card-date">${escapeHtml(p.date)}</span>
        <div class="card-links">${links.join('')}</div>
      </div>
    </div>
  `;
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  const list = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => cardHTML(p, false, projects.indexOf(p))).join('');
}

function renderAutomations() {
  document.getElementById('automations-grid').innerHTML =
    automations.map((a, i) => cardHTML(a, true, i)).join('');
}

/* ── Modal ─────────────────────────────────────────── */
const modal = document.getElementById('project-modal');
const modalBody = modal.querySelector('.modal-body');
let lastFocus = null;

const categoryHue = {
  Productivity: 'oklch(0.96 0.02 250)',
  Entertainment: 'oklch(0.96 0.02 20)',
  Utility:       'oklch(0.96 0.02 140)',
  Wedding:       'oklch(0.96 0.02 340)',
  Personal:      'oklch(0.96 0.02 80)',
  Automation:    'oklch(0.96 0.02 160)',
};

function placeholderBlock(label, klass = '') {
  return `<div class="placeholder-img ${klass}"><span>${escapeHtml(label)}</span></div>`;
}

function imageBlock(src, label, klass = '') {
  if (src) return `<img src="${escapeHtml(src)}" alt="${escapeHtml(label)}" class="modal-img ${klass}">`;
  return placeholderBlock(label, klass);
}

function openModal(item, isAutomation) {
  if (!tweakState.openOnCardClick) return;
  const tint = categoryHue[item.category] || 'var(--accent-bg)';
  const heroLabel = (item.thumbnails && item.thumbnails[0]) || 'Hero screenshot';
  const heroSrc   = item.images?.[0] || null;
  const thumbLabels = (item.thumbnails && item.thumbnails.slice(1).length)
    ? item.thumbnails.slice(1)
    : ['Secondary screen', 'Detail shot', 'Additional view'];
  const thumbs = thumbLabels.map((label, i) => ({
    label,
    src: item.images?.[i + 1] || null,
  }));

  const actions = [];
  if (item.live) actions.push(`<a href="${item.live}" target="_blank" rel="noopener" class="btn-primary">Visit live ↗</a>`);
  if (item.notionUrl) actions.push(`<a href="${item.notionUrl}" target="_blank" rel="noopener" class="btn-secondary">Read writeup ↗</a>`);
  if (!actions.length) actions.push(`<span class="btn-secondary" style="cursor:default;opacity:0.7;">No public link</span>`);

  const kindTag = isAutomation
    ? `<span class="tag tag-auto">Automation</span>`
    : `<span class="tag tag-cat">${escapeHtml(item.category)}</span>`;

  const long = escapeHtml(item.longDescription || item.description)
    .split(/\n\n+/).map(par => `<p>${par}</p>`).join('');

  modalBody.innerHTML = `
    <div class="modal-hero" style="--ph-tint:${tint}">
      ${imageBlock(heroSrc, heroLabel, 'is-hero')}
    </div>
    <div class="modal-content">
      <h3 id="modal-title" class="modal-title">${escapeHtml(item.title)}</h3>
      <div class="modal-meta">
        ${kindTag}
        <span class="tag tag-tech">${escapeHtml(item.tech)}</span>
        <span class="card-date">${escapeHtml(item.date)}</span>
      </div>
      <div class="modal-desc">${long}</div>
      <span class="modal-section-label">Screens</span>
      <div class="modal-gallery" style="--ph-tint:${tint}">
        ${thumbs.map(t => imageBlock(t.src, t.label)).join('')}
      </div>
      <div class="modal-actions">
        ${actions.join('')}
      </div>
    </div>
  `;

  modalBody.scrollTop = 0;
  lastFocus = document.activeElement;
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => modal.querySelector('.modal-close')?.focus());
}

function closeModal() {
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modalBody.innerHTML = '';
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
}

document.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) { closeModal(); return; }
  if (e.target.closest('.card-link')) return;
  const card = e.target.closest('.card');
  if (!card) return;
  const kind = card.dataset.kind;
  const idx  = Number(card.dataset.index);
  const item = kind === 'automation' ? automations[idx] : projects[idx];
  if (item) openModal(item, kind === 'automation');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) { closeModal(); return; }
  if ((e.key === 'Enter' || e.key === ' ') && document.activeElement?.classList?.contains('card')) {
    e.preventDefault();
    document.activeElement.click();
  }
});

/* ── Filter & Nav ──────────────────────────────────── */
document.getElementById('filter-bar').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.filter);
});

document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

/* ── Contact form ──────────────────────────────────── */
document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  const form    = e.target;
  const name    = form.querySelector('#contact-name');
  const email   = form.querySelector('#contact-email');
  const message = form.querySelector('#contact-message');
  const btn     = document.getElementById('submit-btn');

  [name, email, message].forEach(el => el.classList.remove('invalid'));
  let valid = true;
  if (!name.value.trim())    { name.classList.add('invalid');    valid = false; }
  if (!email.value.trim() || !email.value.includes('@')) { email.classList.add('invalid'); valid = false; }
  if (!message.value.trim()) { message.classList.add('invalid'); valid = false; }
  if (!valid) return;

  btn.disabled = true;
  btn.textContent = 'Sending...';

  try {
    const res = await fetch('https://formspree.io/f/xeevnzdp', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form),
    });

    if (res.ok) {
      form.hidden = true;
      document.getElementById('contact-success').hidden = false;
    } else {
      btn.disabled = false;
      btn.textContent = 'Send Message';
      alert('Something went wrong. Please try again or email harunakono@yahoo.com directly.');
    }
  } catch {
    btn.disabled = false;
    btn.textContent = 'Send Message';
    alert('Something went wrong. Please try again or email harunakono@yahoo.com directly.');
  }
});

/* ── Tweaks ────────────────────────────────────────── */
const TWEAK_DEFAULTS = {
  accent: 'blue',
  density: 'regular',
  cardStyle: 'default',
  radius: 'rounded',
  showThumbnails: true,
  openOnCardClick: true,
  showLiveLinks: true,
};

const tweakState = { ...TWEAK_DEFAULTS };

const ACCENT_SWATCHES = [
  { id: 'blue',   color: '#2563eb' },
  { id: 'rose',   color: 'oklch(0.62 0.16 15)' },
  { id: 'forest', color: 'oklch(0.52 0.12 150)' },
  { id: 'plum',   color: 'oklch(0.52 0.14 320)' },
  { id: 'mono',   color: '#111110' },
];

function applyTweaks() {
  const b = document.body;
  b.dataset.accent    = tweakState.accent;
  b.dataset.density   = tweakState.density;
  b.dataset.cardStyle = tweakState.cardStyle;
  b.dataset.radius    = tweakState.radius;
  b.dataset.thumbs    = tweakState.showThumbnails ? 'on' : 'off';
  document.querySelectorAll('.card-link').forEach(a => {
    if (a.textContent.trim().startsWith('Live')) {
      a.style.display = tweakState.showLiveLinks ? '' : 'none';
    }
  });
}

function setTweak(key, value) {
  tweakState[key] = value;
  applyTweaks();
  renderTweaksBody();
  try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*'); } catch (e) {}
}

function renderTweaksBody() {
  const body = document.querySelector('#tweaks-panel .tweaks-body');
  if (!body) return;
  body.innerHTML = `
    <div class="tw-section">Appearance</div>
    <div class="tw-row">
      <label class="tw-label">Accent color</label>
      <div class="tw-swatches" data-tw="accent">
        ${ACCENT_SWATCHES.map(s => `
          <button class="tw-sw ${tweakState.accent === s.id ? 'on' : ''}"
                  data-val="${s.id}" style="background:${s.color}"
                  aria-label="Accent ${s.id}"></button>
        `).join('')}
      </div>
    </div>
    <div class="tw-row">
      <label class="tw-label">Corner radius</label>
      <div class="tw-seg" data-tw="radius">
        ${['sharp','rounded','pill'].map(v => `
          <button class="${tweakState.radius === v ? 'on' : ''}" data-val="${v}">${v}</button>
        `).join('')}
      </div>
    </div>
    <div class="tw-row">
      <label class="tw-label">Card style</label>
      <div class="tw-seg" data-tw="cardStyle">
        ${['default','flat','soft'].map(v => `
          <button class="${tweakState.cardStyle === v ? 'on' : ''}" data-val="${v}">${v}</button>
        `).join('')}
      </div>
    </div>
    <div class="tw-section">Density</div>
    <div class="tw-row">
      <div class="tw-seg" data-tw="density">
        ${['compact','regular','comfy'].map(v => `
          <button class="${tweakState.density === v ? 'on' : ''}" data-val="${v}">${v}</button>
        `).join('')}
      </div>
    </div>
    <div class="tw-section">Modal</div>
    <label class="tw-toggle">
      <span>Show thumbnails</span>
      <input type="checkbox" data-tw="showThumbnails" ${tweakState.showThumbnails ? 'checked' : ''}>
      <span class="tw-switch"></span>
    </label>
    <label class="tw-toggle">
      <span>Open modal on card click</span>
      <input type="checkbox" data-tw="openOnCardClick" ${tweakState.openOnCardClick ? 'checked' : ''}>
      <span class="tw-switch"></span>
    </label>
    <div class="tw-section">Cards</div>
    <label class="tw-toggle">
      <span>Show "Live ↗" links</span>
      <input type="checkbox" data-tw="showLiveLinks" ${tweakState.showLiveLinks ? 'checked' : ''}>
      <span class="tw-switch"></span>
    </label>
  `;

  body.querySelectorAll('.tw-sw, .tw-seg button').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('[data-tw]');
      setTweak(parent.dataset.tw, btn.dataset.val);
    });
  });
  body.querySelectorAll('input[type="checkbox"][data-tw]').forEach(cb => {
    cb.addEventListener('change', () => setTweak(cb.dataset.tw, cb.checked));
  });
}

const tweaksPanel = document.getElementById('tweaks-panel');
function showTweaks() { tweaksPanel.hidden = false; renderTweaksBody(); }
function hideTweaks() {
  tweaksPanel.hidden = true;
  try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
}

window.addEventListener('message', e => {
  const t = e.data?.type;
  if (t === '__activate_edit_mode')   showTweaks();
  if (t === '__deactivate_edit_mode') hideTweaks();
});

document.getElementById('tweaks-close').addEventListener('click', hideTweaks);
try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}

applyTweaks();
renderProjects();
renderAutomations();
