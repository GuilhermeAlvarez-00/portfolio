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

    @media (max-width: 780px) {
      flex-direction: column;

      p {
        font-size: 2rem;
      }
    }
  }
`
