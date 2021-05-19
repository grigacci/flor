import React, { useState, useEffect } from "react";
import "./Produto.css";
import { Modal, Card, Button, Container, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core/';
import api from '../../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import ProdutoModal from "../ProdutoModal"

const _produtos = []

const useStyles = makeStyles({
  modalDrop: {
    background: 'rgba(255,255,255,0.2)',
  },
  root: { width: "100%", display: "flex", flexDirection: "column", flexGrow: "1", height: "100%" },
});


function Produto() {
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
    <div className="countainerProd">
      {produto.map((listItem, index) => {
        var nome = `/images/${listItem.produto_id}.jpg`;
        return (
          <>

              <div className="elementosProd">
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
              </div>


            <div className="modal">
              <Modal
                className="modalList"
                
                open={show}
                onClose={handleClose}
                style={{ opacity: "1" }}
                BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0" } }}
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
  );
}

export default Produto;