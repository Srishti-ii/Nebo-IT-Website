import React, { useState } from 'react';
import { LEADERSHIP_DATA } from '../constants';

const LeadershipCard = ({ person }: { person: typeof LEADERSHIP_DATA[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`relative bg-slate-900/60 rounded-xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer border border-white/10 hover:border-blue-500/50 flex flex-col ${
        isExpanded ? 'scale-[1.01] z-10' : 'hover:scale-[1.02] h-[200px]'
      }`}
    >
      <div className="p-4 flex flex-col h-full">
      
        <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'ml-0 mt-28' : 'ml-[35%]'}`}>
          <h3 className={`text-white leading-tight font-extrabold transition-all duration-500 ${isExpanded ? 'text-lg mb-1' : 'text-sm mb-1'}`}>
            {person.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400 text-[9px] font-bold uppercase tracking-tighter">
            </span>
            <div className="h-[1px] flex-grow bg-blue-400/20"></div>
          </div>
        </div>

        <div className={`absolute top-0 transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded 
            ? 'left-4 top-4 w-24 h-24 rounded-lg border border-white/20' 
            : 'left-0 w-1/3 h-full rounded-none border-r border-white/5'
        }`}>
          <img 
            src={person.image} 
            alt={person.name} 
            className="w-full h-full object-cover object-top transition-opacity duration-500" 
          />
        </div>

        <div className={`transition-all duration-500 ease-in-out flex-grow ${isExpanded ? 'mt-2 ml-0' : 'ml-[35%] mt-0'}`}>
          <p className={`text-slate-300 leading-relaxed transition-all duration-500 ${
            isExpanded ? 'text-[11px]' : 'text-[10px] line-clamp-4'
          }`}>
            {person.description}
          </p>
        </div>

        <div className={`mt-auto pt-2 transition-all duration-500 ${isExpanded ? 'text-right' : 'ml-[35%]'}`}>
          <span className="text-[9px] text-blue-500 font-medium italic">
            {isExpanded ? 'Click to collapse' : 'Click to read more...'}
          </span>
        </div>
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-12 uppercase tracking-widest">
          PATRONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {LEADERSHIP_DATA.map((person, index) => (
            <LeadershipCard key={index} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;