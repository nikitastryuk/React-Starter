import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'app/App';
import { AppProviders } from 'app/AppProviders';

import 'i18n/i18n';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);
