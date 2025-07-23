import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import SkillsSection from "./components/SkillsSection";
import TopBar from "./components/TopBar";
import WorkExperienceSection from "./components/WorkExperience";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white">
        <TopBar />
        <AboutSection />
        <ResumeSection />
        <SkillsSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
