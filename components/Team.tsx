
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="teammm" className="py-32 bg-slate-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-16">CORE TALENT</h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-10">
          {TEAM.map((member) => (
            <div 
              key={member.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <AnimatePresence>
                {hoveredId === member.id && (
                  <motion.div
                    // Fix: Spread motion props as any
                    {...({
                      initial: { opacity: 0, y: 10, scale: 0.95 },
                      animate: { opacity: 1, y: -20, scale: 1 },
                      exit: { opacity: 0, y: 10, scale: 0.95 }
                    } as any)}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-slate-950 rounded-lg shadow-xl z-20 pointer-events-none whitespace-nowrap"
                  >
                    <div className="font-bold">{member.name}</div>
                    <div className="text-xs text-slate-500">{member.role}</div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div
                // Fix: Spread animate prop as any
                {...({
                  animate: {
                    scale: hoveredId === member.id ? 1.2 : 1,
                    zIndex: hoveredId === member.id ? 10 : 1,
                  }
                } as any)}
                className={`w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 ${
                  hoveredId === member.id ? 'border-cyan-400' : 'border-slate-800'
                } transition-colors shadow-2xl`}
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </motion.div>
            </div>
          ))}
        </div>
        
        <p className="mt-16 text-slate-400 max-w-2xl mx-auto italic">
          "Great things in business are never done by one person. They're done by a team of people."
        </p>
      </div>
    </section>
  );
};

export default Team;
