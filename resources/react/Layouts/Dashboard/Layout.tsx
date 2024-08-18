// Dependencies
import { Fragment } from "react";

// Providers
import ThemeProvider from "@/Providers/Dashboard/ThemeProvider";

// Components
import { Head } from "@inertiajs/react";

const Layout: RPL = ({ children, title }) => {
  return (
    <Fragment>
      <Head title={title} />
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout;