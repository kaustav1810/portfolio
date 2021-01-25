import styled from "styled-components";

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt; 
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#e6e6e6")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
  .hire-me {
    color: ${({theme}) => (theme === 'light'? "#fff":"#000")};
    background: ${({ theme }) => (theme === "light" ? "#FF009A" : "#FFE702")};
    margin-right: 20px;
    border: 3px solid
      ${({ theme }) => (theme === "light" ? "#FF009A" : "#FFE702")};
    font-weight: bold;
  }
  .view-cv {
    background: transparent;
    color: ${({ theme }) => (theme === "light" ? "#FF009A" : "#FFE702")};
    border: 3px solid #005554;
    font-weight: bold;
  }
  .social {
    margin-top: 50px;
  }
  .social a img {
    margin-right: 15px;
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
    width: 500px;
    height:550px;
  }
`;
