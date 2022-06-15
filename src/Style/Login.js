import styled from 'styled-components';

export const StyleLogin = styled.div`
  background-color: blueviolet;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  height: 94.7vh;

    h1{
      margin-bottom: 50px;
      font-size: 60px;
      
    }

    form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #9f8cf4;
      align-items: center;
      box-shadow: 6px 6px 10px 1px rgba(0,0,0,0.99);
      border: solid black 1px;
      border-radius: 30px;
      width: 450px;
      height: 450px;
    }
`;

export const StyleForm = styled.form`
  div{
    display: flex;

    label{
      input{ 
        display: inline;
        color: purple;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid purple;
        border-radius: 3px;
        display: block;
        background: #ffffff60;
        backdrop-filter: blur(2px);
      }
    }
    button{
      background-color: purple;
      color: #9f8cf4;
      font-size: 18px;
      border-radius: 10px;
    }
  }

`;
