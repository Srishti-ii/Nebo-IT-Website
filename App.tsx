
import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
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

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Router>
<div className="relative min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
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
      </div>
    </Router>
  );
};

export default App;
