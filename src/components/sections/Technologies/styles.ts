import styled from 'styled-components'

import { Section, Container } from '../../../styles/commonStyles'

export const SectionTechnologies = styled(Section)`
  padding-top: 0;
`

export const ContainerTechnologies = styled(Container)``

export const List = styled.ul`
  padding-left: 2rem;
  list-style: disc;
  color: ${({ theme }) => theme.pink500};

  li {
    margin-top: 1.125rem;
  }
`
