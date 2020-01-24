import React from 'react';
import { useAuth } from '../Auth/useAuth';

export function Logout() {
  const [state, { logout }] = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Log Out</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
