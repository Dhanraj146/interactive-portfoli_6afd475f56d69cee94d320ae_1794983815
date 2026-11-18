import React from 'react';
import { portfolioConfig } from './config/portfolioConfig';

import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { GithubSection } from './sections/GithubSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

// Degraded app without semantic landmarks, hooks, or live API state management
export default function App() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <div id="main-content">
        <HeroSection personal={portfolioConfig.personal} />
        <AboutSection 
          personal={portfolioConfig.personal} 
          education={portfolioConfig.education}
          interests={portfolioConfig.interests}
          goals={portfolioConfig.goals}
        />
        <SkillsSection skills={portfolioConfig.skills} />
        <ProjectsSection projects={portfolioConfig.projects} />
        <GithubSection />
        <ContactSection personal={portfolioConfig.personal} />
      </div>
      <Footer personal={portfolioConfig.personal} />
    </div>
  );
}
