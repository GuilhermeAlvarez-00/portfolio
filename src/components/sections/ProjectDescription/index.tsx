import { Button } from '../../Button'
import {
  SectionProjectDescription,
  ContainerProjectDescription,
  CardProjectDetails,
  TextContent,
} from './styles'

export function ProjectDescription() {
  function handleRedirect(url: string) {
    window.open(url)
  }

  return (
    <SectionProjectDescription>
      <ContainerProjectDescription>
        <CardProjectDetails>
          <img
            src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="imagem"
          />

          <TextContent>
            <h2>OriginSix</h2>
            <p>
              Projeto que desenvolvi durante a next level week. Uma landing page
              para um salão de beleza, nela foi usado html css e javascript, e
              no javascript usei algumas ferramentas como o Swiper para fazer
              carrossel e o ScrolReveal para animações de scroll.
            </p>

            <div>
              <Button text="Projeto online" />
              <Button
                onClick={() =>
                  handleRedirect('https://github.com/GuilhermeAlvarez-00')
                }
                outline
                text="Repositório"
              />
            </div>
          </TextContent>
        </CardProjectDetails>
      </ContainerProjectDescription>
    </SectionProjectDescription>
  )
}
