    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });

    document.querySelectorAll('#main-nav a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });

      document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  });