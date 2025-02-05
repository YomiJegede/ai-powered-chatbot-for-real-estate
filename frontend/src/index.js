// In index.js, you will wrap the entire app in the AuthProvider to provide authentication state throughout the app.

// This ensures that you can access the authentication state (user) globally within the app.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

