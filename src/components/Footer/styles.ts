import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  border-top: 1px solid ${({ theme }) => theme.gray700};
`

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
      font-size: 1.5rem;
    }

  section {
    svg {
      width: 2rem;
      height: 2rem;
      transition: 0.2s;
      cursor: pointer;

      &:nth-child(1) {
        margin-right: 1rem;
      }

      &:hover {
        color: ${({ theme }) => theme.pink500};
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.white};
    border: 0;
    background: transparent;
    font-size: 1.2rem;
    transition: 0.2s;

    svg {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      color: ${({ theme }) => theme.pink500};
    }
  }

  @media (max-width: 750px) {
    p {
      display: none;
    }
  }
`