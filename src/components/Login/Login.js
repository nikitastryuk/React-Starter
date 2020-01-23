import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { ROUTE_PATHS } from '../Routes/routePaths';

export function Login() {
  const [user, updateUser] = useState('');
  const history = useHistory();

  function handleLogin() {
    localStorage.setItem('user', user);
    history.push(ROUTE_PATHS.APP_MAIN);
  }

  if (localStorage.getItem('user')) {
    alert(
      "You're already authenticated in localStorage and being redirected into the app.",
    );
    return <Redirect to={ROUTE_PATHS.APP_MAIN} />;
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Log In</h1>
      <div>
        <input value={user} onChange={e => updateUser(e.target.value)} />
        <button disabled={!user} onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}
