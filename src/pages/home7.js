import React from "react";
import "./home7.css";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
const home7 = () => {
  return (
    <Container className="homecontainer">
      
        <Row>
          <h3>
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h3>
        </Row>
        <Row>
          <Form>
            <Form.Group >
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Button className="formbutton" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
    
    </Container>
  );
};

export default home7;
