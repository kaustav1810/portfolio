
import styled from 'styled-components';

export const Error = styled.span`
  color: #ff4136;
`;

export const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
  }

  .submit-btn{
    color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
    background: ${({ theme }) => (theme === "light" ? "#FF009A" : "#FFE702")};
    margin-right: 20px;
    border: 3px solid ${({ theme }) => (theme === "light" ? "#FF009A" : "#FFE702")};
    font-weight: bold;
  }
  
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
  
`;