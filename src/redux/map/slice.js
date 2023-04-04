import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchMap, addMap, deleteMap } from "./operations";

const extraActions = [fetchMap, addMap, deleteMap];

const mapInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const mapSlice = createSlice({
  name: "map",
  initialState: mapInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchMap.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addMap.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteMap.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (map) => map._id === action.payload.id
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
    clearMap(state) {
      state.items = [];
    },
  },
});

export const { clearMap } = mapSlice.actions;
export const mapReducer = mapSlice.reducer;
