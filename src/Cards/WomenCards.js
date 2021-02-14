import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import image10 from "../image10.png";
import image11 from "../image11.png";
import image12 from "../image12.png";
import image13 from "../image13.png";
import image14 from "../image14.png";
import image15 from "../image15.png";
import "../components/Design.css";

export default function WomenCards() {
  return (
    <div className="grid">
      <Card style={{ width: "400px", borderWidth: 10,borderColor:"#C7C6C1" }}>
        <Card.Img variant="top" src={image10} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Shoes</Card.Title>
          <Card.Text>
            Shoes for all sizes available in all of our stores
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "400px", borderWidth: 10,borderColor:"#C7C6C1" }}>
        <Card.Img variant="top" src={image11} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Pants</Card.Title>
          <Card.Text>
            pants for all sizes available in all of our stores
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "400px", borderWidth: 10,borderColor:"#C7C6C1" }}>
        <Card.Img variant="top" src={image12} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Boots</Card.Title>
          <Card.Text>
            Boots for all sizes available in all of our stores
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "400px", borderWidth: 10,borderColor:"#C7C6C1" }}>
        <Card.Img variant="top" src={image13} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Leather-Jacket</Card.Title>
          <Card.Text>
            Leather-Jacket for all sizes available in all of our stores
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "400px", borderWidth: 10,borderColor:"#C7C6C1" }}>
        <Card.Img variant="top" src={image14} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Crop-top</Card.Title>
          <Card.Text>
            Crop-top for all sizes available in all of our stores
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "400px", borderWidth: 10,borderColor:"#C7C6C1" }}>
        <Card.Img variant="top" src={image15} />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>Skirt</Card.Title>
          <Card.Text>
            Skirt for all sizes available in all of our stores
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
