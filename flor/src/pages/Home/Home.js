import React, { useState } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import {  Button, Modal } from "@material-ui/core";

function Home( ) {
  const [show, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function handleCloseComentario() {
    setOpen(false);
    alert("sucesso");
  }

  return (
    <div>
      <div className="conteinerHome">
        <Carousel className="keepsHome">
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/LOGOCARROSSEL.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/Promo1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/primeiracarrosel.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="imagehome" src="./images/1.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        <Card
          className="keeps2Home"
          style={{
            backgroundImage: "url(/images/fundocaixatexto.png)",
            backgroundSize: "contain",
          }}
        >
          <Card.Body>
            <Card.Title className="TitleHome">História</Card.Title>
            <Card.Text>
              <p style={{ fontSize: "1.3rem" }}>
                Fundada em 2021, na UFMG (Universidade Federal de Minas Gerais)
                por um grupo de 5 amigos engenheiros. Antes da Flor de Lis se
                tornar um negócio, nossa equipe tinha o simples intuito de
                florir e alegrar a vida dos estudantes e funcionários do campus
                Pampulha, sem fins lucrativos. Nosso negócio começou a crescer
                quando muitas pessoas procuravam por flores para presentear seus
                entes queridos, assim decidimos expandir o projeto, inicialmente
                com uma pequena floricultura, logo depois expandimos para o
                mundo virtual, com o site, com o intuito de facilitar as compras
                e as entregas.{" "}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Card
        className="keeps3Home"
        style={{
          backgroundImage: "url(/images/fundocaixatexto.png)",
          backgroundSize: "contain",
        }}
      >
        <Card.Body>
          <Card.Title className="TitleHome"> Quem Somos</Card.Title>
          <Card.Text>
            <p style={{ fontSize: "1.3rem" }}>
              Muito além de uma floricultura, uma loja para alegrar, florir,
              trazer bem-estar e aconchego ao seu lar. Chegamos ao mercado para
              demonstrar a delicadeza e a doçura que as plantas podem nos
              fornecer, por meio de simples gestos, como um desabrochar de uma
              flor e o encantamento do verde. Temos como MISSÃO, direcionar e
              aumentar boas ações, transportar carinho e leveza aos nossos
              clientes por meio dos nossos produtos. Já como VISÃO, mostrar o
              quão positiva a aquisição de plantas favorece o bem-estar, e
              também enfeita e perfuma a residência, assim levando harmonia,
              purificando o ar e aliviando o estresse. E por fim, os nossos
              VALORES, são empatia ao próximo, comprometimento, pensar e atuar
              de forma conjunta e agir com transparência.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="tudoHome">
        <Carousel className="keeps4Home">
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Carousel className="keeps4Home">
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Carousel className="keeps4Home">
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imagehome"
              src="./images/comentários.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div className="modal1">
      
      <card
      className="botaoComentario" >
            <button className="botaoComentario"onClick={()=>setOpen(true)}>
              <h4 >DEIXE SEU COMENTÁRIO&gt;</h4>
            </button>
          </card>
         
          
        <Modal
          className="modalList"
         
          open={show}
          onClose={handleClose}
          style={{ opacity: "1" }}
          BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0" } }}
        >
         <Card className="CardComentarioHome">
           <h3 style={{alignSelf:"center"}}>Deixe Sua opinião</h3>
           <textarea 
           style={{height:"70%"}}
           className="inputCard">
           </textarea>
           <div className="buttonsRowHome">
                        <Button onClick={handleClose} style={{
                            marginBlock:"10px",
                            marginRight: "auto",
                            marginLeft:"5px",
                            textTransform: "none",
                            backgroundColor: "#f3dc01",
                            textShadow:"0.5px 0.5px gray",
                            color: "black",
                        }}>
                            Voltar Página
                </Button>
                        <Button  onClick={handleCloseComentario}  variant="contained" color="primary" style={{
                            
                        
                           
                            marginLeft: "auto",
                            marginBlock:"10px",
                            marginRight:"5px",
                            textTransform: "none",
                            backgroundColor: "#f3dc01",
                            textShadow:"0.5px 0.5px gray",
                            color: "black",
                        }}>
                         
                          
                            Enviar Comentário
                </Button>
                    </div>
         </Card>
         
        
        </Modal>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Home;
