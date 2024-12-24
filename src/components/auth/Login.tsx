import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../context/alert/AlertContext';
import { LoginForm } from './LoginForm';
import { AuthLayout } from './AuthLayout';
import { handleLogin } from './authService';

const Login = () => {
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertContext);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await handleLogin(email, password);
      navigate('/');
    } catch (error) {
      showAlert(error instanceof Error ? error.message : 'Login failed', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Login to Your Account">
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default Login;