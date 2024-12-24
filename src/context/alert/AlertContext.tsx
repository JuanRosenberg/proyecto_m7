import { createContext } from 'react';

interface AlertContextType {
  alert: {
    msg: string;
    type: 'success' | 'error' | 'info';
  } | null;
  showAlert: (msg: string, type: 'success' | 'error' | 'info') => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType>({
  alert: null,
  showAlert: () => {},
  hideAlert: () => {}
});

export default AlertContext;