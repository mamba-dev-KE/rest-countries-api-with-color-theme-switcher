import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorSchemeProvider, SearchProvider } from 'context';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorSchemeProvider>
    <SearchProvider>
        <App />
    </SearchProvider>
    </ColorSchemeProvider>
  </React.StrictMode>,
);
