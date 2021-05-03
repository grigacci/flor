import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const history = useHistory();

  return (

      <div className="baseCad" style={{
        backgroundImage: "url(/images/fundo.png)",
        backgroundSize:"contain",
        backgroundRepeat:"repeat"
      }}>
        <div className="containe2Cad">
          <div
            className="containe2Cad"
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
                  <Col style={{borderTopRightRadius: "10px",}}>
                    <h4>Cadastro</h4>
                  </Col>
                </Button>
              </Row>
            </Container>
          </div>
          <div
            className="containeCad"
            style={{
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
              paddingTop: "0px",
            }}
          >
            <br />
            <img src="/images/logo.png" alt="Logo" className="imgLog"></img>
            <br />
            <div className="linhaCad"></div>
            <br></br>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Insira o email" required/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Senha" required/>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembrar de mim" />
              </Form.Group>

              <div className="meioCad">
                <Button variant="primary" type="submit" size="lg" block>
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
