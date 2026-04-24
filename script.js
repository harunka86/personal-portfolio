const projects = [
  {
    title: "McWorld — McDonald's Worldwide Menu Tracker",
    description: "A one-stop tracker for McDonald's menus across 9 countries (Japan, Germany, Poland, USA, UK, South Korea, India, Canada, France). Browse exclusive items, new launches, and limited-time offers with real official product photos.",
    category: "Utility",
    tech: "React",
    date: "April 2026",
    live: "https://mcworldmenu.xyz/",
  },
  {
    title: "Yoshi Yoshi",
    description: "A mobile app where you pet a virtual cat and send \"yoshi yoshi\" notifications to friends. Features friend invites, custom cat names, daily streak tracking, and a leaderboard.",
    category: "Entertainment",
    tech: "React",
    date: "March 2026",
    live: "https://yoshicat-cggjabxg.manus.space/",
  },
  {
    title: "CAT Tools (Combined)",
    description: "A single-file HTML app and Chrome extension combining the CAT Carets Extractor and CAT Caret Italiciser in one tabbed interface. Switch between the two tools without leaving the page.",
    category: "Productivity",
    tech: "HTML / JS",
    date: "March 2026",
  },
  {
    title: "CAT Caret Italiciser",
    description: "A browser-based tool that takes a CAT ASCII transcript and a Word (.docx) file, extracts all caret-marked phrases, and automatically italicises every occurrence in the document. Handles multi-word phrases and legal case references.",
    category: "Productivity",
    tech: "HTML / JS",
    date: "March 2026",
  },
  {
    title: "Michal & Haruna — Wedding Invitation",
    description: "A bilingual (English/Japanese) wedding invitation website. Features a countdown timer, event schedule, venue maps, and an RSVP form for a ceremony at Hokkaido Jingu Shrine.",
    category: "Wedding",
    tech: "React",
    date: "March 2026",
    live: "https://michalharuna-gzeoe3cm.manus.space/",
  },
  {
    title: "Forever Yours — Wedding Invitation Generator",
    description: "A full-featured wedding website generator offering 6 beautiful themes (Traditional Japanese, Botanical, Modern Elegant, Scandinavian, Rustic, Classic). Includes RSVP management, event schedules, photo galleries, interactive maps, and a secure admin panel.",
    category: "Wedding",
    tech: "React",
    date: "March 2026",
    live: "https://foreveryours.manus.space/",
  },
  {
    title: "Pat the Cat",
    description: "A Chrome extension that places a draggable pixel-art cat on any webpage. Pat the cat by holding left-click — it reacts with animations and floating hearts. Pat count persists across sessions.",
    category: "Entertainment",
    tech: "JavaScript",
    date: "February 2026",
  },
  {
    title: "My Diary",
    description: "A private, authenticated personal diary app. Users sign in to access a secure space for their personal thoughts and journal entries.",
    category: "Personal",
    tech: "React",
    date: "February 2026",
    live: "https://mydiary-nkwzgbdb.manus.space/diary",
  },
  {
    title: "LibFinder — 近くの図書館を探す",
    description: "A Japanese library search app that lets users find nearby libraries by entering their prefecture and city. Powered by the Calil Library API.",
    category: "Utility",
    tech: "React",
    date: "February 2026",
    live: "https://libfinder-dswb9dzd.manus.space/",
  },
  {
    title: "RandoPoke — Random Pokémon",
    description: "A fun web app that displays a random Pokémon with each button press. Powered by PokéAPI, with a bilingual interface in English and Japanese.",
    category: "Entertainment",
    tech: "React",
    date: "February 2026",
    live: "https://randopoke-jlqrkfwc.manus.space/",
  },
  {
    title: "Stopwatch & Timer",
    description: "A clean and minimal precision timing tool with both a stopwatch and countdown timer. Features keyboard shortcuts (Space bar) and a smooth circular UI.",
    category: "Productivity",
    tech: "React",
    date: "February 2026",
    live: "https://simplestpwtctimer.manus.space/",
  },
  {
    title: "CAT Carets Extractor",
    description: "A browser-based tool that parses CAT transcript ASCII files and extracts all caret-marked words and phrases. Results are displayed as cards with page number, line number, and timecode, plus a live progress counter.",
    category: "Productivity",
    tech: "HTML / JS",
    date: "January 2026",
  },
];

const automations = [
  {
    title: "Engoo Schedule Auto-Opener",
    description: "Monitors a designated Google Calendar for events named 'Open for Engoo' and automatically translates those free periods into open teaching slots on the Engoo platform — no manual clicking required.",
    tech: "Node.js",
    date: "April 2026",
    notionUrl: "https://www.notion.so/harunakono-portfolio-2407neko/Engoo-Schedule-Auto-Opener-348fb465dffc81f98cafd14832c33189?pvs=25",
  },
  {
    title: "Engoo Schedule to Google Calendar Sync",
    description: "Automatically parses the Engoo weekly schedule page, identifies reserved lesson slots, and creates corresponding Google Calendar events — keeping the tutor's personal calendar always in sync.",
    tech: "Node.js",
    date: "April 2026",
    notionUrl: "https://www.notion.so/harunakono-portfolio-2407neko/Engoo-Schedule-to-Google-Calendar-Sync-348fb465dffc815da805f8fde8673f90?pvs=25",
  },
];

function cardHTML(p, isAutomation = false) {
  const links = [];
  if (p.live) links.push(`<a href="${p.live}" target="_blank" rel="noopener" class="card-link">Live ↗</a>`);
  if (p.notionUrl) links.push(`<a href="${p.notionUrl}" target="_blank" rel="noopener" class="card-link">Details ↗</a>`);

  return `
    <div class="card" data-category="${p.category || ''}">
      <span class="card-title">${p.title}</span>
      <p class="card-desc">${p.description}</p>
      <div class="card-tags">
        <span class="tag ${isAutomation ? 'tag-auto' : 'tag-cat'}">${isAutomation ? 'Automation' : p.category}</span>
        <span class="tag tag-tech">${p.tech}</span>
      </div>
      <div class="card-footer">
        <span class="card-date">${p.date}</span>
        <div class="card-links">${links.join('')}</div>
      </div>
    </div>
  `;
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  const list = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => cardHTML(p)).join('');
}

function renderAutomations() {
  document.getElementById('automations-grid').innerHTML = automations.map(a => cardHTML(a, true)).join('');
}

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

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const name    = form.querySelector('#contact-name');
  const email   = form.querySelector('#contact-email');
  const message = form.querySelector('#contact-message');

  [name, email, message].forEach(el => el.classList.remove('invalid'));
  let valid = true;
  if (!name.value.trim())    { name.classList.add('invalid');    valid = false; }
  if (!email.value.trim() || !email.value.includes('@')) { email.classList.add('invalid');   valid = false; }
  if (!message.value.trim()) { message.classList.add('invalid'); valid = false; }
  if (!valid) return;

  const subject = encodeURIComponent(`Portfolio contact from ${name.value.trim()}`);
  const body    = encodeURIComponent(`Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\n${message.value.trim()}`);
  window.location.href = `mailto:harunakono@yahoo.com?subject=${subject}&body=${body}`;
});

renderProjects();
renderAutomations();
