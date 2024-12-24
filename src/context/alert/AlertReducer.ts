type AlertState = {
  alert: {
    msg: string;
    type: 'success' | 'error' | 'info';
  } | null;
};

type AlertAction = 
  | { type: 'SHOW_ALERT'; payload: { msg: string; type: 'success' | 'error' | 'info' } }
  | { type: 'HIDE_ALERT' };

const AlertReducer = (state: AlertState, action: AlertAction): AlertState => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        alert: action.payload
      };
    case 'HIDE_ALERT':
      return {
        ...state,
        alert: null
      };
    default:
      return state;
  }
};

export default AlertReducer;