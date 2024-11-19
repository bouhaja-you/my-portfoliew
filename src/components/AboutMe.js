import React from 'react';

const AboutMe = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-24" id='about'>
      <h2 className="text-[#0e141b] dark:text-[#EFF6E0] text-[22px] sm:text-[24px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        About Me
      </h2>
      <p className="text-[#0e141b] dark:text-[#EFF6E0] text-base sm:text-lg font-normal leading-normal pb-3 pt-1">
        Actuellement stagiaire chez CNRS, je contribue à un projet de recherche en inspection non-destructive, développant des flux de travail pour le logiciel ATHENA. Mon cursus en cours à ENSEIRB-MATMECA en informatique, prévoyant l'obtention de mon diplôme d'ingénieur en 2025, m’a permis d'acquérir des compétences avancées en Python, essentielles pour la gestion des données scientifiques.
        <br />
        <br />
        Mon expérience récente en tant que collaborateur de recherche au LaBRI m’a impliqué dans l'analyse de matrices de confusion dans l’apprentissage supervisé. Grâce à ces projets, notre équipe a pu explorer de nouvelles stratégies pour l'analyse des données. Je suis motivé par la possibilité d'apporter des perspectives diverses et une expertise en traitement de signaux à notre organisation, collaborant étroitement avec des partenaires industriels pour avancer dans des domaines technologiques de pointe.
      </p>
    </div>
  );
};

export default AboutMe;
