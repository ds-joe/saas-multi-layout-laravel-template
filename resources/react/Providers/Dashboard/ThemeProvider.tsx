// Dependencies
import { Fragment, useEffect } from "react";

// Assets
import "@/styles/scss/dashboard/main.scss";

const ThemeProvider: RPO = ({ children }) => {

  // Set layout main class
  useEffect(() => {
    document.documentElement.classList.add('dashboard-layout');
    // Cleanup
    return () => {
      document.documentElement.classList.remove('dashboard-layout');
    }
  }, []);

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default ThemeProvider;