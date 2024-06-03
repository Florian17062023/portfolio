import React from 'react';
import Projets from '../composents/Projets';
import SearchBar from '../composents/SearchBar';
import styles from '../styles/projetsPage.module.css';

const ProjetsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <div className={styles.projetsContainer}>
        <Projets />
      </div>
    </div>
  );
};

export default ProjetsPage;
