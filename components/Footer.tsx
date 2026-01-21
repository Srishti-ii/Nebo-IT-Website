
import React from 'react';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tighter">LUMINA</h2>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              We are a boutique creative engineering agency specializing in the intersection 
              of design, technology, and performance.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-cyan-400 transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"><Github size={18} /></a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2024 Lumina Agency. All rights reserved.</p>
          <p className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-400">Privacy Policy</span>
            <span className="cursor-pointer hover:text-slate-400">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
