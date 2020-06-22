import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeFirebase } from './utils/firebase';
import { initializeNotifications, initializeResizeHandler } from './utils/functions';

console.log('----- KLEVCSOOCHAT ------');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
initializeFirebase();
initializeNotifications();
initializeResizeHandler();
