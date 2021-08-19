import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
 /* <React.StrictMode>
    <App />
  </React.StrictMode>,*/
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//serviceWorker.unregister();

