import axiosClient from './axios';

export const getToken = () => {
  const token = localStorage.getItem('token');
  
  if (token) {
    axiosClient.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axiosClient.defaults.headers.common['x-auth-token'];
  }
  
  return token;
};