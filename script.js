document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.classList.add('scroll-offset');
          window.location.hash = this.getAttribute('href');
          target.classList.remove('scroll-offset');
        }
      });
    }
  });