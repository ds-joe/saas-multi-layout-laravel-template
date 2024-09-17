// Dependencies
import { ReactNode } from 'react';
import { toast as createToast, TypeOptions } from 'react-toastify';

const useNotification = () => {
  /**
   * This function using to create a toast.
   *
   * @param { ReactNode } message
   * @param { TypeOptions } toastType
   * @returns { void }
   */
  const toast = (message: ReactNode, toastType: TypeOptions): void => {
    switch (toastType) {
      case 'default':
        createToast(message);
        break;
      case 'error':
        createToast.error(message);
        break;
      case 'success':
        createToast.success(message);
        break;
      case 'warning':
        createToast.warning(message);
        break;
      case 'info':
        createToast.info(message);
        break;
    }
  };

  return toast;
};

export default useNotification;
