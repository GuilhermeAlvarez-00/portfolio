import { useState } from 'react'
import { sendContactMail } from '../../services/sendMail'
import toast from 'react-hot-toast'

import { Container, Input, MessageInput } from './styles'
import { theme } from '../../styles/theme'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    if(!name || !email || !message) {
      toast('Preencha todos os campos', {
        style: {
          background: '#ee5253',
          color: theme.white
        }
      })
      return
    }

    try {
      setLoading(true)
      await sendContactMail(name, email, message)
      setName('')
      setEmail('')
      setMessage('')

      toast('Mensagem enviada com sucesso', {
        style: {
          background: '#10ac84',
          color: theme.white
        }
      })
    } catch(error) {
      console.log(error)
      toast('Houve um erro ao enviar a mensagem, tente novamente.', {
        style: {
          background: '#ee5253',
          color: theme.white
        }
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Nome" 
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input 
        type="email" 
        placeholder="E-mail" 
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <MessageInput 
        placeholder="Mensagem"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />

      <button disabled={loading} type="submit">Enviar</button>
    </Container>
  )
}