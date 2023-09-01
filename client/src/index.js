import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css'
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserProvider>
    <App />
  </UserProvider>
  </BrowserRouter>
);
