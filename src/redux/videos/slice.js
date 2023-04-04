import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchVideos, addVideo, deleteVideo } from "./operations";

const extraActions = [fetchVideos, addVideo, deleteVideo];

const videosInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const videosSlice = createSlice({
  name: "videos",
  initialState: videosInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addVideo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteVideo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (video) => video._id === action.payload.id
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
    clearVideos(state) {
      state.items = [];
    },
  },
});

export const { clearVideos } = videosSlice.actions;
export const videosReducer = videosSlice.reducer;
