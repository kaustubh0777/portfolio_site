import About from './components/About/about';
import Navbar from './components/Navbar/navbar';
import Projects from './components/Projects/project';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Certifications from './components/Certifications/certifications';
import WorkExperiences from './components/WorkExperience/workexperience';
import Achievements from './components/Achievements/achievements';
import Footer from './components/Footer/footer';


function App() {
  return (
    <main className="text-gray-400 bg-black body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <WorkExperiences/>
      <Achievements/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </main>

    
  )
}

export default App;
