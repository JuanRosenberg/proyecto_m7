import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

interface AlertStateProps {
  children: React.ReactNode;
}

const AlertState: React.FC<AlertStateProps> = ({ children }) => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const showAlert = (msg: string, type: 'success' | 'error' | 'info') => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: { msg, type }
    });

    setTimeout(() => {
      hideAlert();
    }, 3000);
  };

  const hideAlert = () => {
    dispatch({
      type: 'HIDE_ALERT'
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
        hideAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;