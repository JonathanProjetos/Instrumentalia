import styled from 'styled-components';
// import images from '../Style/images.jpeg';

export const StyleBackground = styled.div`
  background-image: url();
`;

export const StyleAlbum = styled.section`
  display: flex;
  justify-content: center;
  div{
    p{
      margin-top: 10px;
      font-size: 20px;
      text-decoration: wavy;
    }
    div{
      img{
        width: 500px;
        height: 500px;
        margin-right: 250px;
      }
    }
  }

`;

export const StyleList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 220px;
  width: 700px;
  border-radius: 30px;
  background-color: #d6c1ff;
  
  div{
    p{
      margin-top: 20px;
    }
  }
`;
