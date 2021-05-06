import React from 'react';
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


function Home() {

    return (
        <div>
        <br>
        </br>
        <br>
         </br>
              <div className="conteiner">
            <Carousel className="keeps">
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
    <img
      className="imagehome"
     src="./images/1.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

<Card className="keeps2" style={{
        backgroundImage: "url(/images/fundocaixatexto.png)",
        backgroundSize:"contain",
      }}>
  <Card.Body>
    <Card.Title>História</Card.Title>
    <Card.Text>
    <p style={{fontSize:"1.3rem"}}>Fundada em 2021, na UFMG (Universidade Federal de Minas Gerais) por um grupo de 5 amigos engenheiros. Antes da Flor de Lis se tornar um negócio, nossa equipe tinha o simples intuito de florir e alegrar a vida dos estudantes e funcionários do campus Pampulha, sem fins lucrativos. Nosso negócio começou a crescer quando muitas pessoas procuravam por flores para presentear seus entes queridos, assim decidimos expandir o projeto, inicialmente com uma pequena floricultura, logo depois expandimos para o mundo virtual, com o site, com o intuito de facilitar as compras e as entregas. </p>
    </Card.Text>
  </Card.Body>
</Card>
</div>

<Card className="keeps3" style={{
        backgroundImage: "url(/images/fundocaixatexto.png)",
        backgroundSize:"contain",
      }}> 
  <Card.Body>
    <Card.Title> Quem Somos</Card.Title>
    <Card.Text>
    <p style={{fontSize:"1.3rem"}}>Muito além de uma floricultura, uma loja para alegrar, florir, trazer bem-estar e aconchego ao seu lar. Chegamos ao mercado para demonstrar a delicadeza e a doçura que as plantas podem nos fornecer, por meio de simples gestos, como um desabrochar de uma flor e o encantamento do verde. Temos como MISSÃO, direcionar e aumentar boas ações, transportar carinho e leveza aos nossos clientes por meio dos nossos produtos. Já como  VISÃO, mostrar o quão positiva a aquisição de plantas favorece o bem-estar, e também enfeita e perfuma a residência, assim levando harmonia, purificando o ar e aliviando o estresse. E por fim, os nossos VALORES, são empatia ao próximo, comprometimento, pensar e atuar de forma conjunta e agir com transparência.</p>
    </Card.Text>
  </Card.Body>
</Card>

<div className="tudo">
<Carousel className="keeps4"> 
  <Carousel.Item>
    <img 
      className="image"
      src="./images/comentários.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="./images/comentários.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
     src="./images/comentários.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
<Carousel className="keeps4"> 
  <Carousel.Item>
    <img 
      className="image"
      src="./images/comentários.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="./images/comentários.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
     src="./images/comentários.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
<Carousel className="keeps4"> 
  <Carousel.Item>
    <img 
      className="image"
      src="./images/comentários.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="./images/comentários.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
     src="./images/comentários.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
       
        </div>
    )
}

export default Home;
