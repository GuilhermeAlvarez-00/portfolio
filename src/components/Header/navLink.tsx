import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

import { NavLinkContainer } from './styles'

interface NavLinkProps {
  text: string;
  path: string;
  includes?: boolean;
}

export function NavLink({ 
  text,
  path,
  includes = false
}: NavLinkProps) {
  const router = useRouter()

  function verifyIsActive() {
    if(includes) {
      return router.pathname.includes(path)
    }

    return path === router.pathname
  }

  const isNavLinkActive = verifyIsActive()

  return (
    <NavLinkContainer isActive={isNavLinkActive}>  
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </NavLinkContainer>
  )
}