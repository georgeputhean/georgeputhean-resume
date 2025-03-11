
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
        // Make sure we're removing the opacity-0 class
        entry.target.classList.add('animate-fade-in-up');
        entry.target.classList.remove('opacity-0');
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
      element.classList.remove('opacity-0');
    }, { once: true });
  });
};
