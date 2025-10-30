import { useState } from "react";
import IntroAnimation from "./Components/IntroAnimation";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <>
            {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <>
          <Navbar />
          <LandingPage />
          <AboutPage />
          <SkillsPage />
          <ProjectsPage />
          <ContactPage />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
