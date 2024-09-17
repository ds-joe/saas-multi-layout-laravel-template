// Dependencies
import { Fragment, useEffect } from "react";
import { Head, usePage } from "@inertiajs/react";

// Hooks
import useNotification from "@/hooks/useNotification";

// Providers
import ThemeProvider from "@/Providers/Website/ThemeProvider";
import NotificationProvider from "@/Providers/Global/NotificationProvider";

const Layout: RPL = ({ children, title }) => {
  const toast = useNotification();
  const { notification } = usePage().props as ServerPageProps;

  // Render server notifications
  useEffect(() => {
    if (notification) {
      toast(notification.message, notification.type);
    }
  }, [notification, toast]);

  return (
    <Fragment>
      <ThemeProvider>
        <NotificationProvider>
          <Head>
            <title>{title}</title>
          </Head>
          <main className="flex flex-col h-screen bg-primary-foreground">
            {children}
          </main>
        </NotificationProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default Layout;
