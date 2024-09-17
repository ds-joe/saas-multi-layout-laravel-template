// Dependencies
import { Fragment } from "react";

// Providers
import StoreProvider from "@/Providers/Dashboard/StoreProvider";

// Layout Template
import Layout from "./Layout";

const DashboardLayout: RPL = (props) => {
  return (
    <Fragment>
      <StoreProvider>
        <Layout {...props} />
      </StoreProvider>
    </Fragment>
  )
}

export default DashboardLayout;
