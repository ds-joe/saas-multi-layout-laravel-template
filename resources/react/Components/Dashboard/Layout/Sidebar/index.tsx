// Redux
import { useSelector } from 'react-redux';
import { DashboardRootState } from '@/redux/store';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import SidebarRoutes from './Components/Routes';

// Utils
import { cn } from '@/utilities/tailwind/cn';

const Sidebar: RC = () => {
  const theme = useTheme();
  const sidebarTheme = theme.dashboard.components.sidebar;
  const sidebarOpen = useSelector(
    (state: DashboardRootState) => state.dashboard.layout.sidebarOpen,
  );

  return (
    <aside
      className={cn(sidebarTheme.base, sidebarOpen ? sidebarTheme.open : '')}
    >
      <SidebarRoutes />
    </aside>
  );
};

export default Sidebar;
