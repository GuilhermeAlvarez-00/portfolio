import Link from 'next/link'

import { Container, Navbar } from './styles'

export function Header() {
  return (
    <Container>
      <Navbar>
        <ul>
          <li>
            <Link href="/">
              <a className="active">Início</a>
            </Link>
          </li>

          <li>
            <Link href="/projetos">
              <a>Projetos</a>
            </Link>
          </li>
        </ul>
      </Navbar>
    </Container>
  )
}
