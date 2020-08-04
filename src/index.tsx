import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './globalStyled';
import Landing from './pages/Landing';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);