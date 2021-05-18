import React, { useEffect, useState } from 'react';
import { Backdrop, Modal, makeStyles, Card, Button, Container, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core/';
import "./Lista.css";
import { useHistory } from 'react-router';
import { ButtonToolbar, ButtonGroup, Col, Image, Row } from 'react-bootstrap';
import api from '../../services/api';
import ProdutoModal from "../ProdutoModal"



const useStyles = makeStyles({
  modalDrop: {
    background: 'rgba(255,255,255,0.2)',
  },
  root: { width: "100%", display: "flex", flexDirection: "column", flexGrow: "1", height: "100%" },
});

const _produtos = []


function Lista() {

  const history = useHistory();
  const classes = useStyles();
  const [produto, setProdutos] = useState(_produtos);
  const [produtoAtual, setProdutoAtual] = useState();
  const [show, setOpen] = useState(false);
  console.log(produtoAtual);


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

  function handleClick(product) {
    setOpen(true);
    setProdutoAtual(product);
  }

  function teste() {
    if (show === true) {
      console.log(produtoAtual.name);
      return produtoAtual.name;
    }
  }


  function handleClose() {
    setOpen(false);
  }
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
            {produto.map((listItem, index) => {
              var nome = `/images/${listItem.produto_id}.jpg`;
              return (
                <>
                  <Button key={index} onClick={() => handleClick(listItem)}>
                    <div className="boxListProd" >
                      <Card className={classes.root} >
                        <CardActionArea style={{ display: "flex", flexDirection: "column", flexGrow: "1" }} >
                          <CardMedia
                            component="img"
                            alt={listItem.name}
                            height="160"
                            image={nome}
                            title={listItem.name}
                            style={{ width: "auto", alignSelf: "center" }}
                          />
                          <CardContent style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
                            <Typography gutterBottom style={{
                              fontSize: "1.16rem",
                              fontFamily: "Roboto",
                              fontWeight: "400",
                              lineHeight: "1.334",
                              letterSpacing: "0em",
                            }}>
                              {listItem.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {listItem.descrição}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ alignSelf: "center", marginTop: "auto" }}>
                              R${listItem.preco}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  </Button>

                  <div className="modal">
                    <Modal
                      className="modalList"
                      open={show}
                      style={{ backgroundColor: "unset", backgroundImage: "url(/images/fundo.png)", opacity: "1" }}
                      BackdropProps={{style: {backgroundImage: "url(/images/fundo.png)", backgroundSize:"cover",opacity:"50%"}}}
                    >
                      <ProdutoModal
                        open={show}
                        onClose={handleClose}
                        data={produtoAtual}
                      />
                    </Modal>
                  </div>

                </>
              );
            })}
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
    </div >
  );
}

export default Lista;