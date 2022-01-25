
import Canvas from '../components/Canvas'
import { GlobalStyle } from './styles'
import { Container, Main, Title } from './styles'


export default function Home() {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <Canvas />
        </Title>
      </Main>
    </Container>
    </>
  )
}
