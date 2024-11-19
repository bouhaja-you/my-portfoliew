// src/App.js
import './App.css';

import Head from './components/Head'
import ProfileHeader from "./components/ProfileHeader";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects"
import ProgrammingSkills from "./components/Skills"
import FormationSection  from "./components/FormationSection"


function App() {
  return (
    <div className='App  dark:bg-[#01161E]'>
      <Head/>
      <ProfileHeader/>
      <AboutMe/>
      <FormationSection/>
      <Experience/>
      <Projects/>
      <ProgrammingSkills/>
    </div>
  );
}

export default App;
