import React from 'react';
import * as ReactDOM from 'react-dom/';
import './index.css';
import router from './router';

ReactDOM.render(
  <React.StrictMode>{router}</React.StrictMode>,
  document.getElementById('root')
);
