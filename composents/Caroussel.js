import React from 'react';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import styles from '../styles/caroussel.module.css';

const Caroussel = () => {
  return (
    <div className={styles.carouselContainer}> 
      <CCarousel controls indicators dark>
        <CCarouselItem>
          <CImage
            className={styles.carouselImage}
            src={'/panda.jpg'}
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
      </CCarousel>
    </div>
  );
};

export default Caroussel;