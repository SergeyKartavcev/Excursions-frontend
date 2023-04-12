import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews, createReview, deleteReview } from './operations';

const initialState = {
  reviews: [],
  status: 'idle',
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        const reviewId = action.payload;
        const index = state.reviews.findIndex((review) => review._id === reviewId);
        if (index !== -1) {
          state.reviews.splice(index, 1);
        }
      });
  },
});


export const reviewsReducer = reviewsSlice.reducer;