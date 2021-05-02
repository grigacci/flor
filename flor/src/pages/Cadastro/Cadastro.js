import React from "react";
import "./Cadastro.css";
import Button from "react-bootstrap/Button";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const history = useHistory();

  return (

      <div className="baseCad" style={{
        backgroundImage: "url(/images/fundo.png)",
        backgroundRepeat: "round",
        opacity: "75%",
      }}>
        <div className="containe2">
          <div
            className="containe2"
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
                    backgroundColor: "white",
                    
                    borderTopLeftRadius: "10px",
                  }}
                >
                  <Col
                    style={{ borderRadius: "0px", borderTopLeftRadius: "10px" }}
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
                    borderRadius: "0px",
                    backgroundColor: "#f3dc01",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <Col
                    style={{
                      backgroundColor: "#f3dc01",
                      borderRadius: "0px",
                      borderTopRightRadius: "10px",
                    }}
                  >
                    <h4>Cadastro</h4>
                  </Col>
                </Button>
              </Row>
            </Container>
          </div>
          <div
            className="containe"
            style={{
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
              paddingTop: "0px",
            }}
          >
            <br />
            <img src="/images/logo.png" alt="Logo"></img>
            <br />
            <div className="linha"></div>
            <br></br>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Insira o email" required/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Senha" required/>
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Control type="Name" placeholder="Insira o nome" required />
              </Form.Group>

              <Form.Group controlId="formGridAddress" required>
                <Form.Control placeholder="Endereço" required/>
              </Form.Group>

              <Form.Group controlId="formGridCidade" required>
                <Form.Control placeholder="Cidade" required/>
              </Form.Group>

              <Form.Row style={{ backgroundColor: "#f3dc01" }} required>
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  style={{ backgroundColor: "#f3dc01" }}
                  required>
                  <Form.Control as="select" defaultValue="Minas Gerais" placeholder="Estado" required>
                
                    <option>Acre</option>
                    <option>Alagoas</option>
                    <option>Amapá</option>
                    <option>Amazonas</option>
                    <option>Bahia</option>
                    <option>Ceará</option>
                    <option>Espírito Santo</option>
                    <option>Goiás</option>
                    <option>Maranhão</option>
                    <option>Mato Grosso do Sul</option>
                    <option>Minas Gerais</option>
                    <option>Pará</option>
                    <option> Paraíba</option>
                    <option> Paraná</option>
                    <option> Pernambuco</option>
                    <option> Piauí</option>
                    <option> Rio de Janeiro</option>
                    <option> Rio Grande do Norte</option>
                    <option> Rio Grande do Sul</option>
                    <option> Rondônia</option>
                    <option> Roraima</option>
                    <option> Santa Catarina</option>
                    <option> São Paulo</option>
                    <option> Sergipe</option>
                    <option> Tocantins</option>
                    <option> Distrito Federal</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridZip"
                  style={{ backgroundColor: "#f3dc01" }}
                  required>
                  <Form.Control placeholder="CEP" required/>
                </Form.Group>
              </Form.Row>

    
    <Form.Group >
    <Form.Label style={{justifyContent: "center"}}>
       <p style={{fontSize: "20px",fontWeight: "bold",marginBottom: "2px"}}> O que você prefere receber?</p>
      </Form.Label>
      <Form.Row style={{justifyContent: "center"}}>
        <Form.Check
          type="radio"
          label="Rosas"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        style={{marginRight: "20px",fontSize: "20px"}}required/>
        <Form.Check
          type="radio"
          label="Tulipa"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize: "20px"}}
          required
        />
      </Form.Row>
    </Form.Group>
 

              <div className="meio">
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
