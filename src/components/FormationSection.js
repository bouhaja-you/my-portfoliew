import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const FormationSection = () => {
  return (
    <div className="bg-white dark:bg-[#01161E] py-8  sm:px-8 lg:px-20" id='formations'>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold  text-gray-900 mb-8 dark:text-[#fff]">Formations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-[#124559] p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <img src="https://media.licdn.com/dms/image/v2/C560BAQGyt7eIk6rGbg/company-logo_100_100/company-logo_100_100/0/1639669532279/ecole_nationale_suprieure_delectronique_informatique_et_de_radiocommunications_de_bordeaux_logo?e=1740009600&v=beta&t=5SHzw2ait6PhBX8DhTx0Sq52M1S3lF9f9t0XRYFMRW0" alt="Logo ENSEIRB-MATMECA" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-[#fff]">ENSEIRB-MATMECA</h3>
                <p className="text-gray-600 dark:text-[#AEC3B0]">Diplôme d'ingénieur, Informatique</p>
                <p className="text-gray-500 dark:text-[#fff]">2022 - 2025</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-[#4E7397]">Compétences : Ingénierie</p>
            </div>
          </div>


          <div className="bg-white dark:bg-[#124559] p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <img src="https://media.licdn.com/dms/image/v2/C4E0BAQGknEEsMYPrvQ/company-logo_100_100/company-logo_100_100/0/1630644726605?e=1740009600&v=beta&t=sTCsjWMwUlmzqzLfSbzQDw_9Tc__muOfBUZCQOu7bWk" alt="Logo CPGE Moulay Youssef" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-[#fff]">CPGE Moulay Youssef</h3>
                <p className="text-gray-600 dark:text-[#AEC3B0]">MP*</p>
                <p className="text-gray-500 dark:text-[#fff]">sept. 2020 - juil. 2022</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-[#4E7397]">Compétences : Ingénierie</p>
            </div>
          </div>


          <div className="bg-white dark:bg-[#124559] p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <img src="https://media.licdn.com/dms/image/v2/D4E0BAQHd79qsWkdXXw/company-logo_100_100/company-logo_100_100/0/1703509097930/classes_prepas_logo?e=1740009600&v=beta&t=tTreV3LZzKcOWScFQ-jmGSM3QTZ_uYdpJbFXzc5ZSBA" alt="Logo CPGE" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-[#fff]">CPGE </h3>
                <p className="text-gray-600 dark:text-[#AEC3B0]">Ingénierie</p>
                <p className="text-gray-500 dark:text-[#fff]">sept. 2020 - juil. 2022</p>
              </div>
            </div>
          </div>


          <div className="bg-white dark:bg-[#124559] p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <img src="https://media.licdn.com/dms/image/v2/C560BAQGyt7eIk6rGbg/company-logo_100_100/company-logo_100_100/0/1639669532279/ecole_nationale_suprieure_delectronique_informatique_et_de_radiocommunications_de_bordeaux_logo?e=1740009600&v=beta&t=5SHzw2ait6PhBX8DhTx0Sq52M1S3lF9f9t0XRYFMRW0" alt="Logo ENSEIRB-MATMECA" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-[#fff]">ENSEIRB-MATMECA</h3>
                <p className="text-gray-600 dark:text-[#AEC3B0]">Bachelor's degree, Informatique</p>
                <p className="text-gray-500 dark:text-[#fff]">sept. 2022 - août 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationSection;
