
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const ParticleField = () => {
  const points = useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
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
      // Fix: Spread variants and animation props as any to satisfy TS
      {...({
        variants: container,
        initial: "hidden",
        animate: "visible",
      } as any)}
      className="text-5xl md:text-8xl font-black mb-6 tracking-tight flex flex-wrap justify-center gap-x-4"
    >
      {text.split(" ").map((word, idx) => (
        <motion.span 
          key={idx} 
          // Fix: Spread variants prop as any
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
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ParticleField />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <mesh position={[0, 0, 0]}>
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                <meshStandardMaterial color="#0891b2" wireframe />
              </mesh>
            </Float>
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-10 pointer-events-none" />

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          // Fix: Spread initial and animate props as any
          {...({
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8 }
          } as any)}
        >
          <SpotlightText text="NEBO IT SOLUTIONS" />
          
          <motion.p
            // Fix: Spread initial and animate props as any
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1, duration: 0.8 }
            } as any)}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            We orchestrate high-performance digital experiences that blend artistic 
            finesse with surgical engineering precision.
          </motion.p>

          <motion.div
            // Fix: Spread initial and animate props as any
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1.3 }
            } as any)}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => scrollTo('contact')}
              className="clickable group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Launch Project</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button 
              onClick={() => scrollTo('work')}
              className="clickable px-8 py-4 border border-cyan-500/30 text-cyan-400 font-bold rounded-full transition-all hover:bg-cyan-500/10 hover:border-cyan-500"
            >
              View Showreel
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        // Fix: Spread animate and transition props as any
        {...({
          animate: { y: [0, 10, 0] },
          transition: { duration: 2, repeat: Infinity }
        } as any)}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer"
        onClick={() => scrollTo('services')}
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
