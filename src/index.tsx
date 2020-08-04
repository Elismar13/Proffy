import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './globalStyled';
import Main from './pages/Main';

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);