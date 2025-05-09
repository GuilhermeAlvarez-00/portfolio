import styled from 'styled-components'

import { Section, Container as GlobalContainer } from './commonStyles'

export const Container = styled.main``

export const SectionAllProjects = styled(Section)`
  padding-block: 4rem;
`

export const ContainerAllProjects = styled(GlobalContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.375rem;
  flex-wrap: wrap;
`
