// src/components/About.js
import React from 'react';
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>À propos de moi</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in orci fringilla, auctor eleifend odio rutrum. 
          Mauris ac sapien a arcu tincidunt malesuada. Integer id felis dui. Sed euismod nunc id odio tincidunt rhoncus.
        </p>
        <p className={styles.paragraph}>
          Vestibulum fermentum urna eu ipsum consectetur, vel elementum justo faucibus. Integer non odio id risus sollicitudin iaculis a id lorem.
          Cras ac urna suscipit, vestibulum magna vel, dapibus lacus.
        </p>
      </div>
      <div className={styles.rightContent}>
        <img src="/profiles.jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default About;
