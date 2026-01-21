
import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Team from './components/Team';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Cursor from './components/Cursor';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Router>
      <div className="relative min-h-screen selection:bg-cyan-500/30">
        <Cursor />
        <Navbar />
        
        <main>
          <Hero />
          <Clients />
          <Services />
          <Work />
          <Team />
          <Contact />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
