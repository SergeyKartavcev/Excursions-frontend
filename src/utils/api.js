import axios from 'axios';
// import { API_BASE_URL } from '../redux/constants';

export const api = axios.create({
  baseURL: 'http://localhost:5000/',
//   baseURL: 'https://pet-support.onrender.com/api',
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
