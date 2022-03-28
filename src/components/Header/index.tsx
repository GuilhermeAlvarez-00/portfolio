import Link from 'next/link'
import { NavLink } from './navLink'

import { Container, Navbar } from './styles'

export function Header() {
  return (
    <Container>
      <Navbar>
        <ul>
          <li>
            <NavLink path="/" text="Início" />
          </li>

          <li>
            <NavLink path="/projetos" text="Projetos" includes />
          </li>
        </ul>
      </Navbar>
    </Container>
  )
}
