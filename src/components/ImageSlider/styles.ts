import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 68px;
    height: 68px;
    min-width: 28px;
    min-height: 28px;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.pink500};
    }
  }

  div {
    transform: scale(0.8);
    transition: 0.2s;
    opacity: 0;

    &.active {
      transform: scale(1);
      opacity: 1;
    }

    img {
      width: 45rem;
      height: 30rem;
      border-radius: 4px;

      @media (max-width: 780px) {
        width: 40rem;
        height: auto;
      }

      @media (max-width: 400px) {
        width: 30rem;
      }
    }
  }
`