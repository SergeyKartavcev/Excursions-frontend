import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExcursions = createAsyncThunk(
  'excursions/fetchExcursions',
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/excursions`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
 
);


export const fetchExcursionItem = createAsyncThunk('excursions/fetchOne', async (excursionId, thunkAPI) => {
  try {
    const response = await api.get(`/excursions/${excursionId}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



export const addExcursion = createAsyncThunk('excursions/addExcursion', async (fields, thunkAPI) => {
  try {
    const response = await api.post('/excursions', fields);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});





export const deleteExcursion = createAsyncThunk('excursions/deleteExcursion', async (excursionId, thunkAPI) => {
  try {
    const response = await api.delete(`/excursions/${excursionId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

