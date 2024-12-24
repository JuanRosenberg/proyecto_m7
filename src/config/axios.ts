import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:3005'
});

export default axiosClient;