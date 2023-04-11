export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsRegistered = state => state.auth.isRegistered;

export const selectError = state => state.auth.error;
export const selectUser = state => state.auth.user;
export const selectUserName = state => state.auth.user ? state.auth.user.name || 'Unnamed User' : '';

export const selectUserRole = state => state.auth.user ? state.auth.user.role || 'user' : 'user';
