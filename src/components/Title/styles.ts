import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    position: relative;

    &::before {
      content: '';
      width: 8px;
      height: 48px;
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      background: ${({ theme }) => theme.pink500};
    }
  }
`