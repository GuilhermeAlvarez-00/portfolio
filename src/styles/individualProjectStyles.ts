import { darken } from "polished";
import styled from "styled-components";

export const IndividualProjectContainer = styled.main`
  width: 100%;
  padding: 6rem 2rem;
`

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const AboutProject = styled.section`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    position: relative;

    &::before {
      content: '';
      width: 8px;
      height: 28px;
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      background: ${({ theme }) => theme.pink500};
    }
  }

  > div {
    width: 100%;
    padding: 2rem;
    background: ${({ theme }) => theme.blue900};
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 5px;

    img {
      width: 24rem;
      border-radius: 5px;
    }

    p {
      font-size: 1.5rem;
    }

    button {
      &:nth-child(2) {
        border: 2px solid ${({ theme }) => theme.pink500};
        background: transparent;
      }

      width: 100%;
      border: none;
      border-radius: 0.2rem;
      background: ${({ theme }) => theme.pink500};
      font-weight: 500;
      color: ${({ theme }) => theme.white};
      display: flex;
      align-self: center;
      justify-content: center;
      padding: 1rem 2rem;
      margin-top: 2rem;
      transition: 0.2s;
      font-size: 1.2rem;

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.pink500)};
      }
    }

    @media (max-width: 750px) {
      flex-direction: column;
    }
  }
`