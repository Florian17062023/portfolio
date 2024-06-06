import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from '../styles/navbar.module.css';
import {
  CSidebar,
  CSidebarHeader,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const Navbar = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Bienvenue sur mon portfolio', 'Je suis Florian ....', 'Je suis developpeur'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.heroSection}>
      <CSidebar className={`border-end ${styles.sidebar}`} colorScheme="dark">
        <CSidebarHeader className="border-bottom">
          {/* Utilisation de CSidebarBrand pour afficher le logo */}
          <CSidebarBrand>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </CSidebarBrand>
        </CSidebarHeader>
        <CSidebarNav>
          <CNavItem href="#" className={styles.navItem} activeClassName={styles.activeNavItem}>
            <CIcon customClassName="nav-icon" size="sm" /> Acceuil
          </CNavItem>
          <CNavItem href="#about" className={styles.navItem} activeClassName={styles.activeNavItem}>
            <CIcon customClassName="nav-icon" size="sm" /> About
          </CNavItem>
          <CNavItem href="#projects" className={styles.navItem} activeClassName={styles.activeNavItem}>
            <CIcon customClassName="nav-icon" size="sm" /> Projets
          </CNavItem>
        </CSidebarNav>
        <div className={styles.sidebarFooter}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className={styles.icon} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className={styles.icon} />
          </a>
        </div>
      </CSidebar>
      <div className={styles.heroContent}>
        <span ref={typedElement} className={styles.typedText}></span>
      </div>
    </div>
  );
};

export default Navbar;
