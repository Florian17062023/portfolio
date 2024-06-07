import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <h2 className={styles.title}>About</h2>
        <p className={styles.paragraph}>
          Après presque une décennie enrichissante dans le monde de la finance, où j'ai pu travailler avec différents acteurs majeurs de l'entreprise, j'ai décidé d'embrasser un nouveau défi.<br /><br />
          Ayant été, depuis le lycée, motivé par mon intérêt pour la programmation hérité de ma formation du baccalauréat, j'ai entrepris une reconversion professionnelle dans le développement web et mobile.<br /><br />
          C'est l'un des meilleurs choix de ma vie, connaissant l'essor et la perpétuelle évolution du numérique.<br /><br />
          Méticuleux, sérieux et curieux, toujours prêt à relever de nouveaux défis, cette transition vers le monde du développement web et mobile symbolise non seulement un retour à mes premières passions, mais aussi une ouverture vers de nouvelles aventures professionnelles et créatives en tant que Développeur web et mobile Junior.
        </p>
        <button className={styles.button}>
          <a
            href="/CV Florian Serrault.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger mon CV
          </a>
        </button>
      </div>
      <div className={styles.rightContent}>
        <img src="/profiles.jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default About;
