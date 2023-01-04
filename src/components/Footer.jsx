import React from "react";
import { Link } from "react-router-dom";

import '../styles/style.css'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6 id="sobre"> Sobre </h6>
                        <p className="text-justify">
                            A <b>Clio</b> é um acervo digital de livros
                            nacionais. Os usuários poderão encontrar a sinopse, informações
                            gerais e possíveis locais para adquirir determinada edição. No
                            site é incluída uma ferramenta de listagem onde poderão ser
                            encontrados os títulos que você deseja!
                        </p>
                    </div>
                    <div className="col-6 col-md-3 alunos">
                        <h6> Membros <span className="f-mob"> do Grupo</span></h6>
                        <ul className="footer-links">
                            <li>
                                <a style={{fontWeight: 'bolder',}}>Turma: 2º D</a>
                            </li>
                            <li>
                                <a> Andressa Hitschelly</a>
                            </li>
                            <li>
                                <a> Gabriel Almeida </a>
                            </li>
                            <li>
                                <a> Iuri Cavalcante </a>
                            </li>
                            <li>
                                <a> Joisson Rocha </a>
                            </li>
                            <li>
                                <a> Matheus Filipe </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h6 id="cont"> Informações Adcionais </h6>
                        <ul className="footer-links">
                            <li>
                                <Link to='/contato'>Contate-nos!</Link>
                            </li>
                            <li>
                                <Link to='/FAQ'>FAQ</Link>
                            </li>
                            <li>
                                <Link to='/privacidade'>Politica de Privacidade</Link>
                            </li>
                            <li>
                                <Link to='/termos'>Termos e Condições</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="small" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-12">
                        <p className="copyright-text">
                            Copyright © 2022 Todos os Direitos Reservados
                            <Link to='/'>
                                <span className="logo"> Clio </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
