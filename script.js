// Smooth scrolling on anchor links
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = scrollLink.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });