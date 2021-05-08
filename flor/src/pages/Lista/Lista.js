import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Lista.css";
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router';
import { ButtonToolbar, ButtonGroup, Col, Image, Row } from 'react-bootstrap';

const useStyles = makeStyles({
  root: { maxWidth: 345, },
});

const produto = [
  {
    img: '/images/2.png',
    title: 'Flor 1',
    preço: '100',
    descrição: 'Descrição Flor 1',
  },
  {
    img: '/images/3.png',
    title: 'Flor 2',
    preço: '200',
    descrição: 'Descrição Flor 2',
  },
  {
    img: '/images/4.png',
    title: 'Flor 1',
    preço: '100',
    descrição: 'Descrição Flor 1',
  },
  {
    img: '/images/5.png',
    title: 'Flor 2',
    preço: '200',
    descrição: 'Descrição Flor 2',
  },
  {
    img: '/images/logo.png',
    title: 'Flor 2',
    preço: '200',
    descrição: 'Descrição Flor 2',
  },
  {
    img: '/images/2.png',
    title: 'Flor 1',
    preço: '100',
    descrição: 'Descrição Flor 1',
  },
  {
    img: '/images/3.png',
    title: 'Flor 2',
    preço: '200',
    descrição: 'Descrição Flor 2',
  },
  {
    img: '/images/4.png',
    title: 'Flor 1',
    preço: '100',
    descrição: 'Descrição Flor 1',
  },
  {
    img: '/images/5.png',
    title: 'Flor 2',
    preço: '200',
    descrição: 'Descrição Flor 2',
  },
  {
    img: '/images/logo.png',
    title: 'Flor 2',
    preço: '200',
    descrição: 'Descrição Flor 2',
  },

]

function Lista() {
  const history = useHistory();
  const classes = useStyles();

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
            <p style={{marginBottom: "8px", fontFamily: "Abhaya Libre Regular" }}>Como você vai fazer alguém feliz hoje?</p>
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
              return (
                <div className="boxList">
                  <Card className={classes.root}>
                    <CardActionArea >
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={listItem.img}
                        title={listItem.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {listItem.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {listItem.descrição}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          R${listItem.preço},90
                                </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="secundary">
                        Colocar no carrinho
                            </Button>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="proxPaginaList">
      <ButtonToolbar aria-label="Toolbar with button groups" style={{
          display:"flex",
          justifyContent:"center",
          width:"100%",
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