import Header from "../components/Header"
import Footer from "../components/Footer"

import Button from 'react-bootstrap/Button'

import '../styles/user.css'

import { BsPersonCircle } from "react-icons/bs"

const User = () => {
  return (
    <>
      <Header />
        <section id="section-profile">
          <div className="profile">
            <a className="profile-link" id="User-btn"><BsPersonCircle /></a>
          </div>
          <div class="profile-info">
            <p id="profile-name" className="profile-text"> Username <br /><span id="profile-id"> @User_name </span></p>
          </div>
          <div className="profile-edit">
            <button className="edit-btn"> Editar Perfil </button>
          </div>
          <div className="profile-desc">
            <p className="profile-text">  Lorem ipsum dolor sit amet </p>
          </div>
        </section>


        <section id="section-info">
          <div id="ad-info" className="ad-info">
            <h4 id="br-title"> Detalhes do Usuario</h4>
            <hr />
            <p className="adinfo-text"><span id="b-info"> Endereço de email </span><br /> user@gmail.com </p>
            <p className="adinfo-text"><span id="b-info"> ID de Usuario </span><br /> @User_name </p>
          </div>

          <div id="ad-info-s" className="ad-info-s">
            <h4 id="br-title"> Atividade de Login </h4>
            <hr />
            <p className="adinfo-text"><span id="b-info"> Primeiro acesso ao site </span><br />XXX </p>
            <p className="adinfo-text"><span id="b-info"> Último acesso ao site </span><br /> XXX </p>
          </div>

        </section>

        <div className="div-btn-form">
          <Button className='btn-form' href='/user/login'>Login</Button>
          <Button className='btn-form' href='/user/registrar'>Registrar</Button>
        </div>
      <Footer />
    </>
  )
}

export default User