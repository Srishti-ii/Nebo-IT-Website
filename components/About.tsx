import React from 'react';

const About: React.FC = () => {
  return (
   
    <section id="about" className="py-24 border-t border-b border-slate-900">
      <div className="container mx-auto px-6 text-center">
        
        {/* Section Label */}
        <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-cyan-400">
          About Us
        </h4>
        
        {/* Paragraph Container */}
        <div className="max-w-4xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            NEBO IT Solutions is an organization committed to delivering state-of-the-art IT solutions tailored to the unique needs of industrial entities. We strongly believe that since every organization operates under distinct conditions, each solution must be uniquely designed to match those specific requirements.
          </p>
          <p>
            Our experts conduct in-depth studies of business challenges, perform comprehensive root cause analysis, and determine the most effective and sustainable solutions. Based on the nature of the project, we deploy the most suitable team from our panel of experienced professionals.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;