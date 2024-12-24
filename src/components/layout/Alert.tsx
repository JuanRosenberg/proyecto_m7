import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  if (!alert) return null;

  const alertClasses = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

  return (
    <div className={`border-l-4 p-4 mb-4 ${alertClasses[alert.type]}`}>
      <p>{alert.msg}</p>
    </div>
  );
};

export default Alert;