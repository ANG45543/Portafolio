document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img')
  let index = 0

  setInterval(() => {
    images[index].classList.remove('active')
    index = (index + 1) % images.length
    images[index].classList.add('active')
  }, 3500)
})
const form = document.getElementById('contactForm')
const emailInput = document.getElementById('email')
const msg = document.getElementById('formMsg')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = emailInput.value.trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    msg.textContent = '❌ Ingresa un correo válido'
    msg.style.color = '#ff5c5c'
    return
  }

  msg.textContent = '✅ Correo válido. Mensaje listo para enviar'
  msg.style.color = '#00d5ff'

  form.reset()
})

// ================= MENU TOGGLE (MÓVIL) =================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ================= NAVEGACIÓN ACTIVA AL SCROLL =================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
    } else {
      document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// ================= EFECTO SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ================= NAVBAR BACKGROUND AL SCROLL =================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ================= CAROUSEL DE IMÁGENES (EXPERIENCIA) =================
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;

  if (images.length > 1) {
    setInterval(() => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }, 3000);
  }
});