import React, { useState } from 'react'
import axios from 'axios'
import $ from 'jquery'

import '../styles/style.css'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardImg from 'react-bootstrap/CardImg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FiArrowUp } from 'react-icons/fi'
import eImg from '../assets/empty.png'
import pH from '../assets/placeholder.jpg'

function Home() {

    const [book, setBook] = useState("")
    const [result, setResult] = useState([])
    const [apiKey, setApiKey] = useState("AIzaSyB_uDElEniTBpv4FkOxvNZbK3O0rya2bF4")


    function hC(event) {
        const book = event.target.value
        setBook(book)
    }

    function hS(event) {
        event.preventDefault()
        axios.get('https://www.googleapis.com/books/v1/volumes?q="' + book + '"&key=' + apiKey + '&country=BR&language=pt&maxResults=40')
            .then(data => {
                console.log(data.data.items)
                setResult(data.data.items)
            })
    }

    return (
        <>
            <Header />
            <Container>
                <h2 className='home'>"Um quarto sem livros é como um corpo sem alma."</h2>
                <h4 className='home'>Pesquise um livro!</h4>
                <Form onSubmit={hS} className="d-flex col-sm-4 formApi" role="search">
                    <input onChange={hC} className="AutoFocus form-control md-2" placeholder='Pesquise um livro' type="text" />
                    <Button id='btn-search' variant="outline-success" type='submit' >Buscar</Button>
                </Form>
                <div id='empty-space'>
                    <img src={eImg} alt='Empty Image' />
                </div>
            </Container>
            <Container className='card-container'>
                <Row xs={1} md={4} className="g-4">
                    {result.map(book => (
                        <Col>
                            <Card className='card-book text-center'>
                                <CardImg id='card-img' variant='top' src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : pH}/>
                                <Card.Body>
                                    <div className='card-text'>
                                        <h5 className='card-text'>{book.volumeInfo.title}</h5>
                                        <h6 className='card-text'>Autor(a): {(book.volumeInfo.authors) ? book.volumeInfo.authors[0] : ""}</h6>
                                        <p className='card-text'>Ano: {book.volumeInfo.publishedDate}</p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div style={{ margin: 'auto' }}>
                                        <Button id='btn-info' variant='info' href={book.volumeInfo.infoLink} target='_blank'>Saiba mais</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <a href='#' id='linkT'><FiArrowUp /></a>
            </Container>
            <Footer />
        </>
    )
}

export default Home