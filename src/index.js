import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle;


ReactDOM.render(
  <BrowserRouter>
    <globalStyles>
        <App />
    </globalStyles>
  </BrowserRouter>,
  document.getElementById('root'),
);
export default BrowserRouter;
