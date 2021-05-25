import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Perfil.css"
import api from "../../services/api";


function Perfil() {
  const [email, setEmail] = useState();
  const dados = JSON.parse(sessionStorage.getItem('@flor/dados'));

  async function resetPassword(e) {
    e.preventDefault();
    api.post("/sendPasswordResetEmail", {email}).then(() => {
      alert("Um email foi enviado para realizar a troca da senha")

    }).catch((error) => {alert(error?.response?.data?.notification || "Erro ao enviar o email")})
  }

  return (<div>
    <div style={{ marginTop: "5rem" }}>
      <Container>
        <Row>
          <Col>
            <div>
              <div className="boxPer">
                <h3 style={{ fontSize: "22px" }}>Informações</h3>
              </div>
              <br></br>
              <Form>

                <Form.Group controlId="formGridEmail">
                  <Form.Control type="email" placeholder="Email" value={dados.email} required />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                  <Form.Control type="text" placeholder="Nome" value={dados.name} required />
                </Form.Group>


                <Form.Group controlId="formGridAddress1">
                  <Form.Control placeholder="Endereço" value={dados.endereco} required />
                </Form.Group>



                <Form.Group controlId="formGridCity">
                  <Form.Control placeholder="Cidade" value={dados.cidade} required />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select" defaultValue="Choose..." value={dados.estado} required>
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

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Control placeholder="CEP" value={dados.cep} required />
                  </Form.Group>

                </Form.Row>
                <Form.Group>
                  <Form.Row style={{ justifyContent: "center" }}>
                    <Form.Check
                      type="radio"
                      label="Rosas"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      style={{ marginRight: "20px", fontSize: "20px" }} value={dados.flor} required />
                    <Form.Check
                      type="radio"
                      label="Tulipa"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      style={{ fontSize: "20px" }}
                      value={dados.flor} required
                    />
                  </Form.Row>
                </Form.Group>

                <br></br>
                <div className="boxPer">
                  <h3 style={{ fontSize: "22px" }}>Informações de pagamento</h3>
                </div>
                <br></br>

                <Form.Group controlId="formBasicCard">
                  <Form.Control type="number" placeholder="Cartão" value={dados.cartao} required />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridMes">
                    <Form.Control type="number" max="12" placeholder="Mês de vencimento" value={dados.mes} required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAno">
                    <Form.Control type="number" max="2050" placeholder="Ano de vencimento" value={dados.ano} required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCodigo">
                    <Form.Control type="number" max="999" placeholder="Código de segurança" value={dados.cvc} required />
                  </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit" >
                  Alterar
  </Button>
              </Form>

            </div>
            <br></br>
          </Col>
          <Col >
            <Form>

              <div className="boxPer">
                <h3 style={{ fontSize: "22px" }}>Alterar Senha</h3>
              </div>
              <br></br>

              <Form.Group controlId="formBasicCard">
                <Form.Control placeholder="Insira seu email" required onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={resetPassword} >
                Enviar email 
              </Button>
            </Form>
            <br></br>
            <div className="boxPer">
              <h3 style={{ fontSize: "22px" }}>Últimos pedidos</h3>
            </div>
            <br></br>

            <div className="alinharPer">
              <Card style={{ width: '19rem' }}>
                <Card.Body>
                  <Card.Title>Pedido #25</Card.Title>
                  <Card.Text>
                    <ul style={{ textAlign: "left", marginLeft: "1rem" }}>
                      <li>Flor azul</li>
                      <li>Tulipa</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  </div>)
}

export default Perfil
