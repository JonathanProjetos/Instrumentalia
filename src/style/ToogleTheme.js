import styled from 'styled-components';

export const ThemeMobile = styled.button`
    border: 5px solid var(--paragraph);
    /* margin-top: 10px; */
    margin-left: 20px;
    /* margin-right: 0px; */
    border-radius: 100%;
    height: 50px;
    /* position: fixed; */
    width: 50px;
    background: var(--background);
    color: var(--buttonText);
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 4px; */
    #modeIcon {
      height: 25px;
      width: 25px;
    }
    #modeIconDark {
      height: 25px;
      width: 25px;
      color: #121212;
    }
    /* &:hover {
      cursor: pointer;
      background: var(--highligth);
    } */
`;

export const ThemeDesktop = styled.button`
    border: 5px solid var(--paragraph);
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 30px;
    border-radius: 100%;
    height: 50px;
    /* position: fixed; */
    width: 50px;
    background: var(--background);
    color: var(--buttonText);
    display: flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 4px; */
    #modeIcon {
      height: 25px;
      width: 25px;
    }
    #modeIconDark {
      height: 25px;
      width: 25px;
      color: #121212;
    }
    /* &:hover {
      cursor: pointer;
      background: var(--highligth);
    } */
`;
