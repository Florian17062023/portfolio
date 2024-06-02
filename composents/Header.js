import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <img src="/logo.png" alt="Logo" className={styles.logo} style={{ cursor: 'pointer' }} />
      </Link>
    </header>
  );
};

export default Header;
