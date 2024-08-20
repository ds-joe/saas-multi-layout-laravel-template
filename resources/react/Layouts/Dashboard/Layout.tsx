// Dependencies
import { Fragment } from "react";

// Providers
import ThemeProvider from "@/Providers/Dashboard/ThemeProvider";

// Components
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Dashboard/Layout/Sidebar";
import Navbar from "@/Components/Dashboard/Layout/Navbar";

const Layout: RPL = ({ children, title }) => {

  return (
    <Fragment>
      <Head title={title} />
      <ThemeProvider>
        <main className="flex flex-col h-screen bg-primary-foreground">
          <Navbar />
          <section className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex flex-col overflow-auto flex-1">
              <div className="container pt-2">
                {children}
              </div>
            </div>
          </section>
        </main>
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout;