import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 4.75rem;
  background: ${({ theme }) => theme.black800};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`
export const Navbar = styled.nav`
  width: min(61.75rem, 100%);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: flex;
    gap: 1.125rem;

    li a {
      display: block;
      font-size: 1.125rem;
      line-height: 4.75rem;
      position: relative;
      color: ${({ theme }) => theme.white200};
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.white};
      }

      &.active {
        font-weight: 700;
        color: ${({ theme }) => theme.white};
      }

      &.active::after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 1px;
        background: ${({ theme }) => theme.pink500};
        border-radius: 5px 5px 0 0;
      }
    }
  }
`
