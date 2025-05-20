import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const experiences = [
    {
      id: 1,
      title: "Stagiaire",
      date: "juin 2024 - sept. 2024 · 4 mois",
      company: "CNRS",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQHWVkPoemGy9A/company-logo_100_100/company-logo_100_100/0/1697807244531/cnrs_logo?e=1740009600&v=beta&t=JaCvM-q1zjOnq76rGhNPz-eQuzqq3f_Ca1z2YaxUNpo",
      description: "Contribution à un projet de recherche en inspection non-destructive. Développement d'algorithmes et analyse de données."
    },
    {
      id: 2,
      title: "Data Science Research Collaborator",
      date: "déc. 2023 - mai 2024 · 6 mois",
      company: "LaBRI",
      imageUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQEBh8vL94WjaA/company-logo_100_100/company-logo_100_100/0/1676900739426/laboratoire_bordelais_de_recherche_en_informatique_labri__logo?e=1740009600&v=beta&t=H8FmxBD0LGBFOlKQh7hPecqTRSRnA6EOMOQLZDeLXXU",
      description: "Recherche en science des données et apprentissage automatique. Collaboration avec une équipe de chercheurs sur des projets innovants."
    }
  ];

  return (
    <section 
      id="experience"
      className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white text-gray-800 dark:bg-[#01161E] dark:text-[#AEC3B0]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Expérience Professionnelle</h2>
          <div className="w-20 h-1 bg-indigo-400 dark:bg-indigo-400 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Ligne de timeline */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-6 top-0 h-full w-1 bg-indigo-400 bg-opacity-40 dark:bg-indigo-400 origin-top"
          />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Point sur la timeline */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-indigo-700 border-4 border-indigo-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white dark:bg-[#EFF6E0]"></div>
                  </div>
                </div>

                {/* Carte d'expérience */}
                <div className="bg-white dark:bg-gray-800/80 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-400 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={experience.imageUrl} 
                        alt={`Logo ${experience.company}`} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-black dark:text-white">{experience.title}</h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium">{experience.company}</p>
                        </div>
                        <p className="text-black dark:text-white text-sm sm:text-base">{experience.date}</p>
                      </div>
                      <div className="mt-3 pt-3 border-t border-indigo-400">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;