// import { createSlice } from '@reduxjs/toolkit';
// import {
//   // getUserInfo,
//   logIn,
//   logOut,
//   refresh,
//   register,
//   // updateUser,

// } from './operations';


// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null, // изначально значение свойства user равно null
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//     isLoading: false,
//     error: null,
//     isRegistered: false,
//   },

//   extraReducers: builder =>
//     builder
//       .addCase(register.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action) => {
     
//         state.isLoading = false;
//         state.error = null;
//         state.isRegistered = true;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(logIn.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refresh.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refresh.fulfilled, (state, action) => {
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refresh.rejected, state => {
//         state.isRefreshing = false;
//       }),
   
//   reducers: {
//     clearError(state) {
//       state.error = null;
//     },
//   },
// });

// export const { clearError } = authSlice.actions;

// export const authReducer = authSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import  { register, logIn, logOut, refresh, } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
    isRegistered: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action)=> {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {name: null, email: null}
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
         state.user = action.payload;
       state.isLoggedIn = true;
      state.isRefreshing = false;
      })
});
export const authReducer = authSlice.reducer;

 