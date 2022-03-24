import styled from 'styled-components'

import { Section, Container } from '../../../styles/commonStyles'

export const SectionAbout = styled(Section)`
  background: ${({ theme }) => theme.black900};
`

export const ContainerAbout = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 868px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`

export const ContentImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: min(26rem, 100%);
  }

  @media (max-width: 868px) {
    img {
      width: min(22rem, 100%);
    }
  }
`

export const ContentText = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 600;

    span {
      color: ${({ theme }) => theme.pink500};
    }
  }

  div {
    margin-top: 1.125rem;

    p:not(:first-child) {
      margin-top: 2.5rem;
    }

    p {
      color: ${({ theme }) => theme.white200};
      font-size: 1.25rem;
      strong {
        color: ${({ theme }) => theme.pink500};
      }
    }

    p:last-child {
      color: ${({ theme }) => theme.white300};
      font-size: 1rem;
      font-style: italic;
    }

    @media (max-width: 868px) {
      p {
        font-size: 1.125rem;
      }
    }
  }

  @media (max-width: 868px) {
    margin-top: 2rem;
    text-align: center;
  }
`
