// Redux Requirements
import { Provider } from "react-redux";
import { dashboardStore } from "@/redux/store";

const StoreProvider: RPO = ({ children }) => {
  return (
    <Provider store={dashboardStore}>
      {children}
    </Provider>
  )
}

export default StoreProvider;