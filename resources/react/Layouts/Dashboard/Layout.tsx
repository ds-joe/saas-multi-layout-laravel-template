// Dependencies
import { Fragment, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

// Hooks
import useNotification from '@/hooks/useNotification';
import useTheme from '@/hooks/useTheme';

// Providers
import ThemeProvider from '@/Providers/Dashboard/ThemeProvider';
import NotificationProvider from '@/Providers/Global/NotificationProvider';

// Redux
import { useSelector } from 'react-redux';
import { DashboardRootState } from '@/redux/store';

// Components
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Dashboard/Layout/Navbar';
import Sidebar from '@/Components/Dashboard/Layout/Sidebar';
import PageContentCover from '@/Components/Dashboard/Layout/PageContentCover';

const Layout: RPL = ({ children, title }) => {
  const toast = useNotification();
  const { dashboard } = useTheme();
  const { notification } = usePage().props as ServerPageProps;
  const layoutSettings = useSelector(
    (state: DashboardRootState) => state.dashboard.layout,
  );

  // Render server notifications
  useEffect(() => {
    if (notification) {
      toast(notification.message, notification.type);
    }
  }, [notification]);

  return (
    <Fragment>
      <Head title={title} />
      <ThemeProvider>
        <NotificationProvider
          options={{
            theme: layoutSettings.darkMode ? 'dark' : 'light',
          }}
        >
          <main className={dashboard.layout.main}>
            <Navbar />
            <div className={dashboard.layout.content_area}>
              <Sidebar />
              <div className={dashboard.layout.page_content}>
                <PageContentCover visible={layoutSettings.sidebarOpen} />
                <div className="container my-4">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </NotificationProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;
