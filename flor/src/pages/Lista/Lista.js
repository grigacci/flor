import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import "./Lista.css";
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router';
import { ButtonToolbar, ButtonGroup, Col, Image, Row } from 'react-bootstrap';
import api from '../../services/api';
import Produto from "../Produto"

const useStyles = makeStyles({
  root: { width: "100%", display: "flex", flexDirection: "column", flexGrow: "1", height: "100%" },
});

const _produtos = []


function Lista() {

  const history = useHistory();
  const classes = useStyles();
  const [produto, setProdutos] = useState(_produtos);
  console.log(produto.indexOf);

  async function getProdutos() {
    try {
      const response = await api.get("/produto");
      setProdutos([...response.data])
    } catch (error) {
      console.warn(error);
      alert("Algo deu ruim")
    }
  }

  useEffect(() => {
    getProdutos();
  }, [])



  return (
    <div className="incluiTodosList" style={{
      backgroundImage: "url(/images/fundocaixatextos.png)",
      backgroundSize: "contain"
    }}>
      <img
        className="imagehomeList"
        src="./images/namorados.png"
        alt="promomaio"
      />
      <div className="tituloList">
        <h1>Presenteie quem você ama!</h1>
        <h3>Aproveite as promoções do mês</h3>
      </div>
      <Container style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        boxsizing: "border-box",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "0",
        paddingRight: "0",
      }}
      >

        <Row className="promoçõesList" >
          <Col className="bolinhasList">
            <Image
              src="/images/2.png"
              onClick={() => history.push("/home")}
              roundedCircle
              style={{ width: "10rem", height: "10rem", alignSelf: "center" }}
            /><h5>preço1</h5>
          </Col>
          <Col className="bolinhasList">
            <Image
              src="/images/3.png"
              onClick={() => history.push("/home")}
              roundedCircle
              style={{ width: "10rem", height: "10rem", alignSelf: "center" }}
            /><h5>preço1</h5>
          </Col>
          <Col className="bolinhasList">
            <Image
              src="/images/4.png"
              onClick={() => history.push("/home")}
              roundedCircle
              style={{ width: "10rem", height: "10rem", alignSelf: "center" }}
            /><h5>preço1</h5>
          </Col>
          <Col className="bolinhasList">
            <Image
              src="/images/5.png"
              onClick={() => history.push("/home")}
              roundedCircle
              style={{ width: "10rem", height: "10rem", alignSelf: "center" }}
            /><h5>preço1</h5>
          </Col>
        </Row>

      </Container>
      <div className="geralList">
        <Card style={{
          margin: "1rem",
          marginBottom: "auto",
          overflow: "unset",
          backgroundColor: "#e9e9e9",
        }}
        >
          <div className="categoriasList">
            <p style={{ marginBottom: "8px", fontFamily: "Abhaya Libre Regular" }}>Como você vai fazer alguém feliz hoje?</p>
            <Button style={{ fontSize: "0.7rem", fontFamily: "Abhaya Libre Regular" }} onClick={() => history.push("/home")}>Cestas</Button>
            <Button style={{ fontSize: "0.7rem", fontFamily: "Abhaya Libre Regular" }} onClick={() => history.push("/home")}>Buquês</Button>
            <Button style={{ fontSize: "0.7rem", fontFamily: "Abhaya Libre Regular" }} onClick={() => history.push("/home")}>Sementes</Button>
            <Button style={{ fontSize: "0.7rem", fontFamily: "Abhaya Libre Regular" }} onClick={() => history.push("/home")}>Jardinagem</Button>
            <Button style={{ fontSize: "0.7rem", fontFamily: "Abhaya Libre Regular" }} onClick={() => history.push("/home")}>Coroa de Flores</Button>
            <Button style={{ fontSize: "0.7rem", fontFamily: "Abhaya Libre Regular" }} onClick={() => history.push("/home")}>Vaso de Flores</Button>
          </div>
        </Card>

        <div className="baseList">
          <div className="elementosList">
            <Produto/>
          </div>
        </div>
      </div>

      <div className="proxPaginaList">
        <ButtonToolbar aria-label="Toolbar with button groups" style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
        >
          <ButtonGroup className="mr-2List" aria-label="Second group">
            <Button style={{ fontSize: "0.7rem", marginBottom: "2px", fontFamily: "Abhaya Libre Regular" }}>Página Anterior</Button>
            <Button style={{ fontSize: "0.7rem", marginBottom: "2px", fontFamily: "Abhaya Libre Regular" }}>1</Button>
            <Button style={{ fontSize: "0.7rem", marginBottom: "2px", fontFamily: "Abhaya Libre Regular" }}>2</Button>
            <Button style={{ fontSize: "0.7rem", marginBottom: "2px", fontFamily: "Abhaya Libre Regular" }}>3</Button>
            <Button style={{ fontSize: "0.7rem", marginBottom: "2px", fontFamily: "Abhaya Libre Regular" }}>Próxima Página</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </div>
  );
}

export default Lista;