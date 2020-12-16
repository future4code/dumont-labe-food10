import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router'
import GlobalStyled from './context/globalStyled'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled/>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

