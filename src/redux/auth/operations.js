import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearAuthHeader, setAuthHeader } from '../../utils/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
      const res = await api.post('/auth/register', credentials);
      setAuthHeader(res.data.token);
      console.log(res.data)
      return res.data;
    } catch (error) {
      const message = [409, 401, 400].includes(error?.response?.status)
        ? error?.response?.data?.message
        : `Request was failed with code ${error?.response?.status}`;
  
      Notify.failure(`Registration is not completed. ${message}`, {
        timeout: 5000,
      });
      return thunkAPI.rejectWithValue({
        message: error?.response?.data?.message,
        status: error?.response?.status,
      });
    }
  }
);



export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post('/auth/login', credentials);
      setAuthHeader(res.data.token)
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('/auth/logout');
       clearAuthHeader()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk('auth/refresh',
 async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('Unable to fetch current user');
  }

  try {
    setAuthHeader(token);
    console.log('Sending refresh request...');
    const res = await api.get('/auth/refresh', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(res.data); 
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

