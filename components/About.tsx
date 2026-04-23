import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-b border-[var(--it-border)]">
      <div className="container mx-auto px-6 text-center">
        <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-cyan-400">About Us</h4>
        <div className="max-w-4xl mx-auto text-[var(--it-text-muted)] text-lg md:text-xl leading-relaxed space-y-6">
          <p>NEBO IT Solutions is an organization committed to delivering state-of-the-art IT solutions tailored to the unique needs of industrial entities.</p>
          <p>Our experts conduct in-depth studies of business challenges, perform comprehensive root cause analysis, and determine the most effective and sustainable solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default About;