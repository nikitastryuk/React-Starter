import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { authReducer } from 'store/auth/authSlice';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
});
