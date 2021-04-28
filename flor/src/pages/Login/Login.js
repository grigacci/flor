import React from 'react'
import { Link} from "react-router-dom";
import "./Login.css";
import {Form , Button} from "react-bootstrap";

function Login() {
    return (
        <div className="fundo" style={{ backgroundImage: "url(/images/loginback.jpg)" ,
        backgroundRepeat: 'repeat'}}>
            
        <div className="base">
        <div className="containe">
            <h1>Flor de lissssssss</h1>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Insira o email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembrar de mim" />
            </Form.Group>
            <div className="meio">
            <Button variant="outline-primary" type="submit" size="lg" block>
                Entrar
            </Button>
            </div>
            </Form>
        </div>
        </div>
        </div>
    )
}

export default Login
