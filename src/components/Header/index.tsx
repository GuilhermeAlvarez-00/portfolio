import { NavLink } from './navLink'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <NavLink text="Início" path="/" />
          <NavLink text="Projetos" path="/projetos" includes />
        </ul>
      </nav>
    </Container>
  )
}