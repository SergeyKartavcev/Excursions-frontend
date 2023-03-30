import { createSelector } from '@reduxjs/toolkit';

export const selectExcursions = state => state.excursions.item;


export const selectIsLoadingExcursion = state => state.excursions.isLoading;
export const selectError = state => state.excursions.error;
// export const selectFilter = state =>state.excursions.filter ;


// export const selectFilteredExcursions = createSelector(
//     [selectExcursions, selectFilter],
//     (excursions, filter) =>
//     excursions.filter(excursion =>
//       excursion.title.includes(filter),
//     ),
//   );

 
  export const selectIsAdded = createSelector([selectExcursions], excursions => {
    const isAdded = title => excursions.map(excursion => excursion.title).includes(title);
    return isAdded;
  });
  