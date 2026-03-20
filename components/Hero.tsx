import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import NeboLogo from '../images/nebo_logo.png';

const ParticleField = () => {
  const points = useMemo(() => {
    const count = window.innerWidth < 768 ? 1200 : 3000;
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.1;
    ref.current.rotation.y += delta * 0.15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const SpotlightText: React.FC<{ text: string }> = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      {...({
        variants: container,
        initial: "hidden",
        animate: "visible",
      } as any)}
      className="text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 tracking-tight flex flex-wrap justify-center gap-x-2 sm:gap-x-4 px-2 break-words"
    >
      {text.split(" ").map((word, idx) => (
        <motion.span
          key={idx}
          {...({ variants: child } as any)}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24">

      {/* --- ADDED LOGO CONTAINER --- */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-2">
        <img
          src={NeboLogo}
          alt="NEBO Logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>
      {/* ---------------------------- */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          {...({
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8 }
          } as any)}
        >

          {/* Main Heading */}
          <SpotlightText text="NEBO IT SOLUTIONS" />

          {/* Sub-heading moved below the main text */}
          <motion.p
            {...({
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.8, ease: "easeOut" }
            } as any)}
            className="text-cyan-400 font-semibold tracking-[0.3em] text-xs sm:text-sm md:text-base mb-8 uppercase"
          >
            A Nebo Engineering Company
          </motion.p>

          <motion.p
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1, duration: 0.8 }
            } as any)}
            className="text-slate-400 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-10 leading-relaxed font-light px-2"
          >
            We orchestrate high-performance digital experiences that blend artistic
            finesse with surgical engineering precision.
          </motion.p>

          <motion.div
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.3 }
            } as any)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollTo('contact')}
              className="clickable group relative px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-cyan-500 text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Launch Project</span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="clickable group relative px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-cyan-500 text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">View Showreel</span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;