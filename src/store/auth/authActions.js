import { AuthApi } from 'store/auth/authApi';
import { authActions } from 'store/auth/authSlice';

const { loginStart, loginSuccess, loginError, logOut } = authActions;

export const loginUser = ({ username, password }) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await AuthApi.loginUser({
      username,
      password,
    });

    if (response.error) {
      return dispatch(loginError({ error: response.error }));
    }
    return dispatch(loginSuccess({ ...response.data }));
  } catch (error) {
    return dispatch(loginError({ error: error.message }));
  }
};

export const logOutUser = () => (dispatch) => dispatch(logOut());

export const selectAuth = (state) => state.auth;
