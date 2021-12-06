import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaNodeJs, FaSass } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiNextdotjs, SiTypescript, SiStyledcomponents, SiMongodb } from 'react-icons/si'

import { Title } from "../../Title";
import { TechnologyItem } from "./technologyItem";

import { Container, KnowledgeContainer, Technologies } from "./styles";

export function Knowledge() {
  return (
    <KnowledgeContainer>
      <Container data-aos="fade-up">
        <Title text="Conhecimentos" />

        <Technologies>
          <TechnologyItem
            text="HTML"
            icon={<AiFillHtml5 />}
          />
          <TechnologyItem
            text="CSS"
            icon={<FaCss3Alt />}
          />
          <TechnologyItem
            text="SASS"
            icon={<FaSass />}
          />
          <TechnologyItem
            text="Javascript"
            icon={<IoLogoJavascript />}
          />
          <TechnologyItem
            text="Typescript"
            icon={<SiTypescript />}
          />
          <TechnologyItem
            text="Styled-components"
            icon={<SiStyledcomponents />}
          />
          <TechnologyItem
            text="ReactJS"
            icon={<FaReact />}
          />
          <TechnologyItem
            text="NextJS"
            icon={<SiNextdotjs />}
          />
          <TechnologyItem
            text="NodeJS"
            icon={<FaNodeJs />}
          />
          <TechnologyItem
            text="MongoDB"
            icon={<SiMongodb />}
          />
        </Technologies>
      </Container>
    </KnowledgeContainer>
  )
}