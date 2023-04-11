import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/index.jsx';
import './index.css';

// Creación de la raíz de renderizado 'root'
// Una raíz de renderizado es un objeto que React utiliza para vincular la aplicación de React a un nodo del DOM en la página web.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    {/* ,document.getElementById('root') */}
  </React.StrictMode>
);
