import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './globalStyled';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);