import React from 'react';
import styles from '../styles/saturnRing.module.css';

const SaturnRing = ({ images }) => {
  return (
    <div className={styles.saturnRingWrapper}>
      <div className={styles.saturnRing}>
        {images.map((image, index) => (
          <div key={index} className={styles.saturnRingItem} style={{ transform: `rotateY(${index * (360 / images.length)}deg) translateZ(300px)` }}>
            <img src={image} alt={`Saturn Effect ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaturnRing;
