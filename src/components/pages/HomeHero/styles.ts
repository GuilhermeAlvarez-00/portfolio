import styled from "styled-components";

export const HomeHeroContainer = styled.section`
  width: 100%;
  padding: 9rem 2rem;

  @media (max-width: 750px) {
    padding: 3rem 2rem;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 24rem;
    flex: 1;
  }

  @media (max-width: 750px) {
    flex-direction: column;

    img {
      margin: 6rem 0;
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
