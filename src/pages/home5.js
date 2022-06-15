import React from 'react';
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const home5 = () => {
    return <Container>
    <Row>
      <Col>
      <p>Easy and Fast</p>
      <h2>Book Your Next Trip In 3 Easy Steps</h2>
      <Row><p>Choose Destination</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p></Row>
      <Row><p>Make Payment</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p></Row>
      <Row><p>Reach Airport on Selected Date</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p></Row></Col>
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



export default home5;