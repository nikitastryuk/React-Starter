import React from 'react';
import { useHistory } from 'react-router-dom';

export function Logout() {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem('user');
    history.push('/login');
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Log Out</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
