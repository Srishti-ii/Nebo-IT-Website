import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ORG_MEMBERS } from '../constants';
import { OrgMember } from '../types';

const OrgCard: React.FC<{
    member: OrgMember;
    onSelect: (member: OrgMember) => void;
    className?: string;
}> = ({ member, onSelect, className = "" }) => {
    return (
        <motion.div
            id='team'
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(member)}
            // Added 'w-full' here to ensure it fills its container
            className={`relative w-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-4 rounded-xl shadow-lg cursor-pointer flex flex-col items-center text-center group overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-slate-600 mb-3 group-hover:border-cyan-400 transition-colors z-10">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white font-bold text-sm sm:text-base z-10">{member.name}</h3>
            <p className="text-cyan-400 text-xs sm:text-sm font-medium z-10">{member.role}</p>
        </motion.div>
    );
};

// Line connecting elements (vertical or horizontal)
const ConnectLine = ({ className = "" }: { className?: string }) => (
    <div className={`bg-slate-600 ${className}`} />
);

const OrganizationalChart: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<OrgMember | null>(null);

    return (
        <section id="org-structure" className="py-24 bg-slate-900/50 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        // APPLIED 320px FIX HERE: text-3xl, min-[375px]:text-4xl, and break-words
                        className="text-xl min-[375px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 px-4"
                    >
                        Organizational Structure
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6"
                    />
                </div>

                {/* The Tree Layout */}
                <div className="w-full overflow-x-auto pb-32 hide-scrollbar">
                    {/* ENFORCED MIN-WIDTH: This prevents the chart from squishing on mobile devices */}
                    <div className="min-w-[1024px] flex flex-col items-center mx-auto pt-4">
                        
                        {/* Level 1: Chairperson */}
                        <div className="w-56 sm:w-64">
                            <OrgCard
                                member={ORG_MEMBERS.chairperson}
                                onSelect={setSelectedMember}
                                className="border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                            />
                        </div>

                        {/* Vertical Line down from Chairperson */}
                        <ConnectLine className="w-1 h-10" />

                        {/* Level 1.5: Managing Director */}
                        <div className="w-56 sm:w-64">
                            <OrgCard member={ORG_MEMBERS.managingdirector} onSelect={setSelectedMember} />
                        </div>

                        <ConnectLine className="w-1 h-10" />

                        {/* Level 2: Directors (4 columns) */}
                        <div className="w-full max-w-6xl relative">
                            {/* HORIZONTAL LINE TRICK: 
                                Spans exactly from the center of the first column (12.5%) 
                                to the center of the last column (12.5% from right)
                            */}
                            <ConnectLine className="absolute top-0 left-[12.5%] right-[12.5%] h-1" />
                            
                            <div className="flex w-full justify-between">
                                {/* 2A: Tech */}
                                <div className="w-1/4 flex flex-col items-center px-4">
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.directorTech} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.teamLeader} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.architects} onSelect={setSelectedMember} />
                                </div>
                            
                                {/* 2B: Sales */}
                                <div className="w-1/4 flex flex-col items-center px-4">
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.directorSales} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.teamSales} onSelect={setSelectedMember} />
                                </div>

                                {/* 2C: Project */}
                                <div className="w-1/4 flex flex-col items-center px-4">
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.directorProject} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.teamProject} onSelect={setSelectedMember} />
                                </div>

                                {/* 2D: Finance */}
                                <div className="w-1/4 flex flex-col items-center px-4">
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.directorFinance} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.financeTeam} onSelect={setSelectedMember} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal / Expansion details */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
                        >
                            {/* Glow Behind */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />

                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2 bg-slate-800/50 rounded-full hover:bg-slate-800"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-500/30 flex-shrink-0 shadow-lg">
                                    <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center sm:text-left pt-2">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">{selectedMember.name}</h3>
                                    <p className="text-cyan-400 font-medium text-lg">{selectedMember.role}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">About Role</h4>
                                    <p className="text-slate-300 leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                        {selectedMember.details}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">Experience</h4>
                                    <ul className="space-y-2">
                                        {selectedMember.experiences?.map((exp, idx) => (
                                            <motion.li
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * idx }}
                                                key={idx}
                                                className="flex items-start text-slate-300 bg-slate-800/30 p-3 rounded-lg border border-slate-700/30"
                                            >
                                                <span className="text-cyan-400 mr-3 mt-1 text-lg leading-none">•</span>
                                                <span>{exp}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default OrganizationalChart;