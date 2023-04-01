import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchExcursions,
  fetchExcursionItem,
  addExcursion,
  deleteExcursion,
} from "./operations";

const extraActions = [
  fetchExcursions,
  fetchExcursionItem,
  addExcursion,
  deleteExcursion,
];

const excursionsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  excursionItem: {},
};

const excursionsSlice = createSlice({
  name: "excursions",
  initialState: excursionsInitialState,
  extraReducers: (builder) =>
    builder
    .addCase(fetchExcursions.fulfilled, (state, action) => {
      state.items = action.payload;
    })
      .addCase(fetchExcursionItem.fulfilled, (state, action) => {
        state.excursionItem = action.payload;
      })
      .addCase(addExcursion.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteExcursion.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (excursion) => excursion._id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(...extraActions.map((action) => action.pending)),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map((action) => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map((action) => action.fulfilled)),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
  reducers: {
    clearExcursionItem(state) {
      state.excursionItem = {};
    },
    clearExcursions(state) {
      state.items = [];
    },
  },
});

export const { clearExcursionItem, clearExcursions } = excursionsSlice.actions;
export const excursionsReducer = excursionsSlice.reducer;
