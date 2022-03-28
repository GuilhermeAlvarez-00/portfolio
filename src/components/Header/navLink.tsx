import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

interface NavLinkProps {
  text: string
  path: string
  includes?: boolean
}

export function NavLink({ text, path, includes = false }: NavLinkProps) {
  const router = useRouter()

  function verifyIsActive() {
    if (includes) {
      return router.pathname.includes(path)
    }

    return path === router.pathname
  }

  const isNavLinkActive = verifyIsActive()

  return (
    <Link href={path}>
      <a className={isNavLinkActive ? 'active' : ''}>{text}</a>
    </Link>
  )
}
