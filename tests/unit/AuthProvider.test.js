import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ACCESS_TOKEN_LS_KEY, REFRESH_TOKEN_LS_KEY } from 'constants';
import { AuthActionsContext, AuthProvider, AuthStateContext } from 'app/AppProviders/AuthProvider/AuthProvider';
import { AuthApi } from 'app/AppProviders/AuthProvider/authApi';
import { ThemeProvider } from 'app/AppProviders/ThemeProvider/ThemeProvider';
import ls from 'utils/localStorage';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: jest.fn(),
    };
  },
}));

const USER = 'user';
const AUTH_TOKENS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
};

function TestComponent() {
  return (
    <AuthStateContext.Consumer>
      {(user) => (
        <AuthActionsContext.Consumer>
          {({ loginUser, refreshUserToken, logoutUser }) => (
            <>
              <p data-testid="auth-provider-state-value">{user}</p>
              <button onClick={loginUser}>Login</button>
              <button onClick={refreshUserToken}>Refresh token</button>
              <button onClick={logoutUser}>Logout</button>
            </>
          )}
        </AuthActionsContext.Consumer>
      )}
    </AuthStateContext.Consumer>
  );
}

function renderWithProviders() {
  return render(
    <ThemeProvider>
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    </ThemeProvider>,
  );
}

function expectAuthTokensAreSet() {
  expect(ls.setItem).toBeCalledWith(ACCESS_TOKEN_LS_KEY, AUTH_TOKENS.accessToken);
  expect(ls.setItem).toBeCalledWith(REFRESH_TOKEN_LS_KEY, AUTH_TOKENS.refreshToken);
}

describe('<AuthProvider />', () => {
  beforeEach(() => {
    // We run get user if tokens are stored - making this not happen
    jest.spyOn(ls, 'getItem').mockReturnValue(null);
    jest.spyOn(ls, 'setItem');
    jest.spyOn(AuthApi, 'logoutUser').mockReturnValue(Promise.resolve());
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should have empty initial state', async () => {
    renderWithProviders();
    expect(screen.getByTestId('auth-provider-state-value').textContent).toBe('');
  });

  it('should not load user if auth tokens are not stored', async () => {
    renderWithProviders();
    expect(screen.queryByTestId('auth-provider-loading')).toBeNull();
  });

  it('should get user if auth tokens are stored', async () => {
    const getUserResponse = { data: { user: USER } };
    jest.spyOn(ls, 'getItem').mockReturnValue('tokens');
    jest.spyOn(AuthApi, 'getUser').mockReturnValue(Promise.resolve(getUserResponse));
    renderWithProviders();
    expect(AuthApi.getUser).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('auth-provider-loading')).toBeTruthy();
    expect((await screen.findByTestId('auth-provider-state-value')).textContent).toBe(USER);
  });

  it('should login and logout user', async () => {
    const loginUserResponse = { data: { user: USER, ...AUTH_TOKENS } };
    jest.spyOn(AuthApi, 'loginUser').mockReturnValue(Promise.resolve(loginUserResponse));
    renderWithProviders();
    userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(AuthApi.loginUser).toHaveBeenCalledTimes(1);
    expect((await screen.findByTestId('auth-provider-state-value')).textContent).toBe(USER);
    expectAuthTokensAreSet();

    userEvent.click(screen.getByRole('button', { name: 'Logout' }));
    expect(AuthApi.logoutUser).toHaveBeenCalledTimes(1);
    expect((await screen.findByTestId('auth-provider-state-value')).textContent).toBe('');
  });

  it('should refresh user token', async () => {
    const refreshUserResponse = {
      data: {
        ...AUTH_TOKENS,
      },
    };
    jest.spyOn(AuthApi, 'refreshUserToken').mockReturnValue(Promise.resolve(refreshUserResponse));
    renderWithProviders();
    userEvent.click(screen.getByRole('button', { name: 'Refresh token' }));
    // ls.setItem calls happens in microtask queue - await refreshUserToken is done
    await expect(AuthApi.refreshUserToken).toHaveBeenCalledTimes(1);
    expectAuthTokensAreSet();
  });

  it('should logout user if refersh token fails', async () => {
    jest.spyOn(AuthApi, 'refreshUserToken').mockReturnValue(Promise.reject());
    renderWithProviders();
    userEvent.click(screen.getByRole('button', { name: 'Refresh token' }));
    // logoutUser call happens in microtask queue - await refreshUserToken is done
    await expect(AuthApi.refreshUserToken).toHaveBeenCalledTimes(1);
    expect(AuthApi.logoutUser).toHaveBeenCalledTimes(1);
  });
});
