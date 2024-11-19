import React from 'react';

const ProjectsAndSkills = () => {
  const projects = [
    {
      title: "Malware Detection using Machine Learning",
      description: "Passionate about cybersecurity and AI, I’m working on a malware detection project using machine learning techniques. By analyzing datasets of malware signatures and suspicious behaviors, I explore advanced algorithms like random forests and neural networks. While the model shows promise, improvements are still needed for optimal efficiency.",
      date: "Mai 2024 - Aujourd'hui",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["Cybersecurity", "Artificial Intelligence", "Neural Networks", "Python", "Data Processing", "Malware Analysis"]
    },
    {
      title: "Implementing Strategies for Confusion Matrix Comparison in Supervised Learning",
      description: "Engaged in a research project at LaBRI as part of my academic journey at ENSEIRB-MATMECA. The project focuses on implementing strategies for comparing confusion matrices in supervised learning models.",
      date: "Déc. 2023 - Mai 2024",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["Machine Learning", "JavaScript", "D3.js", "Python"]
    },
    {
      title: "Note de Synthèse on Quantum Algorithms",
      description: "Collaborated on a synthesis note on quantum algorithms, focusing on the design and evaluation of quantum circuits using Qiskit (IBM). We assessed the effectiveness of Shor's algorithm for integer factorization.",
      date: "Févr. 2024 - Mai 2024",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["Qiskit", "Quantum Computing"]
    },
    {
      title: "Robotics Project",
      description: "Contributed to a robotics project, implementing a Python-based algorithm for autonomous robot movement and remote control via an external controller. The experience enhanced my skills in programming and robotics engineering.",
      date: "Mars 2024 - Mai 2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQExOEvcgv84Jw/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1715085853360?e=1732557600&v=beta&t=wA4C2hA-Z62ii_gONvrx6ruqe8uUwgpVFZfBFlTxxh8",
      skills: ["Robotics", "Python"]
    },
    {
      title: "User-Space Threading Library",
      description: "Developed a user-space threading library in C to improve concurrency and thread management for various applications.",
      date: "Mars 2024 - Mai 2024",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["C Programming"]
    },
    {
      title: "Web Application Development for Student Carpooling",
      description: "Built a web application for student carpooling, helping to connect students for carpooling opportunities. The project involved backend development and database management.",
      date: "Oct. 2023 - Déc. 2023",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["SQL", "PhpMyAdmin", "XAMPP"]
    },
    {
      title: "The Game of the Amazons",
      description: "Developed the Game of the Amazons using C. It is a two-player abstract strategy game, featuring a 10x10 board and pieces that move like queens in chess, with the goal to outmaneuver the opponent.",
      date: "Févr. 2023 - Mai 2023",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["C Programming"]
    },
    {
      title: "Tower Defense Game Development",
      description: "Developed a Tower Defense game using TypeScript and JavaScript. The game involves strategic placement of towers to defend against waves of enemies.",
      date: "Mars 2023 - Mai 2023",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["TypeScript", "JavaScript"]
    },
    {
      title: "Airfoil Refinement and Modeling, Pressure Mapping",
      description: "Worked on airfoil refinement and pressure mapping in Python, analyzing aerodynamic performance and refining airfoil designs.",
      date: "Avr. 2023",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["Python"]
    },
    {
      title: "Image Compression using SVD Factorization",
      description: "Developed an image compression algorithm using Singular Value Decomposition (SVD) in Python to reduce image size while preserving quality.",
      date: "Mars 2023",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["Python"]
    },
    {
      title: "Mansuba Game Development",
      description: "Developed a modified version of Chinese Checkers using the concept of Mansuba to enhance gameplay. This project was implemented using C.",
      date: "Oct. 2022 - Janv. 2023",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["C Programming"]
    },
    {
      title: "TIPE: Quantum-Resistant ECC: Design and Evaluation",
      description: "Worked on an encryption algorithm based on elliptic curve cryptography (ECC), and evaluated its resilience against quantum algorithms like Shor's algorithm.",
      date: "Déc. 2021 - Juin 2022",
      imageUrl: "https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-camping-d-automne.png?auto=compress&cs=tinysrgb&w=600", // Add a relevant image URL
      skills: ["Quantum Computing", "ECC", "Public Key Cryptography"]
    }
  ];
  
  return (
    <div className="px-4 sm:px-8 lg:px-24" id='projects'>
      {/* Section Projects */}
      <h2 className="text-[#0e141b] dark:text-[#fff] text-[22px] sm:text-[24px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-slate-50 dark:bg-[#124559] px-6 py-6 rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-full h-[200px] mb-4"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            ></div>
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-[#0e141b] dark:text-[#fff] text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-[#4e7397] text-sm font-normal mb-4 dark:text-[#AEC3B0]" >{project.description}</p>
              <div className="flex justify-between items-center text-[#0e141b]">
                <span className="text-sm dark:text-[#fff]">{project.date}</span>
              </div>
              <div className="mt-4">
                <h4 className="text-[#0e141b] text-sm font-semibold dark:text-[#4e7397]">Skills Applied:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-[#e2e8f0] text-[#4a5568] text-xs font-medium py-1 px-3 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAndSkills;
