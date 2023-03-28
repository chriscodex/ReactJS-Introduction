import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Creación de la raíz de renderizado 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />,
    document.getElementById('root')
  </React.StrictMode>
);
