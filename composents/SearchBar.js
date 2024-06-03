import React, { useState } from 'react';
import styles from '../styles/searchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Rechercher un projet..."
        value={searchTerm}
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