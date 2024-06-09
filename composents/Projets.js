import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import styles from '../styles/projets.module.css';

const Projets = () => {
  const items = [
    { id: 1, title: 'Mymoviz', image: '/Mymoviz.PNG', description: "My Moviz est un projet d'appel API pour l'affichage des dernières sorties.<br>Il permet à l'utilisateur d'ajouter des films à une liste de favoris et de les noter.<br><br><br>Technologies utilisées : React, Redux, API REST", url: 'https://my-moviz-three.vercel.app/' },
    { id: 2, title: 'ChelsArt', image: '/ChelsArt88.png', description: "Chels Art est un site vitrine présentant des créations crochet.<br>Les utilisateurs peuvent découvrir divers projets artistiques.<br><br><br>Technologies utilisées : Next.js, CSS, React", url: 'https://chelsart88.vercel.app/' },
    { id: 3, title: 'CryptoDashboard', image: '/CryptoDashboard.PNG', description: "CryptoDashboard est une plateforme en ligne pour suivre l'évolution des portefeuilles cryptographiques,<br>offrant une vision complète des investissements.<br><br><br>Technologies utilisées : Next.js, Chart.js, MongoDB, Node.js, CSS", video: '/CryptoDashBoard.mp4' },
    { id: 4, title: 'Locapic', image: '/locapic.PNG', description: "Le projet 'Locapic' est une application de géolocalisation qui a pour but d'enregister les différentes localisations de l'utilisateur.<br><br><br>Technologies utilisées : React Native , Redux, Express , Node JS<br><br><br>", video: '/locapic_demo.mp4' },
  ];

  const [openedProject, setOpenedProject] = useState(null);

  const handleDemoClick = (url) => {
    window.open(url, '_blank');
  };

  const openProject = (id) => {
    if (openedProject === id) {
      setOpenedProject(null);
    } else {
      setOpenedProject(id);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        {items.map((item) => (
          <CCol xs key={item.id} className={openedProject === item.id ? styles.opened : ''}> 
            <CCard className={`h-100 ${styles.card}`}>
              {item.image && (
                <CCardImage orientation="top" src={item.image} className={styles['card-img-top']} />
              )}
              <CCardBody className={styles['card-body']}>
                <CCardTitle className={styles['card-title']} onClick={() => openProject(item.id)}>{item.title}</CCardTitle>
                <CCardText className={styles['card-text']} dangerouslySetInnerHTML={{ __html: item.description }}>
                </CCardText>
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
