
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { X } from 'lucide-react';

const ProjectModal: React.FC<{ project: typeof PROJECTS[0]; isOpen: boolean; onClose: () => void }> = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            // Fix: Spread animation props as any
            {...({
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 }
            } as any)}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />
          <motion.div
            // Fix: Spread animation props as any
            {...({
              initial: { opacity: 0, scale: 0.9, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.9, y: 20 }
            } as any)}
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors clickable"
            >
              <X size={24} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full min-h-[300px] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-12 space-y-6">
                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">{project.category}</span>
                <h2 className="text-4xl font-black">{project.title}</h2>
                <div className="space-y-4 text-slate-400">
                  <p>
                    This project represents a pinnacle of interactive design. 
                    Utilizing cutting-edge WebGL shaders and optimized asset loading pipelines, 
                    we delivered a performance-first experience that never compromises on aesthetics.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Custom 3D Physics Engine</li>
                    <li>Adaptive Micro-interactions</li>
                    <li>Real-time Data Visualization</li>
                    <li>Accessibility Audit: 100/100</li>
                  </ul>
                </div>
                <div className="flex gap-4 pt-6">
                  <button onClick={() => window.location.href = '#contact'} className="clickable flex-1 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:scale-105 transition-transform">
                    Start Similar Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProjectItem: React.FC<{ project: typeof PROJECTS[0]; index: number; onOpen: () => void }> = ({ project, index, onOpen }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center mb-40 last:mb-0`}>
      <motion.div 
        // Fix: Spread motion-specific props as any
        {...({
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, margin: "-100px" }
        } as any)}
        className="flex-1 w-full"
      >
        <div onClick={onOpen} className="relative group cursor-pointer overflow-hidden rounded-2xl clickable">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold">View Case Study</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        // Fix: Spread motion-specific props as any
        {...({
          initial: { opacity: 0, x: isEven ? 50 : -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-100px" }
        } as any)}
        className="flex-1 space-y-6"
      >
        <span className="text-cyan-500 font-mono text-sm tracking-widest">{project.category}</span>
        <h3 className="text-4xl md:text-6xl font-black">{project.title}</h3>
        <p className="text-slate-400 text-lg leading-relaxed">
          A deep dive into technical excellence. We implemented high-performance 
          WebGL transitions and a headless architecture for {project.title}, 
          resulting in a 40% increase in user engagement.
        </p>
        <button 
          onClick={onOpen}
          className="clickable px-8 py-3 bg-slate-900 border border-slate-800 rounded-full font-bold hover:bg-slate-800 transition-colors"
        >
          Explore Technical Details
        </button>
      </motion.div>
    </div>
  );
};

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="work" className="py-32 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-8">FEATURED WORK</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto" />
        </div>

        <div className="space-y-32">
          {PROJECTS.map((p, i) => (
            <ProjectItem 
              key={p.id} 
              project={p} 
              index={i} 
              onOpen={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject!} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Work;
