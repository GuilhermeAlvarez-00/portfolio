import styled, { css } from "styled-components";

interface NavLinkContainerProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.gray700};

  nav {
    max-width: 1120px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  }
`

export const NavLinkContainer = styled.li<NavLinkContainerProps>`
  a {
      font-size: 1.2rem;
      font-weight: 400;
      color: ${props => props.isActive ? props.theme.white : props.theme.gray600};
      position: relative;
      line-height: 4rem;
      display: block;
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.white};
      }

      ${props => props.isActive ? css`
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 1px;
          width: 100%;
          height: 2px;
          background: ${({ theme }) => theme.pink500};
        }
      ` : null}
    }
`
