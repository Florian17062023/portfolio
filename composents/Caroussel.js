import "../styles/caroussel.module.css";

function CarouselComponent() {
  return (
    <div id="demo" className="carousel slide custom-carousel" data-ride="carousel">
      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} className="active" />
        <li data-target="#demo" data-slide-to={1} />
        <li data-target="#demo" data-slide-to={2} />
      </ul>
      {/* The slideshow */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/image1.jpg" alt="Los Angeles" className="d-block w-100 custom-img" />
        </div>
        <div className="carousel-item">
          <img src="/image2.jpg" alt="Chicago" className="d-block w-100 custom-img" />
        </div>
        <div className="carousel-item">
          <img src="/image3.jpg" alt="New York" className="d-block w-100 custom-img" />
        </div>
      </div>
      {/* Left and right controls */}
      <a className="carousel-control-prev custom-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next custom-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  );
}

export default CarouselComponent;

