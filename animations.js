/**
 * Scroll-triggered animations using IntersectionObserver
 * Lightweight, performant, and accessible solution
 */

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold:0.1,
      rootMargin:'0px 0px -50px 0px'
    };
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.observerOptions
    );
    this.init();
  }

  init() {
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '[data-animate], .service-card, .realisations-item, .equipement-card, .temoignage-card'
    );
    
    animatedElements.forEach(el => {
      // Set initial state
      if (!el.hasAttribute('data-animate')) {
        el.style.opacity = '0';
        el.style.willChange = 'opacity, transform';
      }
      this.observer.observe(el);
    });

    // Observe section titles for staggered animations
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach(title => {
      this.observer.observe(title);
    });

    // Observe images for fade-in
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.willChange = 'opacity, filter';
      this.observer.observe(img);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        
        // Determine animation type based on element
        if (el.tagName === 'H2' && el.closest('section')) {
          el.classList.add('scroll-animate-slide-up');
        } else if (el.tagName === 'IMG') {
          el.style.opacity = '1';
          el.classList.add('scroll-animate-fade');
        } else if (el.classList.contains('service-card') ||
                   el.classList.contains('realisations-item') ||
                   el.classList.contains('equipement-card') ||
                   el.classList.contains('temoignage-card')) {
          el.style.opacity = '1';
          el.classList.add('scroll-animate-slide-up');
        } else {
          el.style.opacity = '1';
          el.classList.add('scroll-animate-fade');
        }

        // Stop observing after animation is triggered
        this.observer.unobserve(el);
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
  });
} else {
  new ScrollAnimations();
}

/**
 * Smooth scroll enhancement for navigation links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    }
  });
});

/**
 * Reveal animations for lists with stagger effect
 */
class ListAnimations {
  constructor() {
    this.animateLists();
  }

  animateLists() {
    const lists = document.querySelectorAll('.service-list, .service-features');
    
    lists.forEach(list => {
      const items = list.querySelectorAll('li');
      items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `slideInLeft 0.6s ease-out ${0.1 * index}s forwards`;
      });
    });
  }
}

// Initialize list animations
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ListAnimations();
  });
} else {
  new ListAnimations();
}

/**
 * Form input focus animations
 */
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement?.classList.add('focused');
  });

  input.addEventListener('blur', function() {
    if (!this.value) {
      this.parentElement?.classList.remove('focused');
    }
  });
});