// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger
const ham = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
ham.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// FAQ
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// Hero bg load
document.querySelectorAll('.hero-bg').forEach(el => {
  const img = new Image();
  img.src = window.getComputedStyle(el).backgroundImage.replace(/url\(["']?|["']?\)/g,'');
  img.onload = () => el.classList.add('loaded');
});

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#navLinks a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// Language switcher stub
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
