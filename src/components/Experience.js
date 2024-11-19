import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire",
      date: "juin 2024 - sept. 2024 · 4 mois",
      company: "CNRS",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQHWVkPoemGy9A/company-logo_100_100/company-logo_100_100/0/1697807244531/cnrs_logo?e=1740009600&v=beta&t=JaCvM-q1zjOnq76rGhNPz-eQuzqq3f_Ca1z2YaxUNpo"
    },
    {
      title: "Data Science Research Collaborator",
      date: "déc. 2023 - mai 2024 · 6 mois",
      company: "LaBRI",
      imageUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQEBh8vL94WjaA/company-logo_100_100/company-logo_100_100/0/1676900739426/laboratoire_bordelais_de_recherche_en_informatique_labri__logo?e=1740009600&v=beta&t=H8FmxBD0LGBFOlKQh7hPecqTRSRnA6EOMOQLZDeLXXU"
    }
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-24 " id='experience'>
      <h2 className="text-[#0e141b] dark:text-[#fff] text-[22px] sm:text-[24px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Experience
      </h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex dark:bg-[#124559] flex-col sm:flex-row items-center gap-4 bg-slate-50 px-4 py-2 min-h-[72px] justify-between mb-4 rounded-lg"
        >
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-[64px] h-[64px] sm:w-[80px] sm:h-[80px]"
              style={{ backgroundImage: `url(${experience.imageUrl})` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#0e141b] dark:text-[#fff] text-base sm:text-lg font-medium leading-normal line-clamp-1">
                {experience.title}
              </p>
              <p className="text-[#4e7397] text-sm sm:text-base font-normal leading-normal line-clamp-2">
                {experience.date}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full sm:w-auto ">
            <p className="text-[#0e141b] dark:text-[#fff] text-base sm:text-lg font-normal leading-normal text-right sm:text-left ">
              {experience.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
