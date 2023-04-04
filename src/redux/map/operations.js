import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchMap = createAsyncThunk(
  'map/fetchMap',
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/map`);
console.log("responce", response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
 
);


export const addMap = createAsyncThunk('map/addMap', async (fields, thunkAPI) => {
  try {
    
    const response = await api.post('/map', fields);
    console.log('fields', response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});





export const deleteMap = createAsyncThunk('map/deleteMap', async (mapId, thunkAPI) => {
  try {
    const response = await api.delete(`/map/${mapId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

