import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './presentation/pages'
import './index.scss';
import './config/i18n.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
