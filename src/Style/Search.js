import styled from 'styled-components';

export const StyleSearch = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
`;

export const StyleSearch2 = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div{
    h1{
      margin-top: 15px;
      margin-bottom: 25px;
    }
  }
`;

export const StyleSearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #d6c1ff;
  width: 235px;
  height: 235px;
  margin: 10px;
  //border: 1px solid black;
  border-radius: 15px;
  //box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.99);
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    h1{
      margin-bottom: 5px;
    }
    img{
      margin-bottom: 5px;
    }
    p{
      text-align: center;
    }
  }
`;

export const StyleMenssager = styled.p`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const StyleDivInput = styled.div`
  display :flex;
  input{
    display: inline;
    color: purple;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid purple;
    border-radius: 3px;
    display: block;
    background: #ffffff40;
    backdrop-filter: blur(2px);
  }

  button{
    background-color: purple;
    color: #9f8cf4;
    font-size: 18px;
    border-radius: 10px;
  }
`;
