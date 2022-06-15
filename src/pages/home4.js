import React from 'react';
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const home4 = () => {
    return <Container className="home4">
    <Row>
      <Col><h6>TESTIMONIALS</h6>
      <h2>What People say about us</h2></Col>
      <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   </Card.Body>
</Card></Col>
    </Row>
    </Container>
}



export default home4;