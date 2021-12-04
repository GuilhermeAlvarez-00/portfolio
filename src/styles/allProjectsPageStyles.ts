import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 4rem);

  > section {
    width: 100%;
    max-width: 1120px;
    padding: 6rem 2rem 24rem 2rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
      padding-bottom: 6rem;
    }
  }
`