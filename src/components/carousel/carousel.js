import Carousel from "react-bootstrap/Carousel";
import "../../../src/components/carousel/carousel.css";
import Image1 from "../../images/carouselimg1.jpg";
import Image2 from "../../images/carouselimg2.jpg";
import Image3 from "../../images/carouselimg3.jpg";
import Image4 from "../../images/carouselimg4.jpg";

const carousel = () => {
  return (<div className='container'>
    <Carousel className="carousel col-12">
      <Carousel.Item className="caro">
        <img className="d-block w-100" src={Image1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro">
        <img className="d-block w-100" src={Image2} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro">
        <img className="d-block w-100" src={Image3} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caro"> 
        <img className="d-block w-100" src={Image4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default carousel;
