import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

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
import Blog from './components/Blog';
import ToggleSwitch from './components/ToggleSwitch';
import NeboEngineering from './components/NeboEngineering';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  const [isEngineeringMode, setIsEngineeringMode] = useState(() => {
    const savedMode = localStorage.getItem('neboSiteMode');
    return savedMode === 'engineering';
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('neboTheme') || 'dark';
  });

  useEffect(() => {
    setMounted(true);
    // Apply the theme attribute to the root HTML element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('neboTheme', newTheme);
  };

  const toggleSiteMode = () => {
    setIsEngineeringMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('neboSiteMode', newMode ? 'engineering' : 'it-solutions');
      return newMode;
    });
  };

  return (
    <Router>
      <div className={`relative min-h-screen overflow-x-hidden theme-transition ${!isEngineeringMode ? 'bg-[var(--it-bg-primary)]' : ''}`}>
        
        {/* Fixed Controller Cluster */}
        <div className="fixed top-4 right-2 sm:top-6 sm:right-6 z-[9999] flex flex-col gap-3 items-end">
          
          {/* Engineering / IT Toggle */}
          <div className="it-glass p-1.5 sm:p-2 rounded-full shadow-lg scale-[0.85] sm:scale-100 origin-top-right">
            <ToggleSwitch isEngineering={isEngineeringMode} onToggle={toggleSiteMode} />
          </div>

          {/* Theme Toggle (Sun/Moon) - Visible always, but logic affects IT site */}
          {/*<button 
            onClick={toggleTheme}
            className="w-12 h-12 it-glass rounded-full flex items-center justify-center text-cyan-500 hover:scale-110 transition-all shadow-xl active:scale-95"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <Sun size={22} />
            ) : (
              <Moon size={22} className="text-slate-700" />
            )}
          </button>*/}
        </div>

        <Routes>
          <Route path="/" element={
            isEngineeringMode ? (
              <div className="min-h-screen w-full">
                <NeboEngineering onSwitchToIT={toggleSiteMode} />
              </div>
            ) : (
              <>
                <GlobalBackground />
                <Cursor />
                <Navbar />

                <main className="theme-transition">
                  <Hero />
                  <About />
                  <Clients />
                  <Services />
                  <Work />
                  <Blog />
                  {/* <Leadership /> */}
                  <OrganizationalChart />
                  <Contact />
                </main>

                <Footer />
              </>
            )
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;