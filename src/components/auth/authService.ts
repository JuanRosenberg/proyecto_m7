import axiosClient from '../../config/axios';

export const handleLogin = async (email: string, password: string) => {
  try {
    const response = await axiosClient.post('/api/auth/login', { email, password });
    console.log('response.data.token..'+response.data.token)
    console.log('response.data..'+response.data)
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};

export const handleRegister = async (email: string, password: string, name: string) => {
  try {
    const response = await axiosClient.post('/api/auth/register', {
      email,
      password,
      name
    });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed. Please try again.');
  }
};