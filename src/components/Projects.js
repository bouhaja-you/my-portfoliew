import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import viruswareImage from './virusware.jpeg';

const Projects = () => {
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

  const projects = [
  {
    title: "🚀 VirusWare : Plateforme de détection de malware innovante",
    description: `
      VirusWare offre la possibilité :
      ✅ D’analyser des fichiers pour détecter les malwares
      ✅ D’afficher les résultats en temps réel
      ✅ De gérer l’historique des analyses

      Un projet alliant cybersécurité et intelligence artificielle pour une détection plus fiable !
    `,
    date: "Mai 2024 - Aujourd'hui",
    imageUrl: viruswareImage,
    skills: ["JavaScript", "HTML", "Python", "Machine Learning", "Cybersecurity"]
  },
  {
    title: "🎓 UdemFree : Cours Udemy 100% gratuits",
    description: `
      UdemFree est une application web développée avec Django qui récupère automatiquement 
      les cours Udemy disponibles avec des coupons de réduction à 100%.

      Idéal pour les étudiants cherchant à apprendre gratuitement !
    `,
    date: "Avril 2024 - Aujourd'hui",
    imageUrl: "https://images.unsplash.com/photo-1555435026-b1e6f7a23780?auto=format&fit=crop&w=1470&q=80",
    skills: ["Django", "Python", "Web Scraping", "HTML", "CSS"]
  },
  {
    title: "📖 Novel Reader : Lecture de romans en arabe",
    description: `
      Plateforme de lecture en ligne de novels (romans), avec organisation par chapitres 
      et support pour les textes en arabe. Backend réalisé avec Django.
    `,
    date: "Mars 2024 - Avril 2024",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80",
    skills: ["Django", "Python", "HTML", "CSS", "Gestion de contenu"]
  },
  {
    title: "🌐 Portfolio Personnel",
    description: `
      Mon portfolio professionnel développé avec React.js, responsive et moderne, 
      présentant mes projets, compétences et parcours académique.
    `,
    date: "Février 2024 - Mars 2024",
    imageUrl: "https://images.unsplash.com/photo-1521790945508-bf2a36314e85?auto=format&fit=crop&w=1470&q=80",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Frontend"]
  }
];

  return (
    <section 
      id="projects"
      className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-[#01161E]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Mes Projets</h2>
          <div className="w-20 h-1 bg-indigo-400 dark:bg-indigo-400 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-800/80 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">{project.date}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  {/* Skills Tags */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;