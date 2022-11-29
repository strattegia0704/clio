import { useState } from "react"
import emailjs from '@emailjs/browser'

import Header from "../components/Header"
import Footer from "../components/Footer"

import '../styles/index.css'

function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault()

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos")
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_m29k0z8', 'template_62xirbg', templateParams, 'Wbp9PYeyXnHTq9PaB')
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log('ERROR: ', err)
        })
    }

    return (
        <>
            <Header />
            <div className="container-cont">
                <h1 className="title-cont">Contato</h1>
                <h5 className="subtitle-cont">Possui alguma dúvida, feedback ou assunto mais importante a se tratar conosco? Entre em contato!</h5>

                <form className="form-cont" onSubmit={sendEmail}>
                    <input
                        className="input-cont"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        className="input-cont"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <textarea
                        className="textarea-cont"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <input className="button-cont" type="submit" value="Enviar" />
                </form>

            </div>
            <Footer />
        </>
    );
}

export default Contato