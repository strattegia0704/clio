import React, { useState } from "react";
import axios from "axios";

import "../styles/style.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FiArrowUp } from "react-icons/fi";
import eImg from "../assets/empty.png";
import pH from "../assets/placeholder.jpg";

const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

function Home() {
  const [book, setBook] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: book,
          key: apiKey,
          maxResults: 40,
          language: "pt",
          country: "BR",
        },
      })
      .then((data) => {
        setIsLoading(false);
        setIsSearch(true);
        setResult(data.data.items);
      });
  }

  return (
    <>
      <Header />
      <Container>
        <h2 className="home">
          "Um quarto sem livros é como um corpo sem alma."
        </h2>
        <h4 className="home">Pesquise um livro!</h4>
        <Form
          onSubmit={handleSubmit}
          className="d-flex col-sm-4 formApi"
          role="search"
        >
          <input
            onChange={handleChange}
            className="AutoFocus form-control md-2"
            placeholder="Pesquise um livro"
            type="text"
          />
          <Button id="btn-search" variant="outline-success" type="submit">
            Buscar
          </Button>
        </Form>
        {!isSearch && (
          <div id="empty-space">
            <img src={eImg} alt="Empty Image" />
          </div>
        )}

        {isLoading && (
          <div id="empty-space">
            <h3 className="load">Carregando...</h3>
          </div>
        )}
      </Container>
      <Container className="card-container">
        <Row xs={1} md={4} className="g-4">
          {result.map((book) => (
            <Col key={book.id}>
              <Card className="card-book text-center">
                <CardImg
                  id="card-img"
                  variant="top"
                  src={
                    book.volumeInfo.imageLinks !== undefined
                      ? book.volumeInfo.imageLinks.thumbnail
                      : pH
                  }
                />
                <Card.Body>
                  <div className="card-text">
                    <h5 className="card-text">{book.volumeInfo.title}</h5>
                    <h6 className="card-text">
                      Autor(a):{" "}
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors[0]
                        : ""}
                    </h6>
                    <p className="card-text">
                      Ano: {book.volumeInfo.publishedDate}
                    </p>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div style={{ margin: "auto" }}>
                    <Button
                      id="btn-info"
                      variant="info"
                      href={book.volumeInfo.infoLink}
                      target="_blank"
                    >
                      Saiba mais
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        <a href="#" id="linkT">
          <FiArrowUp />
        </a>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
