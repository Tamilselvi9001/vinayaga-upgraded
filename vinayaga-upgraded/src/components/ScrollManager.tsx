import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top on path change
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there is a hash, scroll to the element with that id
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // We use a small timeout to ensure the DOM is ready if we just navigated to this page
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}
