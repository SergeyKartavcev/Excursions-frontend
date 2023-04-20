import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchEvents,
  fetchEventItem,
  addEvent,
  deleteEvent,
} from "./operations";

const extraActions = [
  fetchEvents,
  fetchEventItem,
  addEvent,
  deleteEvent,
];

const eventsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  eventItem: {},
};

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsInitialState,
  extraReducers: (builder) =>
    builder
    .addCase(fetchEvents.fulfilled, (state, action) => {
      state.items = action.payload;
    })
      .addCase(fetchEventItem.fulfilled, (state, action) => {
        state.eventItem = action.payload;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
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
    clearEventItem(state) {
      state.eventItem = {};
    },
    clearEvents(state) {
      state.items = [];
    },
  },
});

export const { clearEventItem, clearEvents } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
