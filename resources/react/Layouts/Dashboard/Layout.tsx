// Dependencies
import { Fragment, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

// Hooks
import useNotification from '@/hooks/useNotification';

// Providers
import ThemeProvider from '@/Providers/Dashboard/ThemeProvider';
import NotificationProvider from '@/Providers/Global/NotificationProvider';

// Redux
import { useSelector } from 'react-redux';
import { DashboardRootState } from '@/redux/store';

// Components
import { Head } from '@inertiajs/react';
import Sidebar from '@/Components/Dashboard/Layout/Sidebar';
import Navbar from '@/Components/Dashboard/Layout/Navbar';
import PageContentCover from '@/Components/Dashboard/Layout/PageContentConver';

const Layout: RPL = ({ children, title }) => {
  const toast = useNotification();
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
          <main className="flex flex-col h-screen bg-primary-foreground  ">
            <Navbar />
            <section className="flex flex-1 overflow-hidden relative">
              <Sidebar />
              <div
                className={`relative flex flex-col overflow-y-auto flex-1 ${layoutSettings.sidebarOpen && 'max-md:overflow-y-hidden'}`}
              >
                <PageContentCover
                  visible={layoutSettings.sidebarOpen?.toString()}
                />
                <div className="container pt-6">{children}</div>
              </div>
            </section>
          </main>
        </NotificationProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;
