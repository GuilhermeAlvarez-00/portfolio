import styled from 'styled-components'

export const SectionHome = styled.section`
  width: 100%;
  padding: 10rem 0;
`

export const ContainerHome = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ContentText = styled.div`
  h1 {
    span {
      color: ${({ theme }) => theme.pink500};
    }
  }

  & > p {
    font-size: 1.25rem;
    margin-top: 1.125rem;
  }
`

export const SocialNetworks = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  gap: 1.125rem;

  & > p {
    font-size: 1.125rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.125rem;

    a {
      font-size: 1.75rem;
      line-height: 0;
    }
  }
`

export const ContentImage = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
    max-width: 23.75rem;
  }
`
