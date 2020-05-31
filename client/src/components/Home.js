import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Image1 from "../CarouselImages/Image1.jpg";
import Image2 from "../CarouselImages/Image2.jfif";
import Image3 from "../CarouselImages/Image3.jpg";
import Image4 from "../CarouselImages/Image4.jpg";
import Image5 from "../CarouselImages/Image5.jfif";
import Image6 from "../CarouselImages/Image6.jpg";

export default function Home() {
  const Images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div>
      <Container>
        <Carousel id="carousel">
          {Images.map((image, i) => {
            return (
              <Carousel.Item key={i} className="carousel-item">
                <img className="d-block w-100" src={image} alt="First slide" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}
