import React, { useEffect, useState } from 'react';
import { Backdrop, Modal, makeStyles, Card, Button, Container, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core/';
import "./Lista.css";
import { useHistory } from 'react-router';
import { ButtonToolbar, ButtonGroup, Col, Image, Row } from 'react-bootstrap';
import api from '../../services/api';
import Produto from "../components/Produto"



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



      </Container>
      <div className="geralList">
        <Produto />
      </div>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div >
  );
}

export default Lista;