// import axios from 'axios';
// import excursionActions from './actions';
import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';


// export const fetchExcursions = () => async dispatch => {
//   dispatch(excursionActions.fetchExcursionsRequest());

//   try {
    
//     const { data } = await axios.get('/excursions');

//     dispatch(excursionActions.fetchExcursionsSuccess(data));
//   } catch (error) {
//     dispatch(excursionActions.fetchExcursionsError(error.massage));
//     alert(error.message);
//   }
// };

export const fetchExcursions = createAsyncThunk(
  'excursions/fetchExcursions',
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/excursions`);
      console.log(response)
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
    console.log('fields', fields);
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

