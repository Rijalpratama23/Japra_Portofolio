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

// Typewriter Effect Loop Sederhana - Hanya 1 Teks
document.addEventListener('DOMContentLoaded', function () {
  const typewriterElement = document.querySelector('.typewriter-animation');

  if (!typewriterElement) return;

  const text = 'Frontend Developer';
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseBetween = 1500;

  function typeWriter() {
    if (!isDeleting && charIndex < text.length) {
      // Mengetik maju
      typewriterElement.textContent = text.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Menghapus
      typewriterElement.textContent = text.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, deletingSpeed);
    } else {
      // Switch between typing and deleting
      isDeleting = !isDeleting;
      setTimeout(typeWriter, isDeleting ? pauseBetween : 500);
    }
  }

  // Mulai animasi
  setTimeout(typeWriter, 1000);
});

// Kelas untuk tombol filter portofolio, mengikuti skema warna:
// aktif -> biru (light) / kuning (dark), non-aktif -> abu-abu netral
const FILTER_ACTIVE_CLASSES = ['accent-bg', 'accent-ring-active'];
const FILTER_INACTIVE_CLASSES = ['bg-gray-200', 'dark:bg-neutral-600', 'text-neutral-900', 'dark:text-white'];

// function pergantian project dinamis || statis
function filterProjects(category, btnElement) {
  projects.forEach((project) => {
    const projectCategory = project.getAttribute('data-category');

    // Animasi fade out sedikit sebelum hilang (opsional, tapi bagus untuk UX)
    if (category === 'all' || projectCategory === category) {
      project.classList.remove('hidden');
      // Tambahkan animasi fade-in
      project.classList.add('fade-in-up');
    } else {
      project.classList.add('hidden');
    }
  });

  // 2. Logika Warna Tombol (Agar tombol yang aktif berwarna sesuai tema: biru di light mode, kuning di dark mode)
  const buttons = document.querySelectorAll('.filter-btn');

  // Reset semua tombol ke warna netral (inactive)
  buttons.forEach((btn) => {
    btn.classList.remove(...FILTER_ACTIVE_CLASSES);
    btn.classList.add(...FILTER_INACTIVE_CLASSES);
  });

  // Set tombol yang diklik menjadi warna aktif
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

// Deteksi section yang sedang aktif memakai IntersectionObserver.
// Ini lebih tahan banting dibanding hitung manual offsetTop, karena
// browser sendiri yang terus memantau posisi tiap section relatif
// terhadap layar -- tidak peduli section itu tinggi (seperti #home)
// atau kecil (seperti <h2 id="skill">).
//
// rootMargin '-30% 0px -60% 0px' membuat "garis deteksi" jadi pita
// tipis di sekitar 30%-40% dari atas layar. Section dianggap aktif
// begitu pita itu menyentuhnya.
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

// Highlight langsung saat nav diklik, sebelum smooth-scroll selesai
// (IntersectionObserver akan otomatis menyesuaikan lagi setelah
// scroll berhenti, jadi hasil akhirnya tetap konsisten).
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
