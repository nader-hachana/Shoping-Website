import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import image5 from "../image5.png";
import image6 from "../image6.png";
import image7 from "../image7.png";

export default function HomeCards() {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      <CardDeck style={{display:"flex",width: "80rem"}}>
        <Card style={{marginRight:100,borderWidth:10,borderColor:"#C7C6C1"}}>
          <Card.Img variant="top" src={image5} />
          <Card.Body style={{textAlign:"center"}}>
            <Card.Title>Crop-Top</Card.Title>
            <Card.Text>Crop-Top for all sizes available in all of our stores</Card.Text>
            <p>
            <Button variant="primary">Buy Now</Button>
          </p>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{marginRight:100,borderWidth:10,borderColor:"#C7C6C1"}}>
          <Card.Img variant="top" src={image6} />
          <Card.Body style={{textAlign:"center"}}>
            <Card.Title>Jakcet</Card.Title>
            <Card.Text>Jacket for all sizes available in all of our stores</Card.Text>
            <p>
            <Button variant="primary">Buy Now</Button>
          </p>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={{borderWidth:10,borderColor:"#C7C6C1"}}>
          <Card.Img variant="top" src={image7} />
          <Card.Body style={{textAlign:"center"}}>
            <Card.Title>Shoes</Card.Title>
            <Card.Text>Shoes for all sizes available in all of our stores</Card.Text>
            <p>
            <Button variant="primary">Buy Now</Button>
          </p>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        
      </CardDeck>
    </div>
  );
}
