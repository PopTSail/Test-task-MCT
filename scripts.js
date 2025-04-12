document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Animate sections on scroll
    function checkVisibility() {
      const sections = document.querySelectorAll('.hero, .features, .form-section');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          section.classList.add('visible');
        }
      });
    }
  
    // Initialize animations
    window.addEventListener('load', function() {
      checkVisibility();
      // Show first section immediately
      document.querySelector('.hero').classList.add('visible');
    });
  
    window.addEventListener('scroll', checkVisibility);
  
    
  
    // Add hover effect to all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
  });