// Nav scroll shadow
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 20);
});

// Hamburger menu
const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll(
  '.section__label, .section__title, .about__text, .value-card, ' +
  '.service-card, .gallery__item, .access__info, .access__map, .contact__form'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '送信中…';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('form-success').hidden = false;
    e.target.reset();
    btn.textContent = '送信する';
    btn.disabled = false;
  }, 1200);
}
