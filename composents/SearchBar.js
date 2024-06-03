import React from 'react';
import styles from '../styles/searchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Rechercher un projet..."
        onChange={handleChange}
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;