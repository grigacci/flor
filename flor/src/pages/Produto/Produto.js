import React, { useState, useEffect } from "react";
import "./Produto.css";
import api from '../../services/api';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const _produtos = []

const useStyles = makeStyles({
    root: {width:"100%",display:"flex",flexDirection:"column", flexGrow:"1", height: "100%" },
  });

function Produto(){
    const [produto, setProdutos] = useState(_produtos);
    const classes = useStyles();

    async function getProdutos(){
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
      },[])

    return (
        <div className="countainerProd">
            {produto.map((listItem, index) => {
              var nome = `/images/${listItem.produto_id}.jpg`;
              return (
                <div className="boxListProd" key={index}>
                  <Card className={classes.root} >
                    <CardActionArea style={{display:"flex",flexDirection:"column", flexGrow:"1" }} >
                      <CardMedia
                        component="img"
                        alt={listItem.name}
                        height="160"
                        image={nome}
                        title={listItem.name}
                        style={{width:"auto", alignSelf:"center"}}
                      />
                      <CardContent style={{display:"flex", flexDirection:"column", flexGrow:"1"}}>
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
                        <Typography variant="body2" color="textSecondary" component="p" style={{alignSelf:"center", marginTop:"auto"}}>
                          R${listItem.preco}
                                </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
        </div>  
    );
}

export default Produto;