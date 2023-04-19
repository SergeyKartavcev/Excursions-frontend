import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQvests = createAsyncThunk(
  'qvests/fetchQvests',
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/qvests`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
 
);


export const fetchQvestItem = createAsyncThunk('qvests/fetchOne', async (qvestId, thunkAPI) => {
  try {
    const response = await api.get(`/qvests/${qvestId}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



export const addQvest = createAsyncThunk('qvests/addQvest', async (fields, thunkAPI) => {
  try {
    const response = await api.post('/qvests', fields);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});





export const deleteQvest = createAsyncThunk('qvests/deleteQvest', async (qvestId, thunkAPI) => {
  try {
    const response = await api.delete(`/qvests/${qvestId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

