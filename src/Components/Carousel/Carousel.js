import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./Carousel.css";
import Image from 'next/image';

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide container"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
      
        <div className="carousel-item">
          <div className="row carousel-row">
            <div className="col-md-12 col-lg-5">
              <Image
                src="/Assets/section.png"
                alt="Sample Image 2"
                layout="responsive"
                width={500}
                height={500}
                className="carousel-img"
              />
            </div>
            <div className="col-md-12 col-lg-5 d-flex flex-column justify-content-center carousel-content">
              <h2 className="carousel-title">Professional Skin care for Visible Results</h2>
              <p className="carousel-body-text">
              Achieve smoother, clearer, and healthier skin with our expert treatments.
              </p>
              <a href="#" className="btn btn-primary">
        Book Now
              </a>
            </div>
          </div>
        </div>
        {/* Add more carousel items as needed */}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}