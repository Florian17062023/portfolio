
import React from 'react';
import Projets from '../composents/Projets';
import About from '../composents/About';
import Navbar from '../composents/Navbar';
import styles from '../styles/projetsPage.module.css';
import SaturnRing from '../composents/SaturnRing';


const HomePage = () => {
  const images = [
    '/css.png',
    '/expressjs.png',
    '/figma.png',
    '/github.png',
    '/html.png',
    '/javascript.png',
    '/mongo-db.png',
    '/nodejs.png',
    '/react.png',
    '/typescript.png',
    '/vscode.png',
    '/reactnative.png',
  ];
  

  return (
    <div className={styles.container}>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="saturnEffect">
        <SaturnRing images={images} />
      </div>
      <div id="projects">
        <Projets />
      </div>
    </div>
  );
};

export default HomePage;