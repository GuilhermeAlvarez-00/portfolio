import styled from 'styled-components'

export const Container = styled.button`
  width: 8.625rem;
  height: 2.375rem;
  border-radius: 0.31rem;
  border: 0;
  background: ${({ theme }) => theme.pink500};
  margin-top: 1.125rem;

  a {
    font-size: 1.125rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.white};
    font-weight: 400;
  }
`
