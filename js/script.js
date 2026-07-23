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

  // 5) Restart efek typewriter pakai teks sesuai bahasa terpilih
  restartTypewriter(lang);
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
  const isOpen = navbarMobile.classList.contains('open');

  if (isOpen) {
    navbarMobile.classList.remove('open');
    body.classList.remove('overflow-hidden');
  } else {
    navbarMobile.classList.add('open');
    body.classList.add('overflow-hidden');
  }
});

// Tutup menu ketika klik di luar
document.addEventListener('click', (event) => {
  if (!navbarMobile.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    navbarMobile.classList.remove('open');
    body.classList.remove('overflow-hidden');
  }
});

// Tutup menu ketika klik nav link (mobile)
const mobileNavLinks = navbarMobile.querySelectorAll('a[href^="#"], a[href="#"]');
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbarMobile.classList.remove('open');
    body.classList.remove('overflow-hidden');
  });
});

// ============================
// Typewriter Effect (kini mendukung ganti bahasa)
// ============================
let typewriterTimeoutId = null;
let typewriterRunId = 0; // dipakai untuk "membatalkan" loop lama saat bahasa berganti

function restartTypewriter(lang) {
  const typewriterElement = document.querySelector('.typewriter-animation');
  if (!typewriterElement) return;

  // Hentikan loop yang sedang berjalan
  typewriterRunId++;
  const myRunId = typewriterRunId;
  if (typewriterTimeoutId) clearTimeout(typewriterTimeoutId);

  const text = lang === 'id' ? 'Pengembang Frontend' : 'Frontend Developer';
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseBetween = 1500;

  typewriterElement.textContent = '';

  function typeWriter() {
    // Kalau ada run baru yang mulai (bahasa ganti lagi), hentikan yang lama
    if (myRunId !== typewriterRunId) return;

    if (!isDeleting && charIndex < text.length) {
      typewriterElement.textContent = text.substring(0, charIndex + 1);
      charIndex++;
      typewriterTimeoutId = setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      typewriterElement.textContent = text.substring(0, charIndex - 1);
      charIndex--;
      typewriterTimeoutId = setTimeout(typeWriter, deletingSpeed);
    } else {
      isDeleting = !isDeleting;
      typewriterTimeoutId = setTimeout(typeWriter, isDeleting ? pauseBetween : 500);
    }
  }

  typewriterTimeoutId = setTimeout(typeWriter, 300);
}

// Kelas untuk tombol filter portofolio, mengikuti skema warna:
// aktif -> biru (light) / kuning (dark), non-aktif -> abu-abu netral
const FILTER_ACTIVE_CLASSES = ['accent-bg', 'accent-ring-active'];
const FILTER_INACTIVE_CLASSES = ['bg-gray-200', 'dark:bg-neutral-600', 'text-neutral-900', 'dark:text-white'];

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

function setActiveNav(targetSectionId) {
  navLinks.forEach((link) => {
    const target = link.dataset.section;
    if (target === targetSectionId) {
      link.classList.add('text-yellow-300', 'font-semibold', 'active');
      link.classList.remove('text-neutral-900', 'dark:text-white');
    } else {
      link.classList.remove('text-yellow-300', 'font-semibold', 'active');
      link.classList.add('text-neutral-900', 'dark:text-white');
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
