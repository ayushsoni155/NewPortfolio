import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/Contactpage";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage/>
      <AboutPage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
      <Footer/>
    </>
  );
}

export default App;
