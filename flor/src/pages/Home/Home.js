import React from 'react';
import {useHistory} from "react-router-dom";
import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


function Home() {
    const history = useHistory();

    return (
        <div>

            <h1>Home</h1>
            <button onClick={() => {history.push("login")}}>Logout</button>
            
              <div className="conteiner" > 
            <Carousel className="keeps"> 
  <Carousel.Item>
    <img 
      className="image"
      src="./images/logo.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="./images/fundo.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
     src="./images/logo.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

<Card className="keeps2">
  <Card.Body>
    <Card.Title>Quem Somos</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's contentjjgjgfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk.
    </Card.Text>
  </Card.Body>
</Card>
</div>

<Card className="keeps3">
  <Card.Body>
    <Card.Title> Historia</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's contentjjgjgfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk.
    </Card.Text>
  </Card.Body>
</Card>

<Carousel className="keeps4"> 
  <Carousel.Item>
    <img 
      className="image"
      src="./images/logo.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
      src="./images/fundo.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image"
     src="./images/logo.png"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
       
        </div>
    );
}

export default Home;
