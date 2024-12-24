import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../config/token';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = getToken();
  
  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;