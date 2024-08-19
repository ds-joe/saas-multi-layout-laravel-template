// Dependencies
import { Fragment } from "react";

// NOTE: keep assets before prime provider to avoid any errors
import "@/styles/scss/dashboard/main.scss";

// Providers
import PrimeReactThemeProvider from "../Global/PrimeReactThemeProvider";

const ThemeProvider: RPO = ({ children }) => {

  return (
    <Fragment>
      <PrimeReactThemeProvider>
        {children}
      </PrimeReactThemeProvider>
    </Fragment>
  )
}

export default ThemeProvider;