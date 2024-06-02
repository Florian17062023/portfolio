import React from 'react';
import styles from '../styles/caroussel.module.css';

const Carousel = ({ imageStyle }) => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      {/* The slideshow */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/image1.jpg" alt="Los Angeles" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src="/image2.jpg" alt="Chicago" style={imageStyle} />
        </div>
        <div className="carousel-item">
          <img src="/image3.jpg" alt="New York" style={imageStyle} />
        </div>
      </div>

      {/* Left and right controls */}
      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};

export default Carousel;
