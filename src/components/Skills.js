import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faJava, faCuttlefish, faAmazon, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons'; // Icônes supplémentaires

const SkillBar = ({ skill, percentage, icon }) => {
  return (
    <div className="flex flex-col gap-3 p-4 w-1/2 sm:w-1/3 lg:w-1/4"> {/* Ajustement de la largeur pour avoir 2 items par ligne */}
      <div className="flex gap-6 justify-between items-center">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={icon} className="text-[#1980e6] dark:text-[#124559]" /> {/* Icône à gauche */}
          <p className="text-[#0e141b] text-base font-medium leading-normal dark:text-[#fff]">{skill}</p>
        </div>
      </div>
      <div className="rounded bg-[#d0dbe7]">
        <div className="h-2 rounded bg-[#1980e6] dark:bg-[#598392]" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-[#4e7397] dark:text-[#fff] text-sm font-normal leading-normal">{percentage}%</p>
    </div>
  );
};

const ProgrammingSkills = () => {
  const skills = [
    { skill: 'Python', percentage: 90, icon: faPython },
    { skill: 'JavaScript', percentage: 85, icon: faJs },
    { skill: 'Java', percentage: 75, icon: faJava },
    { skill: 'C++', percentage: 65, icon: faCuttlefish },
    { skill: 'Ruby', percentage: 55, icon: faAmazon },
    { skill: 'HTML5', percentage: 80, icon: faHtml5 },
    { skill: 'CSS3', percentage: 70, icon: faCss3Alt },
    { skill: 'React', percentage: 65, icon: faReact },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-24" id='skills'>
      <h2 className="text-[#0e141b] dark:text-[#fff] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Programming Skills
      </h2>
      <div className="flex flex-wrap gap-4 justify-between"> {/* Conteneur flex pour gérer les éléments sur plusieurs lignes */}
        {skills.map((item, index) => (
          <SkillBar key={index} skill={item.skill} percentage={item.percentage} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default ProgrammingSkills;
