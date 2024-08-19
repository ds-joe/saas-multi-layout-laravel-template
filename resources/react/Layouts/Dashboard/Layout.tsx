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
        <main className="flex flex-col">
          <Navbar />
          <section className="flex">
            <Sidebar />
            <div className="flex-1">
              {children}
            </div>
          </section>
        </main>
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout;