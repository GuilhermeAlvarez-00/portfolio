import { Container, Input, MessageInput } from './styles'

export function Form() {
  return (
    <Container>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="E-mail" />
      <MessageInput placeholder="Mensagem" />

      <button type="submit">Enviar</button>
    </Container>
  )
}