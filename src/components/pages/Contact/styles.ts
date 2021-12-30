import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  padding: 6rem 2rem;

  @media (max-width: 780px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  section {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2.5rem;

    p {
      font-size: 2.5rem;
      font-weight: 500;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    a > svg{
      font-size: 24rem;
      animation-name: email;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      transition: 0.2s;
    }

    a svg:hover {
      color: ${({theme}) => theme.pink500};
    }

    @keyframes email {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.08);
      }

      100% {
        transform: scale(1);
      }
    }

    @media (max-width: 780px) {
      flex-direction: column;

      p {
        font-size: 2rem;
      }

      a > svg {
        font-size: 18rem;
      }
    }
  }
`
