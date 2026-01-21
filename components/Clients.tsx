
import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  return (
    <div className="py-20 bg-slate-950 overflow-hidden border-y border-slate-900">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-slate-500 text-sm uppercase tracking-[0.3em] font-bold">Trusted by Industry Leaders</h3>
      </div>
      
      <div className="flex w-max">
        <motion.div
          // Fix: Spread animate and transition props as any to satisfy TS
          {...({
            animate: { x: [0, -1000] },
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            },
          } as any)}
          className="flex gap-20 items-center px-10"
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <span
              key={idx}
              className="text-3xl md:text-5xl font-black text-slate-800 hover:text-cyan-500/50 transition-colors cursor-default select-none tracking-tighter"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;
