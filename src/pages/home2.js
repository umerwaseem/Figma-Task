import React from "react";
import './home2.css'

import Card1 from "../images/home2card.png";


import Card from "react-bootstrap/Card";

function home2(props) {
  return (
    <div className="container">
      
       
        <h6 className="h6">CATEGORY</h6> 
        <h2 className="h2">We Offer Best Services</h2>
       
        
      <div  className="row2" >
        {[
          {
            id: 1,
            Img: { Card1 },
            title: "Interface Design",
            content:
              "203 Fake St. Mountain View, San Francisco, California, USA",
          },
          {
            id: 2,

            Img: { Card1 },
            title: "Media Strategy",
            content:
              "A small river named Duden flows by their place and supplies",
          },
          {
            id: 3,

           
            title: "Mobile App",
            content:
              "A small river named Duden flows by their place and supplies.",
          },
          {
            id: 4,

            Img: { Card1 },
            title: "Coding",
            content:
              "A small river named Duden flows by their place and supplies.",
          },
        ].map((features) => (
          <Card >
            <Card.Img className="home2card" src={features.Img} />
           
            <Card.Body>
              <Card.Title>{features.title}</Card.Title>
              <Card.Text>{features.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default home2;
