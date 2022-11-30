import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

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
          <h3 className='sobre-sub'>A origem de Clio</h3>
          <p className='sobre'>
            O conceito inicial de Clio vem sido discutido desde maio de 2022, onde percebemos que muitos tem a vontade de ter o habito da leitura mas nunca encontram um livro desejado ou não tem ideia por onde começar. Assim que surge a ideia de criar uma plataforma/acervo para facilitar a busca e encontra de livros com o foco principalmente na literatura nacional pois também foi notado que poucos conhecem as obras literarias do Brasil e buscamos diminuir essa distancia entre leitor e livro.
          </p>
          <h3 className='sobre-sub'> Estrutura de negocio</h3>
          <p className='sobre'>
            Clio tem como base em sua estrutura um negocio 100% online com serviços realizados em uma plataforma/acervo digital de livros que possa ser facilmente encontrado na internet, além disso Clio busca sempre atender os pedidos e requisões dos nosso clientes por isso temos uma equipe de comunicações em prontidão para lhe dar o devido suporte e ajuda com oque precisar. Caso deseje entrar em contato com conosco clique <Link to='/contato'> aqui </Link>
          </p>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Sobre