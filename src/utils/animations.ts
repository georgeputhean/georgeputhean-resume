
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
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);
  
  elements.forEach(element => {
    element.classList.add('opacity-0');
    observer.observe(element);
  });
  
  return observer;
};

export const staggerAnimation = (selector: string, delay = 0.1, options = {}) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    (element as HTMLElement).style.animationDelay = `${index * delay}s`;
  });
};
