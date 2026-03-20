import React, { useState } from 'react';

const LEADERSHIP_DATA = [
  {
    name: "Vir Bhan Sood",
    image: "/images/Sood.jpg",
    description: "25 years’ experience in Quality Assurance and inspection with RITES Limited, premier Third Party Inspection & Consultancy Organization. Conducted inspection of apprx.16000 tons of 60 Kg UIC Rails in China and wheels & wheel sets in Romania besides inspection of Wheels, Axles, Tyres & Wheel sets and other M&P items in foreign countries. Organized and supervised Quality Assurance and inspection of machinery Plant and equipment procured against World Bank funded projects of Health System Corporation of different State Governments on behalf of Oil Sector Clients such as Indian Oil Corporation Limited and IBP Co Ltd. Etc. Upgraded the RITES Northern Region Laboratory for testing of Metals. Surveillance of private and other Government testing laboratories. Vendor assessment prior to their approval .Construction supervision of Retail Outlets of IBP Company in Northern and Eastern Regions for assuring the Quality of works. Trained Lead Assessor in ISO 9001 and ISO 14001, worked as Management Representative Northern Region, RITES for.ISO 9001 from Aug 97 to Feb. 2004.Changed ISO Manual from 1994 version to 2000 version. In 2005 prepared Manual for ISO 17020 for RITES QA Division for its certification as Inspection agency. Consultancy works. Conducted ISO audits in different Divisions of RITES. Freelance Empanelled Assessor for National Accreditation Board for certifying Bodies, for assessment of Certification Bodies and inspection bodies for 08 years. . Member of NABCB Accreditation Committee From August 2021 to July 2023."
  },
  {
    name: "Rajesh Khare",
    image: "/images/rajesh.png",
    description: "Mr. Khare, a Seasoned Chartered Civil Engineering Professional with 45+ years of experience in planning, design, and execution of infrastructure projects including roads, water supply, sewerage, wastewater systems, and smart city developments. Proven expertise in project management, structural design, and quality compliance with strong leadership in large-scale public infrastructure projects. He has gained this experience while working in different capacities in Govt. departments and is associated with us as Country Head."
  },
  {
    name: "Indu Kumar Srivastava",
    image: "/images/indu.png",
    description: "Mr. Indu Kant Srivastava is a distinguished Civil Engineering graduate with an illustrious career spanning 39 years of dedicated service at U.P. Jal Nigam. A veteran in the field of public infrastructure, he has developed an unparalleled mastery over the entire lifecycle of Water Supply Projects, ranging from initial conceptualization and design to ground-level execution and large-scale supervision. Beyond his specialization in water systems, Mr. Srivastava’s technical footprint extends to the successful management of complex Building and Road projects, demonstrating a versatile engineering acumen. His nearly four decades at the forefront of state-level infrastructure development have equipped him with deep expertise in navigating regulatory frameworks, ensuring quality compliance, and leading multi-disciplinary teams through high-stakes engineering challenges. His career is a testament to technical excellence and a lifelong commitment to enhancing public utility systems."
  },
  {
    name: "Arun Kumar Tyagi",
    image: "/images/Arun.jpeg",
    description: "Mr. Arun Kumar Tyagi is a distinguished professional with a robust background in engineering and management (BE, MBA, FIE). He has a proven track record of leadership in the public sector, having served as the Chief Project Officer for UREDA (Uttarakhand Renewable Energy Development Agency) and as an Advisor to the Planning Department for the Government of Uttarakhand. With deep expertise in large-scale project implementation and strategic planning, Mr. Tyagi specializes in steering complex initiatives from conception to execution within government frameworks. As a Fellow of the Institution of Engineers (FIE), he brings a high level of technical authority and administrative excellence to our leadership team."
  },
  
];

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
        
        {/* Header: Name and Role */}
        <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'ml-0 mt-28' : 'ml-[35%]'}`}>
          <h3 className={`text-white leading-tight font-extrabold transition-all duration-500 ${isExpanded ? 'text-lg mb-1' : 'text-sm mb-1'}`}>
            {person.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-blue-400 text-[9px] font-bold uppercase tracking-tighter">
              {person.role}
            </span>
            <div className="h-[1px] flex-grow bg-blue-400/20"></div>
          </div>
        </div>

        {/* The Image: "grayscale" removed to show color */}
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

        {/* Description Body */}
        <div className={`transition-all duration-500 ease-in-out flex-grow ${isExpanded ? 'mt-2 ml-0' : 'ml-[35%] mt-0'}`}>
          <p className={`text-slate-300 leading-relaxed transition-all duration-500 ${
            isExpanded ? 'text-[11px]' : 'text-[10px] line-clamp-4'
          }`}>
            {person.description}
          </p>
        </div>

        {/* Footer Link */}
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