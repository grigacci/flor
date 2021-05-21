import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconButton } from "@material-ui/core";
import api from "../../services/api";
import { login } from "../../services/auth";
import { ImUndo2 } from "react-icons/im";
import { IconContext } from "react-icons";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handlelogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      login(response.data.accessToken);
      const nome = await api.get("/barra");
      const response2 = await api.get(`/user/${nome.data}`)
      const teste = response2.data
      sessionStorage.setItem('@flor/dados', JSON.stringify(teste));
      sessionStorage.setItem('@flor/email', email);

      history.push("/home");
    } catch (error) {
      if (error.status === 403) {
        alert("Credenciais inválidas")
      }
      else {
        alert(error);
      }
      console.warn(error);

    }
  }

  function handleClick() {
    history.goBack()
  }

  return (
    <div className="baseLog" style={{
      backgroundImage: "url(/images/fundo.png)",
      backgroundSize: "contain",
      backgroundRepeat: "repeat"
    }}>
      
        <card className="voltarLog">
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <IconButton onClick={handleClick}  >
              <ImUndo2 />
            </IconButton>
          </IconContext.Provider>
        </card>
        <div className="containe2Log">
          <div
            className="containe2Log"
            style={{ padding: "0px", paddingBottom: "0px" }}
          >
            <Container style={{ paddingBottom: "0px" }}>
              <Row style={{ paddingBottom: "0px" }}>
                <Button
                  onClick={() => history.push("login")}
                  variant="link"
                  style={{
                    width: "50%",
                    padding: "0px",
                    margin: "0px",
                    borderRadius: "0px",
                    backgroundColor: "#f3dc01",

                    borderTopLeftRadius: "10px",
                  }}
                  selected
                >
                  <Col
                    style={{
                      backgroundColor: "#f3dc01",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <h4>Login</h4>
                  </Col>
                </Button>
                <Button
                  onClick={() => history.push("cadastro")}
                  variant="link"
                  style={{
                    width: "50%",
                    padding: "0px",
                    margin: "0px",
                    backgroundColor: "white",
                    borderRadius: "0px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <Col style={{ borderTopRightRadius: "10px", }}>
                    <h4>Cadastro</h4>
                  </Col>
                </Button>
              </Row>
            </Container>
          </div>
          <div
            className="containeLog"
            style={{
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
              paddingTop: "0px",
            }}
          >
            <br />
            <img src="/images/logo.png" alt="Logo" className="imgLog"></img>
            <br />
            <div className="linhaLog"></div>
            <br></br>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Insira o email" onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembrar de mim" />
              </Form.Group>

              <div className="meioLog">
                <Button variant="primary" type="submit" size="lg" onClick={handlelogin} block>
                  Entrar
                </Button>
              </div>
            </Form>
          </div>
        </div>


    </div>



  );
}

export default Login;
