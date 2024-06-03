import React from 'react';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import styles from '../styles/caroussel.module.css';
import 'animate.css';

const Caroussel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h2 className={`${styles.carousselTitle} animate__animated animate__zoomIn`}>Chels_arts88</h2>
        <p className={`${styles.carousselDescription} animate__animated animate__zoomIn`}>Texte d'explication du carrousel</p>
      </div>
      <div className={styles.carouselContainer}>
        <CCarousel controls indicators dark>
          <CCarouselItem>
            <CImage
              className={styles.carouselImage}
              src={'/animalcoeur.jpg'}
              alt="slide 1"
            />
            <CCarouselCaption className="d-none d-md-block">
              
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className={styles.carouselImage}
              src={'/vache.jpg'}
              alt="slide 2"
            />
            <CCarouselCaption className="d-none d-md-block">
              
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className={styles.carouselImage}
              src={'/lapin.jpg'}
              alt="slide 3"
            />
            <CCarouselCaption className="d-none d-md-block">
              
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className={styles.carouselImage}
              src={'/vachenoire.jpg'}
              alt="slide 4"
            />
            <CCarouselCaption className="d-none d-md-block">
              
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  );
};

export default Caroussel;