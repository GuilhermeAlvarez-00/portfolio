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
          <KnowledgesCard data-aos="fade-up">
            <FaHtml5 />
            <p>HTML</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <FaCss3 />
            <p>CSS</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <FaSass />
            <p>SASS</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <FaJs />
            <p>JavaScript</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <SiTypescript />
            <p>TypeScript</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <FaReact />
            <p>React.js</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <SiNextdotjs />
            <p>Next.js</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <FaNodeJs />
            <p>Node.js</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <SiStyledcomponents />
            <p>Styled Components</p>
          </KnowledgesCard>

          <KnowledgesCard data-aos="fade-up">
            <FaGitAlt />
            <p>Git</p>
          </KnowledgesCard>
        </KnowledgesBox>
      </ContainerKnowledges>
    </SectionKnowledges>
  )
}
