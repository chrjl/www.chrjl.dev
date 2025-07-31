import { useEffect } from 'react';

import '../styles/components/scroll-snap.scss';

const ScrollSnapContainer = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Fallback for browsers that do not support scroll-snap container query.
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
        threshold: [0],
        rootMargin: '-49.9%',
      }
    );

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => observer.observe(card));

    // Fallback event handlers in case of bugs in IO implementation
    cards.forEach((card) => {
      card.addEventListener('mouseover', () => {
        card.classList.add('card-snapped-fallback');
      });

      card.addEventListener('mouseout', () => {
        const viewportHeight = window.innerHeight;
        const { top, bottom } = card.getBoundingClientRect();

        if (!(top < viewportHeight / 2 && bottom > viewportHeight / 2)) {
          card.classList.remove('card-snapped-fallback');
        }
      });
    });
  }, []);

  return children;
};

export default ScrollSnapContainer;
