import { darken } from 'polished'
import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 15rem;
  height: 4rem;
  border: none;
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.pink500};
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  font-weight: normal;
  font-size: 1.125rem;

  &:hover {
    background: ${({ theme }) => darken(0.05, theme.pink500)};
  }
`
