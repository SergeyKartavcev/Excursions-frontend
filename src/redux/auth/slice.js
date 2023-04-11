// import { createSlice } from '@reduxjs/toolkit';
// import  { register, logIn, logOut, refresh, } from './operations';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {},
//     token: null,
//     isLoggedIn: false,
//     isLoading: false,
//     isRefreshing: false,
//     isRegistered: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(register.pending, (state, action) => state)
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.isLoggedIn = true;
//         state.user = {
//           name: action.payload.user.name,
//           email: action.payload.user.email,
//           role: action.payload.user.role
//         };
//         state.token = action.payload.token;
//       })
//       .addCase(register.rejected, (state, action) => state)
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.isLoggedIn = true;
//         state.user =  action.payload;
//         state.token = action.payload.token;
    
//       })
      
//       .addCase(logOut.fulfilled, state => {
//         state.user = {name: null, email: null}
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refresh.fulfilled, (state, action) => {
//          state.user = action.payload;
//        state.isLoggedIn = true;
//       state.isRefreshing = false;
//       })
// });
// export const authReducer = authSlice.reducer;

 
import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  logIn,
  logOut,
  refreshUser,
  register,
  updateUser,
  verifyUser,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      role: null,
      _id: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
    isRegistered: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.isRegistered = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(getUserInfo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(verifyUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
});

export const { clearError } = authSlice.actions;

export const authReducer = authSlice.reducer;
