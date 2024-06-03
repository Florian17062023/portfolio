import React from 'react';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { motion } from 'framer-motion';
import styles from '../styles/popupStyle.module.css';

const ProductPopup = ({ item, onClose }) => {
  return (
    <motion.div
      layoutId={`card-${item.id}`}
      className={styles.popupContainer}
    >
      <div className={styles.popupContent}>
        <div className={styles.closeButton} onClick={onClose}>
          &times;
        </div>
        <div className={styles.imageContainer}>
          {/* Ici, vous pouvez ajouter le carrousel d'images */}
          <CCardImage
            orientation="top"
            src={item.image}
            style={{ maxWidth: '100%', height: 'auto' }}
            className={styles['card-img-top']}
          />
        </div>
        <div className={styles.contentContainer}>
          <CCardBody className={styles['card-body']}>
            <CCardTitle className={styles['card-title']}>{item.title}</CCardTitle>
            <CCardText className={styles['card-text']}>{item.description}</CCardText>
            <div>
              <label htmlFor="quantity">Quantité :</label>
              <select id="quantity" name="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <button className={styles.buyButton}>Je veux</button>
          </CCardBody>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPopup;