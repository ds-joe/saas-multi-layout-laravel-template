// Redux
import { useSelector } from "react-redux";
import { DashboardRootState } from "@/redux/store";

// Components
import Routes from "./Components/Routes";


const Sidebar: RC = () => {
  const sidebarOpen = useSelector((state: DashboardRootState) => state.dashboard.layout.sidebarOpen);

  return (
    <aside className={`max-w-64 w-64 bg-background transition-all duration-300 flex flex-col border-r border-r/10 gap-2 overflow-hidden px-4 pt-4  max-md:absolute max-md:-left-full left-0 ${sidebarOpen && 'max-md:flex md:absolute md:-left-full max-md:relative max-md:left-0 md:hidden'}`}>
      <Routes />
    </aside>
  )
}

export default Sidebar;
