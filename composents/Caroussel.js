import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from '../styles/caroussel.module.css';

const Caroussel = () => {
  return (
    <div className={styles.containerRose}>
      <div className={styles.carouselContainer}>
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            focus: 'center',
            arrows: true,
            pagination: true,
            drag: 'free',
            gap: '1rem',
          }}
          aria-label="Mes images préférées"
        >
          <SplideSlide>
            <img
              className={styles.carouselImage}
              src="/animalcoeur.jpg"
              alt="slide 1"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className={styles.carouselImage}
              src="/vache.jpg"
              alt="slide 2"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className={styles.carouselImage}
              src="/lapin.jpg"
              alt="slide 3"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className={styles.carouselImage}
              src="/vachenoire.jpg"
              alt="slide 4"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Caroussel;
