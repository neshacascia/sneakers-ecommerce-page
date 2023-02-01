import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './context/Context';
import CartProvider from './context/CartProvider';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </CartProvider>
);
