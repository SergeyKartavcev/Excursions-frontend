import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/events`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
 
);


export const fetchEventItem = createAsyncThunk('events/fetchOne', async (eventId, thunkAPI) => {
  try {
    const response = await api.get(`/events/${eventId}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});



export const addEvent = createAsyncThunk('events/addEvent', async (fields, thunkAPI) => {
  try {
    const response = await api.post('/events', fields);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});





export const deleteEvent = createAsyncThunk('events/deleteEvent', async (eventId, thunkAPI) => {
  try {
    const response = await api.delete(`/events/${eventId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getLastEvents = createAsyncThunk(
  'events/getLastEvents',
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/events`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
 
);