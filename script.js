/* ==========================================================================
   Óscar Toloza Navarro - Marca Personal (script.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollSpy();
});

/* 1. Navegación Móvil (Hamburger) */
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* 2. ScrollSpy / Resaltado del Menú según la sección */
function initScrollSpy() {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

/* 3. Cambio de Pestañas en Educación */
function switchEduTab(tabName, btnElement) {
  const tabPosgrados = document.getElementById('tab-posgrados');
  const tabCursos = document.getElementById('tab-cursos');
  const buttons = document.querySelectorAll('.tabs-header .tab-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  if (tabName === 'posgrados') {
    tabPosgrados.classList.remove('hidden');
    tabCursos.classList.add('hidden');
  } else {
    tabPosgrados.classList.add('hidden');
    tabCursos.classList.remove('hidden');
  }
}

/* 4. Filtrado de Experiencia Profesional */
function filterExp(category, btnElement) {
  const items = document.querySelectorAll('.timeline-item');
  const buttons = document.querySelectorAll('.filter-bar .filter-btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

/* 5. Copiar información de contacto */
function copyContact(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    alert(message + ': ' + text);
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}
