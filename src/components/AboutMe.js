import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import image2 from './2.jpg';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Variantes d'animation pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Variantes d'animation pour les éléments enfants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Variantes d'animation pour les indicateurs visuels
  const indicatorVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  return (
    <section 
      id='about' 
      className="px-4 sm:px-8 lg:px-16 pt-24 pb-16"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        {/* En-tête de section avec indicateur visuel */}
        <div className="flex items-center mb-8">
          <motion.div variants={itemVariants} className="mr-4">
            <h2 className="text-gray-800 dark:text-white text-3xl sm:text-4xl font-bold leading-tight">
              À propos de moi
            </h2>
          </motion.div>
          <motion.div 
            variants={indicatorVariants}
            className="h-0.5 bg-indigo-500 dark:bg-indigo-400 flex-grow origin-left"
          />
        </div>

        {/* Contenu principal avec photographie et bio */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-2/5"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={image2}
                  alt="Mohammed Bouhaja"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="w-full md:w-3/5"
          >
            <div className="space-y-4 text-gray-700 dark:text-gray-200">

              <p className="text-lg leading-relaxed">
                Développeur web full stack passionné par la technologie, je conçois des solutions innovantes en combinant une solide maîtrise du <span className="font-medium text-indigo-600 dark:text-indigo-400">backend</span> avec <span className="font-medium text-indigo-600 dark:text-indigo-400">Python</span>, <span className="font-medium text-indigo-600 dark:text-indigo-400">Django</span> et <span className="font-medium text-indigo-600 dark:text-indigo-400">Django Rest Framework</span>.
              </p>

              <p className="text-lg leading-relaxed mt-4">
                Côté frontend, je développe des interfaces modernes et interactives grâce à <span className="font-medium text-indigo-600 dark:text-indigo-400">React</span>, tout en maîtrisant les langages fondamentaux du web comme <span className="font-medium text-indigo-600 dark:text-indigo-400">HTML</span>, <span className="font-medium text-indigo-600 dark:text-indigo-400">CSS</span> et <span className="font-medium text-indigo-600 dark:text-indigo-400">JavaScript</span>.
              </p>

              <p className="text-lg leading-relaxed mt-4">
                Toujours en quête de défis, je m'intéresse activement à l'<span className="font-medium text-indigo-600 dark:text-indigo-400">intelligence artificielle</span>, et au <span className="font-medium text-indigo-600 dark:text-indigo-400">machine learning</span>.
              </p>



              <div className="pt-2">
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Éducation</h3>
                    <p className="text-gray-700 dark:text-gray-300">Étudiant en 1ère année à l'École Nationale des Sciences Appliquées (ENSA) Khénitra</p>

                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Localisation</h3>
                    <p className="text-gray-700 dark:text-gray-300">Kénitra, Maroc</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block mt-4"
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  Me contacter
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Cartes des intérêts/compétences */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {[
           {
            title: "Développement Frontend",
            description: "Création d'interfaces utilisateur modernes et réactives avec React, HTML, CSS et JavaScript.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="4" width="18" height="14" rx="2" ry="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20h8" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v4" />
          </svg>

            )
          },
          {
            title: "Développement Backend",
            description: "Conception d'API robustes et performantes avec Python, Django et Django Rest Framework.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <ellipse cx="12" cy="6" rx="9" ry="3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6v6c0 1.657 4.03 3 9 3s9-1.343 9-3V6" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6" />
          </svg>

            )
          },
          {
            title: "Gestion de versions",
            description: "Utilisation de Git et GitHub pour le versionnage de code, la collaboration et la gestion de projets.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="18" cy="6" r="3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="18" r="3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="6" r="3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9a9 9 0 01-9 9" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 15V9" />
          </svg>

            )
          }

          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800/80 rounded-xl p-6 shadow-md hover:shadow-xl dark:shadow-indigo-500/5 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-indigo-500 dark:text-indigo-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;