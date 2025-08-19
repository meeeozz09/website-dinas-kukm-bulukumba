document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', linkPath === currentPath);
    
    // Debugging
    console.log(`Link: ${linkPath}, Current: ${currentPath}, Active: ${linkPath === currentPath}`);
  });
});