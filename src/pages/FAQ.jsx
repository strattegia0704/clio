import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

import '../styles/index.css'

const FAQ = () => {
  return (
    <>
        <Header />
        <Container>
          <div>
            <h2>Perguntas frequentes - FAQ</h2>
            <hr />
            <h3>Por que "Clio"?</h3>
            <p>
            O nome vem de uma figura da mitologia grega que foi uma das nove musas filhas de Zeus e e Mnemósine, sendo Clio a da história e criatividade. Ela é um símbolo importante para os historiadores, escritores e também na própria mitologia. Clio e suas outras 8 irmãs eram invocadas pelos artistas, escritores e até mesmo historiadores como fonte de inspiração para abençoá-los com a arte de escrever bem.
            </p>
            <h4>Por que usar a Clio e não um mecanismo de pesquisa?</h4>
            <p>
            Clio não tem o objetivo de substituir um mecanismo de busca! A plataforma Clio tem como objetivo deixar cada vez mais acessivel os livros e obras para o publico sem que o consumidor precise pensar muito no que buscar em um navegador.
            </p>
            <h3>Para onde minhas informações vão?</h3>
            <p>
            Não se preocupe, suas informações estão a salvo! Todo dado pessoal que é colocado ou requisitado na plataforma está a livre de riscos para o consumidor e não são utilizados contra ou de qualquer forme que o prejudique. Para mais informações consulte a nossa <Link to='/privacidade'>política de privacidade</Link>.
            </p>
            <h3>A Clio receberá atualizações e manutenções?</h3>
            <p>
            Sim! Clio continurá evoluindo e recebendo a devida manutenção, para que seja cada vez mais agradavél e facil de se usar, vale ressaltar que e uma das politicas internas de nossa empresa que as nossas plataformas tenham o melhor desempenho e acessibilidade em todos os dispositivos.
            </p>
          </div>
        </Container>
        <Footer />
    </>
  )
}

export default FAQ