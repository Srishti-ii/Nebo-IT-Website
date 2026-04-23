import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", '7a54dd7f-aa73-4bc5-a833-122420bd0cac');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      setFormState('success');
      e.currentTarget.reset();
    } else {
      setFormState('idle');
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[2rem] shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                required
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 px-5 py-4 text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"

              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 px-5 py-4 text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"

              />
            </div>

            <textarea
              required
              name="message"
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/60 px-5 py-4 text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"

            />

            <button
              disabled={formState !== 'idle'}
              className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${formState === 'success'
                ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                }`}
            >
              {formState === 'idle' && (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
              {formState === 'sending' && (
                <div className="w-6 h-6 border-2 border-[var(--border-subtle)] border-t-transparent rounded-full animate-spin" />
              )}
              {formState === 'success' && (
                <>
                  <CheckCircle size={20} />
                  Message Sent Successfully
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