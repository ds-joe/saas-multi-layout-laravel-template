// Dependencies
import { Fragment } from "react";

// Providers
import PrimeReactThemeProvider from "../Global/PrimeReactThemeProvider";

// Assets
import "@/styles/scss/dashboard/main.scss";

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