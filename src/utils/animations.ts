
// Intersection Observer animations utility
export const observeElements = (selector: string, options = {}) => {
  // Default options for Intersection Observer
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };
  
  const elements = document.querySelectorAll(selector);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animation class and ensure opacity is set to 1 after animation
        entry.target.classList.add('animate-fade-in-up');
        entry.target.classList.remove('opacity-0');
        
        // Ensure the element remains visible after animation completes
        entry.target.addEventListener('animationend', () => {
          entry.target.style.opacity = '1';
        }, { once: true });
        
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);
  
  elements.forEach(element => {
    // Only add opacity-0 if it doesn't already have animate-fade-in-up
    if (!element.classList.contains('animate-fade-in-up')) {
      element.classList.add('opacity-0');
    }
    observer.observe(element);
  });
  
  return observer;
};

export const staggerAnimation = (selector: string, delay = 0.1, options = {}) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    (element as HTMLElement).style.animationDelay = `${index * delay}s`;
    
    // Ensure elements remain visible after animation
    element.addEventListener('animationend', () => {
      (element as HTMLElement).style.opacity = '1';
    }, { once: true });
  });
};
