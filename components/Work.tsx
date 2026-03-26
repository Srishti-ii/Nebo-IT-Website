
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
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl shadow-2xl"          >
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
              <div className="p-6 sm:p-8 md:p-12 space-y-5">
                <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">{project.category}</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">{project.title}</h2>
                <div className="space-y-4 text-slate-400">
                <p>{project.description}</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
  {project.points.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button onClick={() => window.location.href = '#contact'} className="clickable flex-1 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:scale-105 active:scale-95 transition-transform">
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
<div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center mb-16 md:mb-32 last:mb-0`}>      <motion.div 
        // Fix: Spread motion-specific props as any
        {...({
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, margin: "-100px" }
        } as any)}
        className="flex-1 w-full max-w-xl mx-auto transform-gpu will-change-transform"   >
        <div onClick={onOpen} className="relative group cursor-pointer overflow-hidden rounded-2xl clickable">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110 active:scale-105 grayscale group-hover:grayscale-0"          />
<div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity flex items-center justify-center">            <div className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold">View Case Study</div>
          </div>
        </div>
      </motion.div>

      <motion.div
  whileTap={{ scale: 0.98 }}
  whileHover={{ scale: 1.01 }}        // Fix: Spread motion-specific props as any
        {...({
          initial: { opacity: 0, x: isEven ? 50 : -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-100px" }
        } as any)}
        className="flex-1 space-y-6"
      >
        <span className="text-cyan-500 font-mono text-sm tracking-widest">{project.category}</span>
        <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight">{project.title}</h3>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
{project.shortDescription}
</p>
        <button 
          onClick={onOpen}
          className="clickable px-8 py-3 bg-slate-900 border border-slate-800 rounded-full font-bold hover:bg-slate-800 active:bg-slate-700 transition-colors"        >
          Explore Technical Details
        </button>
      </motion.div>
    </div>
  );
};

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
<section id="work" className="py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-10xl font-black mb-6 md:mb-8">CRAFTED BY OUR TEAM</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto" />
        </div>

        <div className="space-y-16 md:space-y-32">
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
