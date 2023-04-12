import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

export const fetchReviews = createAsyncThunk('review/fetch', async () => {
  const response = await api.get('/review');
  return response.data;
});

export const createReview = createAsyncThunk('review/create', async (reviewData) => {
  const response = await api.post('/review', reviewData);
//   console.log(response.data)
  return response.data;
});

export const deleteReview = createAsyncThunk('review/delete', async (reviewId) => {
  await api.delete(`/reviews/${reviewId}`);
  return reviewId;
});
