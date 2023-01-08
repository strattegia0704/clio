import Header from "../components/Header";
import Footer from "../components/Footer";

import Container from "react-bootstrap/Container";
import * as yup from "yup";

import "../styles/forms.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const handleLogin = (values) => {
    Axios.get("http://localhost:5173/user/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });

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
              onSubmit={handleLogin}
              validationSchema={validationsLogin}
            >
              <h2>
                {" "}
                Entre em sua <br /> Conta
              </h2>
              <input
                type="text"
                required
                placeholder="Digite o seu email"
                id="user"
                autoComplete="off"
                name="email"
              />
              <input
                type="password"
                required
                placeholder="Digite sua senha"
                id="pass"
                autoComplete="off"
                name="password"
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                onClick={show}
                id="showing"
              />
              <span id="valid-pass"></span>
              <button type="submit"> Entrar </button>
              <div className="other">
                {/* <p className="message">
                  <Link to='/'>
                    Esqueceu sua senha?
                  </Link>
                </p> */}
                <p className="message">
                  <Link to="/user/registrar">Registre-se aqui!</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Signin;
