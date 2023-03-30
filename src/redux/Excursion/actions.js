import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('excursions/changeFilter');

const fetchExcursionsRequest = createAction('excursions/fetchExcursionsRequest');
const fetchExcursionsSuccess = createAction('excursions/fetchExcursionsSuccess');
const fetchExcursionsError = createAction('excursions/fetchExcursionsError');

const addExcursionsRequest = createAction('excursions/addExcursionsRequest');
const addExcursionsSuccess = createAction('excursions/addExcursionsSuccess');
const addExcursionsError = createAction('excursions/addExcursionsError');

const deleteExcursionsRequest = createAction('excursions/deleteExcursionsRequest');
const deleteExcursionsSuccess = createAction('excursions/deleteExcursionsSuccess');
const deleteExcursionsError = createAction('excursions/deleteExcursionsError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchExcursionsRequest,
  fetchExcursionsSuccess,
  fetchExcursionsError,
  addExcursionsRequest,
  addExcursionsSuccess,
  addExcursionsError,
  deleteExcursionsRequest,
  deleteExcursionsSuccess,
  deleteExcursionsError,
  changeFilter,
};
