const hamburgerMenu = document.getElementById('hamburgerMenu');
const navbarMobile = document.getElementById('navbarMobile');
const body = document.getElementsByTagName('BODY')[0];
const projects = document.querySelectorAll('.project-item');

const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlEl = document.documentElement;

function applyTheme(isDark) {
  if (isDark) {
    htmlEl.classList.add('dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    htmlEl.classList.remove('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// Samakan ikon dengan state .dark yang sudah di-set duluan
// oleh script anti-flash di <head> index.html
applyTheme(htmlEl.classList.contains('dark'));

themeToggleBtn.addEventListener('click', () => {
  const isDark = htmlEl.classList.contains('dark');
  applyTheme(!isDark);
  localStorage.setItem('theme', !isDark ? 'dark' : 'light');
});

// ============================
// LANGUAGE TOGGLE (EN <-> ID)
// ============================
const langToggleBtn = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
let currentLang = localStorage.getItem('lang') || 'id'; // default: id kalau belum pernah pilih

function setLanguage(lang) {
  // translations diambil dari js/translations.js (harus dimuat sebelum script.js)
  if (typeof translations === 'undefined' || !translations[lang]) return;

  currentLang = lang;
  const dict = translations[lang];

  // 1) Ganti semua teks yang punya atribut data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // 2) Ganti semua placeholder yang punya atribut data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 3) Update label kecil di tombol (nampilin bahasa AKTIF)
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }

  // 4) Sinkronkan atribut lang di <html> (bagus untuk aksesibilitas & SEO)
  document.documentElement.setAttribute('lang', lang);

}

langToggleBtn.addEventListener('click', () => {
  const nextLang = currentLang === 'en' ? 'id' : 'en';
  setLanguage(nextLang);
  localStorage.setItem('lang', nextLang);
});

// Terapkan bahasa tersimpan (atau default) begitu halaman siap
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

// Menangani klik pada hamburger menu
hamburgerMenu.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = !navbarMobile.classList.contains('hidden');

  navbarMobile.classList.toggle('hidden', isOpen);
  hamburgerMenu.setAttribute('aria-expanded', String(!isOpen));
  body.classList.toggle('overflow-hidden', !isOpen);
});

// Tutup menu ketika klik di luar
document.addEventListener('click', (event) => {
  if (!navbarMobile.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    navbarMobile.classList.add('hidden');
    hamburgerMenu.setAttribute('aria-expanded', 'false');
    body.classList.remove('overflow-hidden');
  }
});

// Tutup menu ketika klik nav link (mobile)
const mobileNavLinks = navbarMobile.querySelectorAll('a[href^="#"], a[href="#"]');
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbarMobile.classList.add('hidden');
    hamburgerMenu.setAttribute('aria-expanded', 'false');
    body.classList.remove('overflow-hidden');
  });
});

// Kelas tombol filter mengikuti token warna aktif dan netral.
const FILTER_ACTIVE_CLASSES = ['bg-brand', 'text-on-brand', 'hover:bg-brand-hover', 'ring-2', 'ring-brand'];
const FILTER_INACTIVE_CLASSES = ['bg-surface-2', 'text-ink', 'hover:bg-surface'];

// function pergantian project dinamis || statis
function filterProjects(category, btnElement) {
  projects.forEach((project) => {
    const projectCategory = project.getAttribute('data-category');

    if (category === 'all' || projectCategory === category) {
      project.classList.remove('hidden');
      project.classList.add('fade-in-up');
    } else {
      project.classList.add('hidden');
    }
  });

  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach((btn) => {
    btn.classList.remove(...FILTER_ACTIVE_CLASSES);
    btn.classList.add(...FILTER_INACTIVE_CLASSES);
  });

  btnElement.classList.remove(...FILTER_INACTIVE_CLASSES);
  btnElement.classList.add(...FILTER_ACTIVE_CLASSES);
}

// update link aktif
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#home, #about, #skill, #portofolio, #contact');
const headerBar = document.getElementById('headerBar');

function updateHeaderBorder() {
  if (!headerBar) return;
  headerBar.classList.toggle('border-line', window.scrollY > 8);
  headerBar.classList.toggle('border-transparent', window.scrollY <= 8);
}

window.addEventListener('scroll', updateHeaderBorder, { passive: true });
updateHeaderBorder();

function setActiveNav(targetSectionId) {
  navLinks.forEach((link) => {
    const target = link.dataset.section;
    if (target === targetSectionId) {
      link.classList.remove('border-transparent', 'text-ink');
      link.classList.add('border-brand', 'text-ink', 'active');
    } else {
      link.classList.remove('border-brand', 'active');
      link.classList.add('border-transparent', 'text-ink');
    }
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });
  },
  {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0,
  },
);

sections.forEach((section) => sectionObserver.observe(section));

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.dataset.section;
    if (target) {
      setActiveNav(target);
    }
  });
});

// Set state awal saat halaman pertama kali dimuat.
window.addEventListener('DOMContentLoaded', () => {
  setActiveNav('home');
});
