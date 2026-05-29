import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global error logger for debugging
window.addEventListener('error', (event) => {
  const errorInfo = {
    type: 'error',
    message: event.message,
    source: event.filename,
    line: event.lineno,
    col: event.colno,
    error: event.error ? {
      name: event.error.name,
      message: event.error.message,
      stack: event.error.stack
    } : null
  };
  
  // Create onscreen banner
  const msg = event.error ? event.error.stack : event.message;
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100%';
  div.style.background = '#ff0033';
  div.style.color = 'white';
  div.style.padding = '15px';
  div.style.zIndex = '999999';
  div.style.fontFamily = 'monospace';
  div.style.fontSize = '12px';
  div.style.whiteSpace = 'pre-wrap';
  div.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
  div.innerText = 'Runtime Error Caught:\n' + msg;
  document.body.appendChild(div);

  fetch('/log-error', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(errorInfo, null, 2)
  }).catch(err => console.error('Failed to post error:', err));
});

window.addEventListener('unhandledrejection', (event) => {
  const errorInfo = {
    type: 'unhandledrejection',
    message: 'Unhandled Promise Rejection',
    reason: event.reason ? {
      name: event.reason.name,
      message: event.reason.message,
      stack: event.reason.stack
    } : event.reason
  };

  const msg = event.reason && event.reason.stack ? event.reason.stack : String(event.reason);
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.left = '0';
  div.style.width = '100%';
  div.style.background = '#ff6600';
  div.style.color = 'white';
  div.style.padding = '15px';
  div.style.zIndex = '999999';
  div.style.fontFamily = 'monospace';
  div.style.fontSize = '12px';
  div.style.whiteSpace = 'pre-wrap';
  div.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
  div.innerText = 'Unhandled Promise Rejection:\n' + msg;
  document.body.appendChild(div);

  fetch('/log-error', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(errorInfo, null, 2)
  }).catch(err => console.error('Failed to post rejection:', err));
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
