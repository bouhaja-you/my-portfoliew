import React from "react";

const ProfileHeader = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-24">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-4">
        {/* Profile Image and Info */}
        <div className="flex items-center gap-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-[128px] h-[128px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]"
            style={{
              backgroundImage:
                'url("https://media.licdn.com/dms/image/v2/D4E03AQE-aHMLErTfJw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661775170754?e=1737590400&v=beta&t=W8Q3-Sbn05hDq9SAVZ-6ecjnh2DeayPfdF38OOLP7qA")',
            }}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#0e141b] text-lg sm:text-xl font-bold leading-tight dark:text-white">
              Mohammed Bouhaja
            </p>
            <p className="text-[#4e7397] text-sm sm:text-base">
              Développement Logiciel | Passionné par la Cybersécurité (1% THM) et l'Informatique Quantique | CTF Player
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:w-auto w-full">
          <a href="https://drive.google.com/file/d/1Nx_dcgNkEgc3DtD3zWflzl9pOWwY8fFs/view?usp=sharing">
            <button
              className="flex items-center justify-center rounded-xl h-10 px-8 sm:px-10 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal w-full sm:w-auto"
            >
              <span className="truncate">Resume</span>
            </button>
          </a>
          <button
            className="flex items-center justify-center rounded-xl h-10 px-8 sm:px-10 bg-[#598392] dark:bg-[#124559] text-white text-sm font-bold leading-normal w-full sm:w-auto"
          >
            <span className="truncate">Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
