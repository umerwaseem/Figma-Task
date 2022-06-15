import React from 'react';
import './brand.css'
import Card from "react-bootstrap/Card";
import Card1 from "../images/home2card.png";
const brand = () => {
    return <div className="container">
              <div  className="row2" >
        {[
        {
          id: 1,
          Img: <Card1 />,
          },
        {
          id: 2,
          Img: <Card1 />,
            },
        {
          id: 3,
          Img:< Card1 />,
          },
        {
          id: 4,
          Img: <Card1 />,
           },
      ].map((features) => (
        <Card  className="brand-card">
        <Card.Img variant="top" src={features.Img}/>
        
        </Card>
      ))}

</div>
    </div>;
}


export default brand;