import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import kfcImg from '/icons/Brands/toyroom1.jpg';
import pizzahutImg from '/icons/Brands/Tryst .jpg';
import scoopsImg from '/icons/Brands/toyroom2.jpg';



import Tryst from '/images/Food/Tryst.png';
import toyroom1 from '/images/Food/toyroom1.jpg';
import toyroom2 from '/images/Food/toyroom2.jpg';
import chickenSCImg from '/images/Food/chicken.png';
import toyroom3 from '/images/Food/toyroom3.jpg';
import toyroom4 from '/images/Food/toyroom4.jpg';
import dragonfly from '/images/Food/dragonfly.jpg';
import pizzaSCImg from '/images/Food/pizza.png';

const Img = styled.img`
  cursor: pointer;
  display: block;
  width: 250px;
  height: 250px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    backface-visibility: visible;
  }
`;

const Wrapper = styled.header`
  max-width: 100%;
  min-width: 100%;
  position: relative;
  margin: auto;
  margin-top: 60px;
  padding: 20px 0;
  background: #fff;
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

function Promotions() {
  return (
    <Wrapper>
      <div style={{ background: "#171a29", padding: "30px 20px" }}>
        <div className="container my-3">
          <Slider {...settings}>
            <div className="col">
              <Img
                src= {Tryst}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
               src= {toyroom3}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src={dragonfly}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {toyroom2}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
               src= {toyroom4}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {toyroom2}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {toyroom1}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {Tryst}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {toyroom2}
                alt="promotion img"
              />
            </div>
            <div className="col">
              <Img
                src= {dragonfly}
                alt="promotion img"
              />
            </div>
            <div className="col">
                          <Img
                              src= {toyroom2}
               
                alt="promotion img"
              />
            </div>
            <div className="col">
                          <Img
                              src= {toyroom2}
               
                alt="promotion img"
              />
            </div>
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
}

export default Promotions;
