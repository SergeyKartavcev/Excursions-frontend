import { createSelector } from '@reduxjs/toolkit';

export const selectExcursions = state => state.excursions.items;
export const selectExcursionItem = state => state.excursions.excursionItem;

export const selectIsLoadingExcursion = state => state.excursions.isLoading;
export const selectError = state => state.excursions.error;




 
  export const selectIsAdded = createSelector([selectExcursions], excursions => {
    const isAdded = title => excursions.map(excursion => excursion.title).includes(title);
    return isAdded;
  });
  