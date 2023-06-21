import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Style/Theme';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
   <ThemeProvider theme={ Theme }>
      <Provider>
          <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
export default BrowserRouter;
