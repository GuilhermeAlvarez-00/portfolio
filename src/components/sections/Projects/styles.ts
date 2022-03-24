import styled from 'styled-components'

import { Section, Container } from '../../../styles/commonStyles'

export const SectionProjects = styled(Section)``

export const ContainerProjects = styled(Container)`
  width: min(51.5rem, 100%);
  text-align: center;

  h2 {
    font-size: 2rem;
  }

  p {
    color: ${({ theme }) => theme.white200};
    font-size: 1.25rem;
    margin-top: 1.125rem;

    span {
      color: ${({ theme }) => theme.pink500};
    }
  }
`

export const ProjectsBox = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.375rem;

  @media (max-width: 648px) {
    grid-template-columns: 1fr;
  }
`
