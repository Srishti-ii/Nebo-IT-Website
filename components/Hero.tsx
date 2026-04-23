import React from 'react';
import { motion } from 'framer-motion';

const SpotlightText: React.FC<{ text: string }> = ({ text }) => {
  const container = { hidden: { opacity: 0 }, visible: (i = 1) => ({ opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.04 * i } }) };
  const child = { visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }, hidden: { opacity: 0, y: 20 } };

  return (
    <motion.h1
      {...({ variants: container, initial: "hidden", animate: "visible" } as any)}
      className="text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 tracking-tight flex flex-wrap justify-center gap-x-2 sm:gap-x-4 px-2 text-[var(--it-text-main)]"
    >
      {text.split(" ").map((word, idx) => (
        <motion.span key={idx} {...({ variants: child } as any)} className="inline-block">{word}</motion.span>
      ))}
    </motion.h1>
  );
};

const Hero: React.FC = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24">
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
        <img src="/img/nebo_logo.png" alt="NEBO Logo" className="h-10 md:h-12 w-auto object-contain" />
      </div>
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div {...({ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8 } } as any)}>
          <SpotlightText text="NEBO IT SOLUTIONS" />
          <motion.p className="text-cyan-500 font-semibold tracking-[0.3em] text-xs sm:text-sm md:text-base mb-8 uppercase">A Nebo Engineering Company</motion.p>
          <motion.p className="text-[var(--it-text-muted)] text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We orchestrate high-performance digital experiences that blend artistic finesse with surgical engineering precision.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollTo('contact')} className="clickable group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">Launch Project</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;