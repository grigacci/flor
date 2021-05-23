import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
function LoginModal(props) {

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
            <Form.Control type="email" placeholder="Insira seu email" />
            <Form.Text className="text-muted">
              Um email de recuperação será enviado para seu endereço de email
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
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