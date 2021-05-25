import { React, useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import api from "../../../services/api";


function LoginModal(props) {
  const [email, setEmail] = useState();

  async function resetPassword(e) {
    e.preventDefault();
    api.post("/sendPasswordResetEmail", {email}).then(() => {
      alert("O email foi enviado")

    }).catch((error) => {alert(error?.response?.data?.notification || "Não foi possivel enviar o email de recuperação")})
  }


  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Esqueceu sua senha?
            </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <h5>Email de Recuperação</h5>
            <Form.Control type="email" placeholder="Insira seu email" onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              Um email de recuperação será enviado para seu endereço de email
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" id="btn-resetPassword" onClick={resetPassword}>
            Enviar Email
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>

  );
}


export default LoginModal;