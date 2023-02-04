import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ColorSchemeProvider } from './context/context';
import App from './App';
import './index.css';

const root = document.querySelector('#id') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ColorSchemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorSchemeProvider>
  </React.StrictMode>,
);
