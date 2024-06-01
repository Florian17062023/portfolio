import React from 'react';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
    </header>
  );
};

export default Header;
