import React from "react";
import Col from "react-bootstrap/Col";
import "./home4.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel'
const home4 = () => {
  return (
    <div className="home4">
      <Row>
        <Col xs={6} md={4}>
          <h6>TESTIMONIALS</h6>
          <h2>What People say about us</h2>
        </Col>
        <Col xs={6} md={4}>
        <Carousel fade >
  <Carousel.Item >
    <img
      className="caroselImg"
      src="../../images/author1.png"
      alt="First slide"
    />
   <Card style={{ width: '25rem', height: '25rem' }}>
  <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">"Jadoo is recognized as one of the finest travel agency in the world. When it came to planning a trip, I found them to be dependable."</Card.Subtitle>
    <Card.Title>Kelly Willium</Card.Title>
    <Card.Text>
      SKhulna, Bangladesh
    </Card.Text>
   </Card.Body>
</Card>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="caroselImg"
      src="../../images/author2.png"
      alt="Second slide"
    />

<Card style={{ width: '18rem', height: '30rem' }}>
  <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</Card.Subtitle>
    <Card.Title>Mike taylor</Card.Title>
    <Card.Text>
    Lahore, Pakistan
    </Card.Text>
    </Card.Body>
</Card>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="caroselImg"
      src="../../images/author3.png"
      alt="Third slide"
    />

<Card style={{ width: '18rem', height: '30rem'}}>
  <Card.Body>
    <Card.Subtitle className="mb-2 text-muted">"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."</Card.Subtitle>
    <Card.Title>Kelly Willium</Card.Title>
    <Card.Text>
    Khulna, Bangladesh
    </Card.Text>
   
  </Card.Body>
</Card>
  </Carousel.Item>
</Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default home4;
