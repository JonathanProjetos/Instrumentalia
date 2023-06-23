import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    overflow: 'hidden'!important;
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
    --buttonText: ${({ theme }) => theme.buttonText};
    --buttonBackground: ${({ theme }) => theme.buttonBackground};
    --buttonBackgroundDisabled: ${({ theme }) => theme.buttonBackgroundDisabled};
    --secundary: ${({ theme }) => theme.secundary};
    --tertiary: ${({ theme }) => theme.tertiary};
    --highligth: ${({ theme }) => theme.extra};
    --card: ${({ theme }) => theme.card};
  }
`;
