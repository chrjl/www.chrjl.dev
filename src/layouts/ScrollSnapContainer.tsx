import { useEffect } from 'react';

import '../styles/components/scroll-snap.scss';

const ScrollSnapContainer = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Fallback if browser does not support scroll snap container query.
    // Use Intersection Observer and CSS class to emulate behavior.

    if (CSS.supports('container-type', 'scroll-state')) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-snapped-fallback');
        } else {
          entry.target.classList.remove('card-snapped-fallback');
        }
      },
      {
        threshold: [1],
      }
    );

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => observer.observe(card));
  }, []);

  return children;
};

export default ScrollSnapContainer;
