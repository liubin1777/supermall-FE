import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import router from './router';

/// #if PRODUCTION_ENV
console.log('[SuperMall] PRODUCTION_ENV = ', PRODUCTION_ENV);
/// #else
console.log('[SuperMall] PRODUCTION_ENV = ', PRODUCTION_ENV);
/// #endif

ReactDOM.render(
  <React.StrictMode>{router}</React.StrictMode>,
  document.getElementById('root')
);
