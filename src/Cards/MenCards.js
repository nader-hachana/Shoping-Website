import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import image16 from "../image16.png"
import image17 from "../image17.png"
import image18 from "../image18.png"
import image19 from "../image19.png"
import image20 from "../image20.png"
import image21 from "../image21.png"
import "../components/Design.css"
export default function MenCards() {
    return (
    <div className="grid">
        <Card style={{ width: '400px',borderWidth:10,borderColor:"#C7C6C1" }}>
            <Card.Img variant="top" src={image16} />
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title>Jeans</Card.Title>
                <Card.Text>Jeans for all sizes available in all of our stores</Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '400px',borderWidth:10,borderColor:"#C7C6C1" }}>
            <Card.Img variant="top" src={image17} />
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title>Denim-Shirt</Card.Title>
                <Card.Text>Denim-Shirt for all sizes available in all of our stores</Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '400px',borderWidth:10,borderColor:"#C7C6C1" }}>
            <Card.Img variant="top" src={image18} />
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title>Chelsea-Boots</Card.Title>
                <Card.Text>Chelsea-Boots for all sizes available in all of our stores</Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '400px',borderWidth:10,borderColor:"#C7C6C1" }}>
            <Card.Img variant="top" src={image19} />
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title>Sneakers</Card.Title>
                <Card.Text>Sneakers for all sizes available in all of our stores</Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '400px',borderWidth:10,borderColor:"#C7C6C1" }}>
            <Card.Img variant="top" src={image20} />
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title>Jacket</Card.Title>
                <Card.Text>Jacket for all sizes available in all of our stores</Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '400px',borderWidth:10,borderColor:"#C7C6C1" }}>
            <Card.Img variant="top" src={image21} />
            <Card.Body style={{textAlign:"center"}}>
                <Card.Title>Shirt</Card.Title>
                <Card.Text>Shirt for all sizes available in all of our stores</Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
    </div>
        
)
}