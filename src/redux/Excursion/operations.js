import axios from 'axios';
import excursionActions from './actions';
import { api } from '../../utils/api';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchExcursions = () => async dispatch => {
  dispatch(excursionActions.fetchExcursionsRequest());

  try {
    
    const { data } = await axios.get('/excursions');

    dispatch(excursionActions.fetchExcursionsSuccess(data));
  } catch (error) {
    dispatch(excursionActions.fetchExcursionsError(error.massage));
    alert(error.message);
  }
};




export const addExcursion = createAsyncThunk('excursions/addNotice', async (fields, thunkAPI) => {
  try {
    console.log('fields', fields);
    const response = await api.post('/excursions', fields);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});




// export const deleteExcursion = id => async dispatch => {
//   dispatch(excursionActions.deleteExcursionsRequest());

//   try {
//     await axios.delete(`/excursions/${id}`);

//     dispatch(excursionActions.deleteExcursionsSuccess(id));
//   } catch (error) {
//     dispatch(excursionActions.deleteExcursionsError(error.massage));
//     alert(error.message);
//   }
// };
export const deleteExcursion = createAsyncThunk('excursions/deleteExcursion', async (excursionId, thunkAPI) => {
  try {
    const response = await api.delete(`/excursions/${excursionId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

