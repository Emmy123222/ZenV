import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import WebApp from '@twa-dev/sdk';
import App from './App';
import './index.css';

// Initialize Telegram Web App if we're in Telegram
if (WebApp.initData) {
  WebApp.ready();
  WebApp.setHeaderColor('#040333');
  WebApp.setBackgroundColor('#040333');
  
  // Enable closing confirmation
  WebApp.enableClosingConfirmation();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);