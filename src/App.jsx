import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillSection';
import ProjectsSection from './components/ProjectsSection';
import { ContactUs } from './components/ContactUs';
import FooterSection from './components/FooterSection';
import { Height } from '@mui/icons-material';

function App() {
  return (
    <>
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactUs />} />
       </Routes>
       <FooterSection />
       </ThemeProvider>
    </>
  );
}

export default App;
