// Dependencies
import { Fragment } from "react";

// NOTE: keep assets before prime provider to avoid any errors
import "@/styles/scss/dashboard/main.scss";

const ThemeProvider: RPO = ({ children }) => {

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default ThemeProvider;