import React from "react";


import img1 from "../images/home3_img1.png"
import img2 from "../images/home3_img2.png"
import img3 from "../images/home3_img3.png"
import "./home3.css";

import Card from "react-bootstrap/Card";

function home3() {
  return (
    <div className="container">
      
       
        <h6 className="h6">Top Selling</h6>
        <h2 className="h2">Top Destination</h2>
       
        
      <div  className="row2">
        {[
          {
            id: 1,
            image: img1,
            title: "Interface Design",
            content:
              "203 Fake St. Mountain View, San Francisco, California, USA",
          },
          {
            id: 2,

            image: img2,
            title: "Media Strategy",
            content:
              "A small river named Duden flows by their place and supplies",
          },
          {
            id: 3,
            
            image: img3,
            title: "Mobile App",
            content:
              "A small river named Duden flows by their place and supplies.",
          },
       
        ].map((features) => (
          <Card className="home3card">
            <Card.Img className="home3images" src={features.image} />
            
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
export default home3;
