import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { AuthContext } from 'app/Auth/AuthProvider';
import { ROUTE_PATHS } from 'app/routes/routePaths';

import { Login } from 'pages/Login/Login';

describe('Login page', () => {
  it('should suggest to login if there is no user', async () => {
    const initialState = { user: null, loading: false, error: null };
    const mockedDispatch = jest.fn();
    const { getByText, getByRole, getByTestId } = render(
      <AuthContext.Provider value={[initialState, mockedDispatch]}>
        <Login />
      </AuthContext.Provider>,
    );
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
    const initialState = { user: null, isLoading: true, error: null };
    const { getByText } = render(
      <AuthContext.Provider value={[initialState, jest.fn()]}>
        <Login />
      </AuthContext.Provider>,
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should show error', async () => {
    const error = 'Wrong secret key provided';
    const initialState = {
      user: null,
      isLoading: false,
      error,
    };
    const { getByText } = render(
      <AuthContext.Provider value={[initialState, jest.fn()]}>
        <Login />
      </AuthContext.Provider>,
    );
    expect(getByText(error)).toBeInTheDocument();
  });

  it('should redirect if there is user', async () => {
    const history = createMemoryHistory();
    const initialState = {
      user: 'user',
      isLoading: false,
      error: null,
    };
    render(
      <Router history={history}>
        <AuthContext.Provider value={[initialState, jest.fn()]}>
          <Login />
        </AuthContext.Provider>
      </Router>,
    );
    expect(history.location.pathname).toBe(ROUTE_PATHS.MAIN);
  });
});
