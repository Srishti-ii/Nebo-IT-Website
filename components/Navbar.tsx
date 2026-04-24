import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Users, Mail, LayoutGrid, Info, FileText } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', id: 'home', icon: <Home size={20} /> },
    { label: 'About', id: 'about', icon: <Info size={20} /> },
    { label: 'Services', id: 'services', icon: <LayoutGrid size={20} /> },
    { label: 'Work', id: 'work', icon: <Briefcase size={20} /> },
    { label: 'Blog', id: 'blog', icon: <FileText size={20} /> },
    { label: 'Team', id: 'team', icon: <Users size={20} /> },
    { label: 'Contact', id: 'contact', icon: <Mail size={20} /> },
  ];

  // Function to handle smooth scrolling without breaking HashRouter
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="glass rounded-full px-4 py-3 flex items-center gap-1 md:gap-2 lg:gap-4 shadow-2xl transition-all duration-300"
      >
        {navItems.map((item, idx) => (
          <motion.button
            key={idx}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            /* text-[var(--text-main)] ensures icons are Deep Navy in light mode 
               and White in dark mode.
            */
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-[var(--text-main)] hover:text-cyan-500 hover:bg-cyan-500/10 transition-all duration-200 outline-none"
            title={item.label}
          >
            {item.icon}
          </motion.button>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;