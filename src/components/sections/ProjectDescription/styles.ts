import styled from 'styled-components'

import { Section, Container } from '../../../styles/commonStyles'

export const SectionProjectDescription = styled(Section)``

export const ContainerProjectDescription = styled(Container)``

export const CardProjectDetails = styled.div`
  width: min(46.875rem, 100%);
  padding: 3.875rem;
  background: ${({ theme }) => theme.black900};
  margin: 0 auto;
  border-radius: 3.125rem;

  img {
    width: min(36.375rem, 100%);
    margin-top: -10rem;
    border-radius: 0.3125rem;
  }
`

export const TextContent = styled.div`
  margin-top: 4rem;

  h2 {
    color: ${({ theme }) => theme.pink500};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.white200};
    margin-top: 1.125rem;
  }

  div {
    margin-top: 2.375rem;
    display: flex;
    gap: 1.25rem;
  }
`
