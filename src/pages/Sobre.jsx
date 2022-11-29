import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'

import '../styles/index.css'

const Sobre = () => {
  return (
    <>
    <Header />
        <Container>
            <div>
                <h2>Boas vindas à Clio!</h2>
                <hr/>
                <h3>Quem nós somos?</h3>
                <p>
                A Clio é um acervo digital de livros nacionais, onde está disponibilizado uma biblioteca em que os usuários poderão encontrar a sinopse, as informações gerais e <em>possíveis locais de compra</em> de determinada edição. 
                </p>
                <h3>Atividade empenhada</h3>
                <p>
                Nosso intuito com a proposta é facilitar a disseminação do conteúdo nacional de literatura, trazendo uma melhor distribuição e um acesso mais amplo, levando em consideração a escala dos meios digitais nos dias de hoje.
                </p>
            </div>
        </Container>
    <Footer />
    </>
  )
}

export default Sobre