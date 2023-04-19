import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchQvests,
  fetchQvestItem,
  addQvest,
  deleteQvest,
} from "./operations";

const extraActions = [
  fetchQvests,
  fetchQvestItem,
  addQvest,
  deleteQvest,
];

const QvestsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  qvestItem: {},
};

const QvestsSlice = createSlice({
  name: "Qvests",
  initialState: QvestsInitialState,
  extraReducers: (builder) =>
    builder
    .addCase(fetchQvests.fulfilled, (state, action) => {
      state.items = action.payload;
    })
      .addCase(fetchQvestItem.fulfilled, (state, action) => {
        state.qvestItem = action.payload;
      })
      .addCase(addQvest.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteQvest.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (event) => event._id === action.payload.id
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
    clearQvestItem(state) {
      state.qvestItem = {};
    },
    clearQvests(state) {
      state.items = [];
    },
  },
});

export const { clearQvestItem, clearQvests } = QvestsSlice.actions;
export const qvestsReducer = QvestsSlice.reducer;
