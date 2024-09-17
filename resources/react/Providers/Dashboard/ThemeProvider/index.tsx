// Dependencies
import { Fragment, useEffect } from 'react';

// Assets
import '@/styles/scss/dashboard/main.scss';

const ThemeProvider: RPO = ({ children }) => {
  // Implement dark theme
  useEffect(() => {
    const storage = localStorage.getItem('dark-theme');
    if (storage === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Set layout main class
  useEffect(() => {
    document.documentElement.classList.add('dashboard-layout');
    // Cleanup
    return () => {
      document.documentElement.classList.remove('dashboard-layout');
    };
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default ThemeProvider;
