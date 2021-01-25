import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
  margin-bottom:0;
  p{
      width:80%;
      line-height:1.6rem;

      a{
      color:${({ theme }) => (theme === 'light' ? '#FF009A' : '#FFE702')};
    }
  }

  div{
      display:flex;
      justify-content:space-between;

      @media (max-width:510px){
        flex-direction:column;
    }

  }

  
`;

export const Thumbnail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    max-width: 300px;
    max-height: 400px;
  }
`;
