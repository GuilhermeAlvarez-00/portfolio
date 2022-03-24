import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 8.625rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.black900};

  h2 {
    font-size: 1.25rem;
  }
`
