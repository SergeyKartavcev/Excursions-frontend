import { createSelector } from '@reduxjs/toolkit';

export const selectReviews = (state) => state.reviews.reviews;

export const selectSortedReviews = createSelector(
  [selectReviews],
  (reviews) => reviews.sort((a, b) => b.createdAt - a.createdAt)
);
