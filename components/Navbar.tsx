
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Users, Mail, LayoutGrid, Info } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', icon: <Home size={20} />, href: '#' },
    {label: 'About', icon: <Info size={20} />, href: '#about' },
    { label: 'Services', icon: <LayoutGrid size={20} />, href: '#services' },
    { label: 'Work', icon: <Briefcase size={20} />, href: '#work' },
    { label: 'Team', icon: <Users size={20} />, href: '#team' },
    { label: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        // Fix: Spread motion-specific props as any to bypass TS error
        {...({
          initial: { y: 100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }
        } as any)}
        className="glass rounded-full px-4 py-3 flex items-center gap-1 md:gap-4 shadow-2xl shadow-cyan-500/10"
      >
        {navItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            // Fix: Spread motion-specific props as any to bypass TS error
            {...({
              whileHover: { scale: 1.2, y: -5 },
              whileTap: { scale: 0.9 }
            } as any)}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors"
            title={item.label}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
