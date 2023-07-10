window.addEventListener('scroll', function() {
    var button = document.querySelector('.whatsapp-button');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > 100) {
      button.classList.add('show-whatsapp-button');
    } else {
      button.classList.remove('show-whatsapp-button');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  });
  
  