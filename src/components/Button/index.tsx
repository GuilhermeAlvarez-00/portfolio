import { ReactNode } from 'react'
import Link from 'next/link'

import { ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactNode
  path: string
}

export function Button({ children, path }: ButtonProps) {
  return (
    <ButtonContainer>
      <Link href={`/${path}`}>
        <a>{children}</a>
      </Link>
    </ButtonContainer>
  )
}
