import Link from 'next/link'
import { Form } from '../../Form'
import { Title } from '../../Title'
import { MdEmail } from 'react-icons/md'

import { ContactContainer, Container } from './styles'

export function Contact() {
  return (
    <ContactContainer>
      <Container data-aos="fade-up">
        <Title text="Precisando dos meus serviços?" />

        <section>
          <p>
            Clique na imagem para me mandar um email que em breve entrarei em contato ;)
          </p>

          <Link href="mailto:gui06barboza@gmail.com" >
            <a>
              <MdEmail />
              gui06barboza@gmail.com
            </a>
          </Link>
        </section>
      </Container>
    </ContactContainer>
  )
}