import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import { FiChevronDown } from 'react-icons/fi';
import styles from '../styles/projets.module.css';

const Projets = () => {
  const items = [
    { id: 1, title: 'Mymoviz', image: '/Mymoviz.PNG', description: "My Moviz est un projet d'appel API pour l'affichage des dernières sorties. Il permet à l'utilisateur d'ajouter des films à une liste de favoris et de les noter.", url: 'https://my-moviz-three.vercel.app/' },
    { id: 2, title: 'ChelsArt', image: '/ChelsArt88.png', description: "Chels Art est un site vitrine présentant des créations crochet. Les utilisateurs peuvent découvrir divers projets artistiques.", url: 'https://chelsart88.vercel.app/' },
    { id: 3, title: 'CryptoDashboard', image: '/CryptoDashboard.PNG', description: "CryptoDashboard est une plateforme en ligne pour suivre l'évolution des portefeuilles cryptographiques, offrant une vision complète des investissements.", video: '/CryptoDashBoard.mp4' },
    { id: 4, title: 'Locapic', image: '/locapic.PNG', description: "Le projet 'Locapic' est une application de géolocalisation qui a pour but d'enregister les différentes localisations de l'utilisateur.", video: '/locapic_demo.mp4' },
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const handleDemoClick = (url) => {
    window.open(url, '_blank');
  };

  const toggleDescription = (id) => {
    setExpandedDescriptions({
      ...expandedDescriptions,
      [id]: !expandedDescriptions[id],
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projets</h1>
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        {items.map((item) => (
          <CCol xs key={item.id}>
            <CCard className={`h-100 ${styles.card}`}>
              {item.image && (
                <CCardImage orientation="top" src={item.image} className={styles['card-img-top']} />
              )}
              <CCardBody className={styles['card-body']}>
                <CCardTitle className={styles['card-title']}>{item.title}</CCardTitle>
                <div className={styles.descriptionContainer}>
                  <CCardText className={`${styles['card-text']} ${expandedDescriptions[item.id] ? styles.expanded : ''}`}>
                    {item.description}
                  </CCardText>
                  {item.description.length > 100 && (
                    <div className={styles.toggleDescription} onClick={() => toggleDescription(item.id)}>
                      <FiChevronDown />
                    </div>
                  )}
                </div>
                <CButton className={styles.demoButton} onClick={() => handleDemoClick(item.video || item.url)}>
                  Demo
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </div>
  );
};

export default Projets;
