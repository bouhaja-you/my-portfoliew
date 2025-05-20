import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, faJs, 
  faHtml5, faCss3Alt, faReact, faGitAlt,  
  faNodeJs, faDocker 
} from '@fortawesome/free-brands-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
const SkillBar = ({ skill, percentage, icon, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
    >
      <div className="bg-white dark:bg-gray-800/80 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-indigo-500 dark:text-indigo-400 text-2xl">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{skill}</h3>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, delay: 0.3, type: 'spring' }}
            className="h-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600"
          />
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Niveau {percentage >= 80 ? 'Avancé' : percentage >= 60 ? 'Intermédiaire' : 'Débutant'}
          </span>
          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
            {percentage}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProgrammingSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const skills = [
  { skill: 'Python', percentage: 90, icon: faPython },
  { skill: 'Django', percentage: 85, icon: faPython },
  { skill: 'HTML5', percentage: 85, icon: faHtml5 },
  { skill: 'CSS3', percentage: 80, icon: faCss3Alt },
  { skill: 'JavaScript', percentage: 50, icon: faJs },
  { skill: 'Git & GitHub', percentage: 75, icon: faGitAlt },
  { skill: 'Leadership', percentage: 60, icon: faUserTie }, // Icône générique pour leadership
];


  return (
    <section 
      id="skills"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Compétences Techniques</h2>
          <div className="w-20 h-1 bg-indigo-400 dark:bg-indigo-400 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl">
            Mes compétences techniques acquises à travers mes projets académiques et professionnels.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap -mx-4"
        >
          {skills.map((item, index) => (
            <SkillBar 
              key={index} 
              skill={item.skill} 
              percentage={item.percentage} 
              icon={item.icon}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProgrammingSkills;