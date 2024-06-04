import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CPagination, CPaginationItem } from '@coreui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/projets.module.css';
import ProductPopup from './Popup';
import FilterSearch from './FilterSearch';

const Projets = ({ searchTerm }) => {
  const [selectedId, setSelectedId] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;

  const items = [
    { id: 1, title: 'Le panda', image: '/panda.jpg', category: 'Animaux', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { id: 2, title: 'Le cochon', image: '/cochon.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 3, title: 'Le dragon', image: '/dragon2.jpg', category: 'Animaux', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.' },
    { id: 4, title: 'Le lapin', image: '/lapin.jpg', category: 'Animaux', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { id: 5, title: 'Lapin rose Coeur', image: '/animalcoeur.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 6, title: 'La souris', image: '/souris.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 7, title: "L'elephant", image: '/elephant.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 8, title: 'La vache orange', image: '/vache2.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 9, title: 'La vache', image: '/vachenoire.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 10, title: 'Le tigre', image: '/tigre.jpg', category: 'Animaux', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 11, title: 'Sac', image: '/sac.JPG', category: 'Accessoires', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 12, title: 'Maillot Blanc', image: '/maillotBlanc.JPG', category: 'Vetements', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 13, title: 'Maillot Bleu', image: '/maillotBleu.JPG', category: 'Vetements', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 14, title: 'Tshirt Plage', image: '/tshirtplage.JPG', category: 'Vetements', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 15, title: 'Haut Rose', image: '/hautRose.JPG', category: 'Vetements', description: 'This card has supporting text below as a natural lead-in to additional content.' },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredItems
    .filter((item) => {
      if (!selectedCategory) return true;
      return item.category === selectedCategory;
    })
    .slice(startIndex, endIndex);

  const handleClosePopup = () => {
    setSelectedId(null);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div>
        <FilterSearch onCategorySelect={handleCategorySelect} />
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {itemsToDisplay.map((item) => (
            <CCol xs key={item.id}>
              <motion.div
                layoutId={`card-${item.id}`}
                onClick={() => setSelectedId(item.id)}
                style={{ cursor: 'pointer' }}
              >
                <CCard className={`h-100 ${styles.card}`}>
                  <CCardImage orientation="top" src={item.image} className={styles['card-img-top']} />
                  <CCardBody className={styles['card-body']}>
                    <CCardTitle className={styles['card-title']}>{item.title}</CCardTitle>
                    <CCardText className={styles['card-text']}>{item.description.slice(0, 50)}...</CCardText>
                  </CCardBody>
                </CCard>
              </motion.div>
            </CCol>
          ))}
        </CRow>
      </div>

      <div className={styles['pagination-container']}>
        <CPagination
          aria-label="Exemple de navigation de page"
          activePage={activePage}
          pages={Math.ceil(
            filteredItems.filter((item) => {
              if (!selectedCategory) return true;
              return item.category === selectedCategory;
            }).length / itemsPerPage
          )}
          onActivePageChange={handlePageChange}
        >
          <CPaginationItem aria-label="Précédent" disabled={activePage === 1}>
            <span aria-hidden="true">«</span>
          </CPaginationItem>
          {Array.from(
            {
              length: Math.ceil(
                filteredItems.filter((item) => {
                  if (!selectedCategory) return true;
                  return item.category === selectedCategory;
                }).length / itemsPerPage
              )
            },
            (_, i) => (
              <CPaginationItem key={i + 1} active={i + 1 === activePage} onClick={() => handlePageChange(i + 1)}>
                {i + 1}
              </CPaginationItem>
            )
          )}
          <CPaginationItem
            aria-label="Suivant"
            disabled={
              activePage ===
              Math.ceil(
                filteredItems.filter((item) => {
                  if (!selectedCategory) return true;
                  return item.category === selectedCategory;
                }).length / itemsPerPage
              )
            }
          >
            <span aria-hidden="true">»</span>
          </CPaginationItem>
        </CPagination>
      </div>

      <AnimatePresence>
        {selectedId && (
          <ProductPopup item={items.find((item) => item.id === selectedId)} onClose={handleClosePopup} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projets;