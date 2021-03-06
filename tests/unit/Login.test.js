import { I18nextProvider } from 'react-i18next';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppThemeProvider } from 'app/theme/ThemeProvider';
import { AuthContext } from 'app/Auth/AuthProvider';
import { ROUTE_PATHS } from 'app/routes/routePaths';
import Login from 'pages/Login/Login';
import i18n from 'i18n/i18n';

function renderWithProviders(
  Component,
  { state = { user: null, loading: false, error: null }, mockedDispatch = jest.fn() },
) {
  // TODO: Centralize history object to guarantee that all test and application code is dealing with the same history object.
  const history = createMemoryHistory();
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => (
    <AppThemeProvider>
      <Router history={history}>
        <AuthContext.Provider value={[state, mockedDispatch]}>
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </AuthContext.Provider>
      </Router>
    </AppThemeProvider>
  );
  return {
    ...render(Component, { wrapper: Wrapper }),
    history,
  };
}

describe('Login page', () => {
  it('should suggest to login if there is no user', async () => {
    const mockedDispatch = jest.fn();
    const state = { user: null, loading: false, error: null };
    const { getByText, getByRole, getByTestId } = renderWithProviders(<Login />, { state, mockedDispatch });
    expect(getByText('Enter secret key to authorize')).toBeInTheDocument();
    const button = getByRole('button');
    expect(button).toBeDisabled();
    const input = getByTestId('secret-key-input');
    userEvent.paste(input, 'secret key');
    expect(input).toHaveValue('secret key');
    expect(button).toBeEnabled();
    userEvent.click(button);
    expect(mockedDispatch).toHaveBeenCalled();
  });

  it('should show loading', async () => {
    const state = { user: null, isLoading: true, error: null };
    const { getByText } = renderWithProviders(<Login />, { state });
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should show error', async () => {
    const error = 'Wrong secret key provided';
    const state = {
      user: null,
      isLoading: false,
      error,
    };
    const { getByText } = renderWithProviders(<Login />, { state });
    expect(getByText(error)).toBeInTheDocument();
  });

  it('should redirect if there is user', async () => {
    const state = {
      user: 'user',
      isLoading: false,
      error: null,
    };
    const { history } = renderWithProviders(<Login />, { state });
    expect(history.location.pathname).toBe(ROUTE_PATHS.MAIN);
  });
});
