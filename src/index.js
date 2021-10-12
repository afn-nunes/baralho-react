import React from 'react';
import ReactDOM from 'react-dom';
import AppHome from './pages/AppHome';
import { GlobalStyle } from './components';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <AppHome />
  </React.StrictMode>,
  document.getElementById('root')
);

