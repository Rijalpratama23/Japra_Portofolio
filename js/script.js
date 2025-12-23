const hamburgerMenu = document.getElementById('hamburgerMenu');
const navbarMobile = document.getElementById('navbarMobile');
const body = document.getElementsByTagName('BODY')[0];
const projects = document.querySelectorAll('.project-item');

// Menangani klik pada hamburger menu
hamburgerMenu.addEventListener('click', (event) => {
  event.stopPropagation();

  if (navbarMobile.classList.contains('-translate-x-full')) {
    // Buka menu - geser dari kiri ke kanan
    navbarMobile.classList.remove('-translate-x-full');
    navbarMobile.classList.add('translate-x-0');
  } else {
    // Tutup menu - geser dari kanan ke kiri
    navbarMobile.classList.remove('translate-x-0');
    navbarMobile.classList.add('-translate-x-full');
  }

  body.classList.toggle('overflow-hidden');
});

// Tutup menu ketika klik di luar
body.addEventListener('click', (event) => {
  if (!navbarMobile.contains(event.target) && event.target !== hamburgerMenu) {
    if (!navbarMobile.classList.contains('-translate-x-full')) {
      navbarMobile.classList.remove('translate-x-0');
      navbarMobile.classList.add('-translate-x-full');
      body.classList.remove('overflow-hidden');
    }
  }
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
