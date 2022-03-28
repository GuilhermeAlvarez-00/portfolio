import { RichText } from 'prismic-dom'

import { SectionTechnologies, ContainerTechnologies } from './styles'

interface TechnologiesProps {
  technologies: []
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <SectionTechnologies>
      <ContainerTechnologies>
        <h2>Tecnologias</h2>
        {
          <div
            dangerouslySetInnerHTML={{
              __html: RichText.asHtml(technologies),
            }}
          />
        }
      </ContainerTechnologies>
    </SectionTechnologies>
  )
}
