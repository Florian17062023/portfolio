import React from 'react';
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/projets.module.css';
import ProductPopup from './Popup';

const Projets = ({ searchTerm }) => {
  const [selectedId, setSelectedId] = React.useState(null);

  const items = [
    { id: 1, title: 'Le panda', image: '/panda.jpg', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { id: 2, title: 'Le cochon', image: '/cochon.jpg', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 3, title: 'Le dragon', image: '/dragon2.jpg', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.' },
    { id: 4, title: 'Le lapin', image: '/lapin.jpg', description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
    { id: 5, title: 'Lapin rose Coeur', image: '/animalcoeur.jpg', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 6, title: 'La souris', image: '/souris.jpg', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 7, title: "L'elephant", image: '/elephant.jpg', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 8, title: 'La vache orange', image: '/vache2.jpg', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 9, title: 'La vache', image: '/vachenoire.jpg', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 10, title: 'Le tigre', image: '/tigre.jpg', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 11, title: 'Sac', image: '/sac.JPG', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 12, title: 'Maillot Blanc', image: '/maillotBlanc.JPG', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 13, title: 'Maillot Bleu', image: '/maillotBleu.JPG', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 14, title: 'Tshirt Plage', image: '/tshirtplage.JPG', description: 'This card has supporting text below as a natural lead-in to additional content.' },
    { id: 15, title: 'Haut Rose', image: '/hautRose.JPG', description: 'This card has supporting text below as a natural lead-in to additional content.' },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClosePopup = () => {
    setSelectedId(null);
  };

  return (
    <>
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        {filteredItems.map((item) => (
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

      <AnimatePresence>
        {selectedId && (
          <ProductPopup item={items.find((item) => item.id === selectedId)} onClose={handleClosePopup} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projets;