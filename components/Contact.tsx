
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <section id="contact" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Beams Simulation */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            // Fix: Spread animation props as any to bypass TS error
            {...({
              initial: { x: -100, y: Math.random() * 1000, opacity: 0 },
              animate: { 
                x: 2000, 
                y: (Math.random() - 0.5) * 500 + 500,
                opacity: [0, 1, 0]
              },
              transition: { 
                duration: Math.random() * 2 + 2, 
                repeat: Infinity, 
                delay: Math.random() * 10 
              }
            } as any)}
            className="absolute w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm rotate-[15deg]"
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6">GET IN TOUCH</h2>
            <p className="text-slate-400">Have a bold idea? Let's engineer it into reality.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border-b border-slate-800 p-4 focus:border-cyan-400 outline-none transition-colors text-slate-200 placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border-b border-slate-800 p-4 focus:border-cyan-400 outline-none transition-colors text-slate-200 placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Message</label>
              <textarea 
                required
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-slate-900/50 border-b border-slate-800 p-4 focus:border-cyan-400 outline-none transition-colors text-slate-200 resize-none placeholder:text-slate-700"
              />
            </div>

            <button 
              disabled={formState !== 'idle'}
              className={`clickable w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                formState === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                  : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 active:scale-95'
              }`}
            >
              {formState === 'idle' && (
                <>
                  <Send size={20} />
                  Initiate Transmission
                </>
              )}
              {formState === 'sending' && (
                <div className="w-6 h-6 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              )}
              {formState === 'success' && (
                <>
                  <CheckCircle size={20} />
                  Message Received
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
