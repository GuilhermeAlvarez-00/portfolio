import Link from 'next/link'

import { Container } from './styles'

interface ButtonProps {
  text: string
  outline?: boolean
  path?: string
  onClick?: () => void
  otherWindow?: boolean
}

export function Button({
  text,
  path = '#',
  outline = false,
  otherWindow = false,
  onClick,
}: ButtonProps) {
  return (
    <Container outline={outline} onClick={onClick}>
      <Link href={path}>
        <a target={otherWindow ? '_blank' : '_self'}>{text}</a>
      </Link>
    </Container>
  )
}
