import { combineReducers, createReducer } from '@reduxjs/toolkit';
import excursionsActions from './actions';

const item = createReducer([], {
  [excursionsActions.fetchExcursionsSuccess]: (_, { payload }) => payload,
  [excursionsActions.addExcursionsSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [excursionsActions.deleteExcursionsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [excursionsActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [excursionsActions.addExcursionsRequest]: () => true,
  [excursionsActions.addExcursionsSuccess]: () => false,
  [excursionsActions.addExcursionsError]: () => false,

  [excursionsActions.fetchExcursionsRequest]: () => true,
  [excursionsActions.fetchExcursionsSuccess]: () => false,
  [excursionsActions.fetchExcursionsError]: () => false,

  [excursionsActions.deleteExcursionsRequest]: () => true,
  [excursionsActions.deleteExcursionsSuccess]: () => false,
  [excursionsActions.deleteExcursionsError]: () => false,
});

export default combineReducers({
  item,
  filter,
  isLoading,
});
