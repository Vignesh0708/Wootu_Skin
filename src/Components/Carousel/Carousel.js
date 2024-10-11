import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { strapi_url } from '@/common/utils';
import axios from 'axios';
export default function Carousel() {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios(`${strapi_url}/api/carousels?populate=*`);
        setCarouselItems(response.data.data); // Adjust if needed based on your API structure
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    };

    fetchCarouselData();
  }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
            <div className="row carousel-row">
              <div className="col-md-12 col-lg-5">
                {item.image.map((img, imgIndex) => (
                  <Image
                    key={img.id}
                    src={`${strapi_url}${img.url}`} // Use the full URL to the image
                    alt={img.name}
                    layout="responsive"
                    width={img.width}
                    height={img.height}
                    className="carousel-img"
                  />
                ))}
              </div>
              <div className="col-md-12 col-lg-5 d-flex flex-column justify-content-center carousel-content">
                <h2 className="carousel-title">{item.heading_text}</h2>
                <p className="carousel-body-text">{item.text}</p>
                <a href="#" className="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
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
