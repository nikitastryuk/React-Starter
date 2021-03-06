import { useSelector } from 'react-redux';

import { ACCESS_TOKEN_LS_KEY, USERNAME_LS_KEY } from 'constants';
import { selectAuth } from 'store/auth/authActions';
import ls from 'utils/localStorage';

export function useAuth() {
  const auth = useSelector(selectAuth);
  const { accessToken, username } = auth;

  const isAuthenticated = !!(accessToken && username) && areAllAuthTokensStored();

  return {
    auth,
    isAuthenticated,
  };
}

function areAllAuthTokensStored() {
  return !!(ls.getItem(ACCESS_TOKEN_LS_KEY) && ls.getItem(USERNAME_LS_KEY));
}
