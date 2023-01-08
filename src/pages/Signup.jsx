import Header from "../components/Header";
import Footer from "../components/Footer";

import Container from "react-bootstrap/Container";

import "../styles/forms.css";
import { Link } from "react-router-dom";
import * as yup from "yup";

import Axios from "axios";

const Signup = () => {
  const handleRegister = (values) => {
    values.preventDefault();
    console.log(values);

    const email = values.target[0].value;
    const password = values.target[1].value;

    Axios.get("http://localhost:5173/user/registrar", {
      email,
      password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });
  };

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
  });

  function formvalid() {
    var validpass = document.getElementById("pass").value;

    if (validpass.length < 8) {
      document.getElementById("valid-pass").innerHTML =
        "<p className='copyrigth-text'>Minimo de 8 Caracteres</p>";
      return false;
    } else {
      document.getElementById("valid-pass").innerHTML = "";
    }
  }

  function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("showing").src =
        "https://static.thenounproject.com/png/777494-200.png";
    } else {
      x.type = "password";
      document.getElementById("showing").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
  }

  return (
    <>
      <Header />
      <Container>
        <div className="login-page">
          <div className="form">
            <form
              className="login-form "
              initialValues={{}}
              onSubmit={handleRegister}
              validationSchema={validationsRegister}
            >
              <h2>
                Crie sua <br />
                Conta
              </h2>
              <input
                type="email"
                required
                placeholder="Digite o seu email"
                id="user"
                autocomplete="off"
                name="email"
              />
              <input
                onInput={formvalid}
                type="password"
                required
                placeholder="Digite sua senha"
                id="pass"
                autocomplete="off"
                name="password"
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                onClick={show}
                id="showing"
              />
              <span id="valid-pass"></span>
              <button type="submit"> Cadastra-se </button>
              <p className="message">
                Já tem uma conta?
                <Link to="/user/login"> Clique aqui!</Link>
              </p>
            </form>
          </div>
        </div>
        <script src="../scripts/form.js"></script>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
