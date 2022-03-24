import styled from 'styled-components'

import { Section, Container } from '../../../styles/commonStyles'

export const SectionKnowledges = styled(Section)`
  background-color: ${({ theme }) => theme.black900};
`

export const ContainerKnowledges = styled(Container)`
  background-color: ${({ theme }) => theme.black800};
  border-radius: 2rem;
  padding: 3.25rem 5.25rem;

  h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 370px) {
    h2 {
      font-size: 1.625rem;
    }
  }
`

export const KnowledgesBox = styled.div`
  margin-top: 5.5rem;
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
`

export const KnowledgesCard = styled.div`
  width: min(9.25rem, 100%);
  background-color: ${({ theme }) => theme.black900};
  border-radius: 0.3rem;
  text-align: center;
  padding: 2.125rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    width: 3.375rem;
    height: 3.375rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 600;
    margin-top: 0.625rem;
  }

  @media (max-width: 370px) {
    width: 100%;
  }
`
