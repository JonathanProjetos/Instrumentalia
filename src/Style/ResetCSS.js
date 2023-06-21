import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background: var(--background);
  }
  
  body html #root {
    height: 100%;
    width: 100%;
    border: 12px solid red;
  }

  :root {
    --background: ${({ theme }) => theme.background};
    --main: ${({ theme }) => theme.main};
    --headline: ${({ theme }) => theme.headline};
    --paragraph: ${({ theme }) => theme.paragraph};
    /* --buttonBorder: ${({ theme }) => theme.buttonBorder}; */
    --buttonText: ${({ theme }) => theme.buttonText};
    --buttonBackground: ${({ theme }) => theme.buttonBackground};
    --buttonBackgroundDisabled: ${({ theme }) => theme.buttonBackgroundDisabled};
    --secundary: ${({ theme }) => theme.secundary};
    /* --secundaryHover: ${({ theme }) => theme.secundaryHover}; */
    --tertiary: ${({ theme }) => theme.tertiary};
    --highligth: ${({ theme }) => theme.extra};
    /* --extraHover: ${({ theme }) => theme.extraHover}; */
  }
`;
