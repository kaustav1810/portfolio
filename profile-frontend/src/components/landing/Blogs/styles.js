import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
  margin-bottom:0;
  p{
      width:80%;
      line-height:1.6rem;
  }
  a{
      color:yellow;
  }

  div{
      display:flex;
      justify-content:space-between;
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
