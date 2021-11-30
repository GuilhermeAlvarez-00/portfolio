import styled from "styled-components";

export const KnowledgeContainer = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.blue900};
`

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`

export const Technologies = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
`

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
    transition: 0.2s;
  }

  svg {
    width: 6rem;
    height: 6rem;
    transition: 0.2s;
  }

  @media (max-width: 750px) {
    svg {
      width: 5rem;
      height: 5rem;
    }
  }

  &:hover {
    p, svg {
      color: ${({ theme }) => theme.pink500};
    }
  }
`
