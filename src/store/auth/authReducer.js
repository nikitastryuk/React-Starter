import ls from 'utils/localStorage';

import { ACCESS_TOKEN_LS_KEY, USERNAME_LS_KEY } from 'constants';

export const initialState = {
  username: ls.getItem(USERNAME_LS_KEY) || null,
  accessToken: ls.getItem(ACCESS_TOKEN_LS_KEY) || null,
  loading: false,
  error: null,
};

export const loginStart = (state) => {
  state.loading = true;
  state.error = null;
};

export const loginSuccess = (state, action) => {
  const { accessToken, username } = action.payload;

  state.username = username;
  state.accessToken = accessToken;
  state.loading = false;
  state.error = null;

  ls.setItem(USERNAME_LS_KEY, username);
  ls.setItem(ACCESS_TOKEN_LS_KEY, accessToken);
};

export const loginError = (state, action) => {
  const { error } = action.payload;

  state.loading = false;
  state.error = error;
};

export const logOut = (state) => {
  state.accessToken = null;
  state.username = null;
  state.error = null;

  ls.removeItem(ACCESS_TOKEN_LS_KEY);
  ls.removeItem(USERNAME_LS_KEY);
};
