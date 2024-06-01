// components/Footer.js
import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://facebook.com" target="_blank" className={styles.link}>Facebook</a>
        <a href="mailto:contact@mywebsite.com" className={styles.link}>Email</a>
      </div>
    </footer>
  );
};

export default Footer;
