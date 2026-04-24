import React from 'react';
import { CERTIFICATION_LOGOS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg-primary)] border-y border-[var(--border-primary)] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h3 className="text-[var(--text-muted)] text-sm uppercase tracking-[0.3em] font-bold">
            Our Certifications & Accreditations
          </h3>
        </div>
        
        {/* Static Grid (No Motion) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto items-center justify-items-center">
          {CERTIFICATION_LOGOS.map((logo) => (
            <div 
              key={logo.id} 
              className="bg-white p-8 rounded-2xl border border-[var(--border-subtle)] flex items-center justify-center w-full aspect-video md:w-64"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-24 w-auto object-contain nebo-logo hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;