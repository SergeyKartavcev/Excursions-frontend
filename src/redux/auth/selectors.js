export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRegistered = state => state.auth.isRegistered;

export const selectError = state => state.auth.error;
export const selectUserName = state => state.auth.user.name;
export const selectUser = state => state.auth.user;
export const selectUserRole = state => state.auth.user.role;