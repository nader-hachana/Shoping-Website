import React from "react";
import { Carousel, Jumbotron, Button, Container, ButtonGroup} from "react-bootstrap";
import image1 from "../image1.png";
import image4 from "../image4.png";
import image3 from "../image3.png";
import HomeCards from "../Cards/HomeCards.js";


function Homepage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          marginBottom: 50,
          
        }}
      >
        <Jumbotron style={{ background: "#C7C6C1", textAlign: "center", width:800}}>
          <Container>
            <h1>Clothes Store</h1>
            <p>
              Welcome To the the <b>#N°1 Selling</b> Clothes store in Tunisia.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Container>
        </Jumbotron>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}
      >
        <Carousel style={{ width: "50rem", marginBottom: 50 }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="First Slide"
              height={600}
            />
            <Carousel.Caption className="bg-dark">
              <h3 className="black">Welcome To Our Clothes Store</h3>
              <p>We provide have the top clothing quality out there</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image4}
              alt="Second Slide"
              height={600}
            />
            <Carousel.Caption className="bg-dark">
              <h3>Here we Have clothes for Men</h3>
              <p>
                All Men wear are available in our store and you can shippable
                them everywhere
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Third Slide"
              height={600}
            />
            <Carousel.Caption className="bg-dark">
              <h3>As well for Women</h3>
              <p>Find your unique style </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <HomeCards />
    </div>
  );
}
export default Homepage;
