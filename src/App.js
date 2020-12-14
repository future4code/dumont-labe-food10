import React from 'react'

import { ThemeProvider } from '@material-ui/core';
import theme from './constants/theme'
import Router from './routes/Router';
import GlobalState from './context/GlobalState';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;