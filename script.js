//Smooth Scrolling
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

  // Change Skill Color
  document.addEventListener("DOMContentLoaded", function() {
    const skillProgressBars = document.querySelectorAll(".skill-progress-bar");
  
    skillProgressBars.forEach(function(progressBar) {
      const width = parseInt(progressBar.style.width, 10);
  
      if (width >= 0 && width <= 24) {
        progressBar.style.backgroundColor = "#FA8072";
      } else if (width >= 25 && width <= 74) {
        progressBar.style.backgroundColor = "#F0E68C";
      } else if (width >= 75 && width <= 100) {
        progressBar.style.backgroundColor = "#50C878";
      }
    });
  });
  
   // Hide the loader when the page finishes loading
   window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
  });