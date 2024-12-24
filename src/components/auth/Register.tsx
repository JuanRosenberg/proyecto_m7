import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../context/alert/AlertContext';
import { RegisterForm } from './RegisterForm';
import { AuthLayout } from './AuthLayout';
import { handleRegister } from './authService';

const Register = () => {
  const navigate = useNavigate();
  const { showAlert } = useContext(AlertContext);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      await handleRegister(email, password, name);
      navigate('/');
    } catch (error) {
      showAlert(error instanceof Error ? error.message : 'Registration failed', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Create an Account">
      <RegisterForm onSubmit={onSubmit} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default Register;