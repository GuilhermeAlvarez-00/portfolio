import { Form } from '../../Form'
import { Title } from '../../Title'
import { ContactContainer, Container } from './styles'

export function Contact() {
  return (
    <ContactContainer>
      <Container data-aos="fade-up">
        <Title text="Precisando dos meus serviços?" />

        <section>
          <p>
            Preencha o formulário que logo entrarei em contato ;)
          </p>

          <Form />
        </section>
      </Container>
    </ContactContainer>
  )
}