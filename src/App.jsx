import './App.css'
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white">
        <TopBar />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  )
}

export default App
