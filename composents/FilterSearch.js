import React from 'react';
import { CFormSelect } from '@coreui/react';

const FilterSearch = ({ onCategorySelect }) => {
  const handleCategorySelect = (event) => {
    const selectedCategory = event.target.value;
    onCategorySelect(selectedCategory);
  };

  return (
    <CFormSelect
      size="sm"
      className="mb-3"
      aria-label="Filtre par catégorie"
      onChange={handleCategorySelect}
    >
      <option value="">Toutes les catégories</option>
      <option value="Animaux">Animaux</option>
      <option value="Vetements">Vêtements</option>
      <option value="Accessoires">Accessoires</option>
    </CFormSelect>
  );
};

export default FilterSearch;