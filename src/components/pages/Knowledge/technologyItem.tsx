import { ReactNode } from 'react'

import { TechnologyContainer } from './styles'

interface TechnologyItemProps {
  text: string;
  icon: ReactNode;
}

export function TechnologyItem({ text, icon }: TechnologyItemProps) {
  return (
    <TechnologyContainer>
      <p>{text}</p>
      {icon}
    </TechnologyContainer>
  )
}