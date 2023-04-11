import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/videos`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
 
);






export const addVideo = createAsyncThunk('videos/addVideo', async (fields, thunkAPI) => {
  try {
    
    const response = await api.post('/videos', fields);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});





export const deleteVideo = createAsyncThunk('videos/deleteVideo', async (videoId, thunkAPI) => {
  try {
    const response = await api.delete(`/videos/${videoId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

