import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'

import '../styles/style.css'

const Sobre = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h2>Boas vindas à Clio!</h2>
          <hr />
          <h3 className='sobre-sub'>Quem nós somos?</h3>
          <p className='sobre'>
            A Clio é um acervo digital de livros nacionais, onde está disponibilizado uma biblioteca em que os usuários poderão encontrar a sinopse, as informações gerais e <em>possíveis locais de compra</em> de determinada edição.
          </p>
          <h3 className='sobre-sub'>Atividade empenhada</h3>
          <p className='sobre'>
            Nosso intuito com a proposta é facilitar a disseminação do conteúdo nacional de literatura, trazendo uma melhor distribuição e um acesso mais amplo, levando em consideração a escala dos meios digitais nos dias de hoje.
          </p>
          <h2 style={{marginTop: '4rem'}} id='info-tec'>Informações Técnicas</h2>
          <hr />
          <h3 className='sobre-sub'>Histórico</h3>
          <p className='sobre'>
            
          </p>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Sobre