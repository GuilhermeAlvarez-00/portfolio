import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiNextdotjs } from 'react-icons/si'

import { Title } from "../../Title";
import { TechnologyItem } from "./technologyItem";

import { Container, KnowledgeContainer, Technologies } from "./styles";

export function Knowledge() {
  return (
    <KnowledgeContainer>
      <Container>
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
            text="Javascript"
            icon={<IoLogoJavascript />}
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
        </Technologies>
      </Container>
    </KnowledgeContainer>
  )
}