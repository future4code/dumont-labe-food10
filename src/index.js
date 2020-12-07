import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './components/rotas.js'
import GlobalStyled from './components/globalStyled'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled/>
    <Rotas/>
  </React.StrictMode>,
  document.getElementById('root')
);

