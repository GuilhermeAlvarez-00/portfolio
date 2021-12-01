import styled from "styled-components";

export const AboutMeContainer = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.blue900};

  @media (max-width: 750px) {
    padding: 6rem 2rem;
  }
`

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const CodeDescription = styled.div`
  width: 80%;
  color: ${({ theme }) => theme.pink500};
  font-size: 1.5rem;
  margin-top: 2rem;

  span, div {
    color: ${({ theme }) => theme.white};
  }

  div {
    padding-left: 2rem;
    margin: 1rem 0;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`