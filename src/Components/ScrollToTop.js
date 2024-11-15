// Import necessary dependencies
import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll to the top when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;