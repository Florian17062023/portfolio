// src/components/About.js
import React from 'react';
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>About</h2>
        <p className={styles.paragraph}>
        Ayant développé une passion pour le développement depuis ces derniers mois, je cherche une première expérience professionnelle pour mettre en pratique les compétences que j'ai acquises lors de ces derniers mois et apprendre le métier de développeur web et mobile.
        </p>
        
      </div>
      <div className={styles.rightContent}>
        <img src="/profiles.JPG" alt="Profile" />
      </div>
    </div>
  );
};

export default About;
