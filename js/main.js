/* =============================================
   CRECER FELIZ – main.js
   ============================================= */

/* ── Formulario de contacto Real ─────────────────── */
const formulario = document.getElementById('miFormulario');

if (formulario) {
  formulario.addEventListener('submit', function(event) {
    // 1. Evitamos que se envíe a lo loco antes de revisar
    event.preventDefault(); 

    const nombre  = document.querySelector('input[name="nombre"]').value.trim();
    const email   = document.querySelector('input[name="email"]').value.trim();
    const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();

    // 2. Validación básica
    if (!nombre || !email || !mensaje) {
      alert('Por favor completa los campos obligatorios: nombre, correo y mensaje.');
      return;
    }

    // 3. Si todo está correcto, enviamos el formulario formalmente
    // Formspree se encargará de procesarlo, mandarte el correo y redireccionar al usuario
    alert(`¡Gracias, ${nombre}! Procesando tu mensaje...`);
    formulario.submit(); 
  });
}

/* ── Scroll suave para nav activo ───────────── */
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const observerOptions = { root: null, rootMargin: '-40% 0px -55% 0px', threshold: 0 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--mint)' : '';
      });
    }
  });
}, observerOptions);

sections.forEach(s => observer.observe(s));

/* ── Animación al hacer scroll ──────────────── */
const animEls = document.querySelectorAll('.service-card, .step, .testi-card, .contact-item');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.08}s`;
      entry.target.classList.add('anim');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animEls.forEach(el => scrollObserver.observe(el));

/* ── Nav sombra al hacer scroll ─────────────── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 20px rgba(45,90,82,.12)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
