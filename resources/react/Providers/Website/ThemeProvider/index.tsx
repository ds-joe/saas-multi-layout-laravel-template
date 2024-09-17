// Dependencies
import { Fragment, useEffect } from 'react';

// Assets
import '@/styles/scss/website/main.scss';

const ThemeProvider: RPO = ({ children }) => {
  // Set layout main class
  useEffect(() => {
    document.documentElement.classList.add('website-layout');
    // Cleanup
    return () => {
      document.documentElement.classList.remove('website-layout');
    };
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default ThemeProvider;
