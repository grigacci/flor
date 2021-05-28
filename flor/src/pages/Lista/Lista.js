import React from 'react';
import {   Container,  } from '@material-ui/core/';
import "./Lista.css";



import Produto from "../components/Produto"







function Lista() {
  
  



 

 
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