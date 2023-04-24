import { createSlice} from "@reduxjs/toolkit";
import { fetchWe, addWe, deleteWe } from "./operations";
const initialState = {
    we: [],
    status: 'idle',
    error: null,
  };
  
  const weSlice = createSlice({
    name: 'we',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWe.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchWe.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.we = action.payload;
        })
        .addCase(fetchWe.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(addWe.fulfilled, (state, action) => {
          state.we.push(action.payload);
        })
        .addCase(deleteWe.fulfilled, (state, action) => {
          const weId = action.payload;
          const index = state.we.findIndex((we) => we._id === weId);
          if (index !== -1) {
            state.we.splice(index, 1);
          }
        });
    },
  });

export const weReducer = weSlice.reducer;
