import axios from 'axios';


export const api = axios.create({
  baseURL: 'http://localhost:5000/',
 
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


