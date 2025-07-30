document.addEventListener('DOMContentLoaded', function() {
  
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (currentPage === linkHref) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});