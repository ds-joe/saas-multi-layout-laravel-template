// Dependencies
import { Head } from "@inertiajs/react";
import { Fragment } from "react";

// Providers
import ThemeProvider from "@/Providers/Website/ThemeProvider";

const Layout: RPL = ({ children, title }) => {

  return (
    <Fragment>
      <ThemeProvider>
        <Head>
          <title>{title}</title>
        </Head>
        <main className="flex flex-col h-screen bg-primary-foreground">
          {children}
        </main>
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout;