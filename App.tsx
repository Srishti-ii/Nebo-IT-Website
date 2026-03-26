import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';

// IT Solutions Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import OrganizationalChart from './components/OrganizationalChart';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import About from './components/About';
import Leadership from './components/Leadership';
import GlobalBackground from './components/GlobalBackground';

// Engineering Components
import ToggleSwitch from './components/ToggleSwitch';
import NeboEngineering from './components/NeboEngineering';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  // Initialize state by checking localStorage first
  const [isEngineeringMode, setIsEngineeringMode] = useState(() => {
    // Check if the user previously selected engineering
    const savedMode = localStorage.getItem('neboSiteMode');
    return savedMode === 'engineering';
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Update toggle handler to save the choice to localStorage
  const toggleSiteMode = () => {
    setIsEngineeringMode((prevMode) => {
      const newMode = !prevMode;
      // Save 'engineering' or 'it-solutions' based on the new state
      localStorage.setItem('neboSiteMode', newMode ? 'engineering' : 'it-solutions');
      return newMode;
    });
  };

  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
        
        {/* Fixed Toggle Switch in the top right corner */}
        {/* RESPONSIVE FIX: Scaled down on ultra-small mobile screens and adjusted spacing to prevent logo overlap */}
        <div className="absolute top-4 right-2 sm:top-6 sm:right-6 z-[9999] bg-white/10 backdrop-blur-md border border-slate-200/20 p-1.5 sm:p-2 rounded-full shadow-lg scale-[0.80] min-[375px]:scale-[0.90] sm:scale-100 origin-top-right transition-transform">
          <ToggleSwitch isEngineering={isEngineeringMode} onToggle={toggleSiteMode} />
        </div>

        {isEngineeringMode ? (
          /* =========================================
             NEBO ENGINEERING SITE
             ========================================= */
          <div className="min-h-screen w-full">
            <NeboEngineering onSwitchToIT={toggleSiteMode} />
          </div>
        ) : (
          /* =========================================
             NEBO IT SOLUTIONS SITE
             ========================================= */
          <>
            <GlobalBackground />
            <Cursor />
            <Navbar />

            <main>
              <Hero />
              <About />
              <Clients />
              <Services />
              <Work />
              <Leadership />
              <OrganizationalChart />
              <Contact />
            </main>

            <Footer />
          </>
        )}
        
      </div>
    </Router>
  );
};

export default App;