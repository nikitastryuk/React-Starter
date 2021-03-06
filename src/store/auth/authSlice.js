import { createSlice } from '@reduxjs/toolkit';

import { initialState, logOut, loginError, loginStart, loginSuccess } from 'store/auth/authReducer';

const SLICE_NAME = 'auth';

export const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    loginStart,
    loginSuccess,
    loginError,
    logOut,
  },
});
export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
