// Dependencies
import { ToastContainer } from "react-toastify";

// Styles
import "react-toastify/dist/ReactToastify.css";

// Types
import type { NotificationProviderProps } from "@/types/Providers/Global/NotificationProvider";
import type { ToastOptions } from "react-toastify";

const NotificationProvider: NotificationProviderProps = ({ children, options }) => {
  const toastsOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'light',
    ...(options ?? {})
  }

  return (
    <>
      {children}
      <ToastContainer {...toastsOptions} />
    </>
  )
}

export default NotificationProvider;
