// Types
import { ToastOptions } from 'react-toastify';

export interface NotificationProviderProps
  extends RPO<{
    options?: ToastOptions;
  }> {}
