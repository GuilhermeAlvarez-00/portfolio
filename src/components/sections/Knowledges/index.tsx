import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa'
import { SiTypescript, SiStyledcomponents, SiNextdotjs } from 'react-icons/si'

import {
  SectionKnowledges,
  ContainerKnowledges,
  KnowledgesBox,
  KnowledgesCard,
} from './styles'

export function Knowledges() {
  return (
    <SectionKnowledges>
      <ContainerKnowledges>
        <h2>Conhecimentos</h2>

        <KnowledgesBox>
          <KnowledgesCard>
            <FaHtml5 />
            <p>HTML</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <FaCss3 />
            <p>CSS</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <FaSass />
            <p>SASS</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <FaJs />
            <p>JavaScript</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <SiTypescript />
            <p>TypeScript</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <FaReact />
            <p>React.js</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <SiNextdotjs />
            <p>Next.js</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <FaNodeJs />
            <p>Node.js</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <SiStyledcomponents />
            <p>Styled Components</p>
          </KnowledgesCard>

          <KnowledgesCard>
            <FaGitAlt />
            <p>Git</p>
          </KnowledgesCard>
        </KnowledgesBox>
      </ContainerKnowledges>
    </SectionKnowledges>
  )
}
