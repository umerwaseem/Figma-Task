import React from "react";
import "./home7.css";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
const home7 = () => {
  return (
    <div className=" homecontainer">
       
      <div className="subCol" >
       <Row className="my-5">
          <h3 className="my-5">
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </h3>
        
        
          <Form className='subcribtionForm'>
            <Form.Group >
              <Form.Control className='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Button className="formbutton" type="submit">
              Submit
            </Button>
          </Form>
       </Row>
        </div>
        <div className="divbtnSub">

</div>
       
    </div>
  );
};

export default home7;
