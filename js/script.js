const hamburgerMenu = document.getElementById('hamburgerMenu');
const navbarMobile = document.getElementById('navbarMobile');
const body = document.getElementsByTagName('BODY')[0];
const projects = document.querySelectorAll('.project-item');

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

  // 2. Logika Warna Tombol (Agar tombol yang aktif berwarna Kuning)
  const buttons = document.querySelectorAll('.filter-btn');

  // Reset semua tombol ke warna abu-abu (neutral)
  buttons.forEach((btn) => {
    btn.classList.remove('bg-yellow-300', 'text-black', 'ring-2', 'ring-yellow-300');
    btn.classList.add('bg-neutral-600', 'text-white');
  });

  // Set tombol yang diklik menjadi kuning
  btnElement.classList.remove('bg-neutral-600', 'text-white');
  btnElement.classList.add('bg-yellow-300', 'text-black', 'ring-2', 'ring-yellow-300');
}

// update link aktif
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id], div[id]');

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

function updateActiveNav() {
  const scrollPos = window.scrollY + window.innerHeight * 0.45;
  let currentSectionId = 'home';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });

  setActiveNav(currentSectionId);
}

function observeSections() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id || 'home');
        }
      });
    },
    {
      root: null,
      threshold: 0.45,
      rootMargin: '-20% 0px -40% 0px',
    },
  );

  sections.forEach((section) => observer.observe(section));
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.dataset.section;
    if (target) {
      setActiveNav(target);
    }
  });
});

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('DOMContentLoaded', () => {
  updateActiveNav();
  observeSections();
});
window.addEventListener('hashchange', updateActiveNav);
