import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="https://www.instagram.com/chels_arts88?igsh=MW5zYXJocDU4dDE1dQ==" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <img src="/instagram.jpg" alt="Instagram" className={styles.icon} />
        </a>
        <a href="mailto:xx@gmail.com" className={styles.link}>
          <img src="/email.jpg" alt="Email" className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;