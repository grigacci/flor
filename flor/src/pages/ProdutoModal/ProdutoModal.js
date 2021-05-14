import { CardMedia, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./ProdutoModal.css";
import api from '../../services/api';



/*      (produto) ?
      <h1>antes</h1>:<h1>depois</h1> */


function ProdutoModal({ data, open }) {
    if (!open) return
    console.log(data);
    let nome = `/images/${data.produto_id}.jpg`;
    return (

        <div className="modalContainer">
                <p style={{
                    fontSize:"1.5rem",
                    alignSelf:"center"
                }}
                >
                   {data.name} 
                </p>

            <img src={nome} className="imgModal"></img>

            <h2>Descrição do produto:</h2>
            {data.descricao}
        </div>
    );
}

export default ProdutoModal;