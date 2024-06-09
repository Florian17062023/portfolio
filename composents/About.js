import React from "react";
import { CButton } from "@coreui/react";
import styles from "../styles/about.module.css";

const About = () => {

  const handleCVClick = () => {
    console.log('Button clicked');
    window.open('/CVFlorianSerrault.pdf', '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>About</h2>
        <p className={styles.paragraph}>
          Après près de dix ans d'expérience enrichissante dans le domaine de la finance, où j'ai collaboré avec de nombreux acteurs majeurs, j'ai décidé de relever un nouveau défi professionnel.
          <br />
          <br />
          Depuis le lycée, mon intérêt pour la programmation, nourri par ma formation au baccalauréat, n'a cessé de croître. Cet enthousiasme m'a conduit à entreprendre une reconversion dans le développement web et mobile, un domaine en pleine expansion et constamment en évolution.
          <br />
          <br />
          Cette décision s'est avérée être l'une des meilleures de ma vie. Rigoureux, sérieux et curieux, je suis toujours prêt à relever de nouveaux défis. Cette transition vers le développement web et mobile représente non seulement un retour à mes premières passions, mais aussi une ouverture vers de nouvelles opportunités professionnelles et créatives en tant que Développeur Web et Mobile Junior.
        </p>

        <CButton className={styles.button} onClick={handleCVClick}>
          Télécharger mon CV
        </CButton>
        
      </div>
      <div className={styles.rightContent}>
        <img src="/profiles.jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default About;
