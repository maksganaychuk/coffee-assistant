import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Router } from '@router';
import { configureStore } from '@store';
import { ResetStyles, theme } from '@styles';

import './styles/fonts.css';

export const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
