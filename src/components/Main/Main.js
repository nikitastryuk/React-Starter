import React from 'react';
import { Redirect } from 'react-router-dom';

export function Main() {
  if (!localStorage.getItem('user')) {
    alert('You must login to access the app');
    return <Redirect to="/login" />;
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>Main</h1>
    </div>
  );
}
