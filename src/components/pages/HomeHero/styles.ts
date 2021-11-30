import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 8rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  overflow: hidden;

  img {
    width: 24rem;
    flex: 1;
  }

  &::before {
    content: 'FRONT';
    white-space: pre-wrap;
    position: fixed;
    top: -42px;
    left: -30px;
    font-size: 24rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.01);
    letter-spacing: -24px;
  }

  &::after {
    content: 'END';
    white-space: pre-wrap;
    position: fixed;
    right: -30px;
    bottom: -138px;
    font-size: 24rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.01);
    letter-spacing: -28px;
  }

  @media (max-width: 1000px) {
    &::before,
    &::after {
      content: 'FRONT';
      font-size: 22rem;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 4rem 2rem;

    img {
      margin-top: 6rem;
    }

    &::before,
    &::after {
      content: '';
    }
  }
`

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex: 4;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    span {
      font-size: 5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.pink500};
    }
    
    font-weight: 700;
    font-size: 3rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.5rem;

    span {
      color: ${({ theme }) => theme.pink500};
    }
  }

  @media (max-width: 750px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 550px) {
    h1 {
      span {
        font-size: 4rem;
      }

      font-size: 2rem;
    }
  }
`
