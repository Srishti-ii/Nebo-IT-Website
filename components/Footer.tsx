import React from 'react';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 pt-16 pb-16">
      <div className="container mx-auto px-6">
        
        {/* Switched to lg:grid-cols-12 to ensure it only applies on wide enough screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
          
          {/* Reduced from col-span-3 to col-span-2 to pull everything closer to NEBO */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tighter text-white">NEBO</h2>
          </div>
          
          {/* Navigation */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Navigation</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-cyan-400 transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Offices maintains its large width to keep addresses wide */}
          <div className="col-span-1 lg:col-span-5">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Offices</h4>
            <address className="not-italic text-slate-400 space-y-3 text-xs leading-relaxed">
              <p>1. R-18 1St Floor, Vikas Marg, Shakarpur, Delhi-110092.</p>
              <p>2. K-422, SITE 5 KASNA IND AREA Greater Noida, Gautam Budh Nagar -201310.</p>
            </address>
          </div>

          {/* Increased from col-span-2 to col-span-3 to give icons more room, removed flex-wrap */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"><Twitter size={16} /></a>
              <a href="#" className="w-9 h-9 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"><Github size={16} /></a>
              <a href="#" className="w-9 h-9 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"><Linkedin size={16} /></a>
              <a href="#" className="w-9 h-9 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"><Instagram size={16} /></a>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2019 Nebo Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;