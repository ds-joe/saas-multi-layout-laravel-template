// Redux
import { useSelector } from 'react-redux';
import { DashboardRootState } from '@/redux/store';

// Components
import Routes from './Components/Routes';

const Sidebar: RC = () => {
  const sidebarOpen = useSelector(
    (state: DashboardRootState) => state.dashboard.layout.sidebarOpen,
  );

  return (
    <aside
      className={`max-w-64 w-64 transition-all duration-300 flex flex-col gap-2 overflow-hidden px-4 pt-4 max-lg:fixed max-lg:-left-full left-0  ${sidebarOpen && 'max-lg:flex lg:absolute lg:-left-full max-lg:relative max-lg:left-0 lg:hidden max-lg:bg-background max-lg:z-10'}`}
    >
      <Routes />
    </aside>
  );
};

export default Sidebar;
