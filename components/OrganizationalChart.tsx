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
        <section id="org-structure" className="py-24 bg-[var(--bg-secondary)]/50 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl min-[375px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-main)] px-4"
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

                        {/* Level 2: Directors (5 columns) */}
                        <div className="w-full max-w-7xl relative mt-0">
                            {/* HORIZONTAL LINE TRICK */}
                            <ConnectLine className="absolute top-0 left-[10%] right-[10%] h-1" />
                            
                            <div className="flex w-full justify-between">
                                {/* 2: Joint MD / Project (Rita) */}
                                <div className="w-1/5 flex flex-col items-center px-2">
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.directorProject} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.teamProject} onSelect={setSelectedMember} />
                                </div>
                                {/* 3: Finance (Akash) */}
                                <div className="w-1/5 flex flex-col items-center px-2">
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.directorFinance} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.financeTeam} onSelect={setSelectedMember} />
                                </div>
                                {/* 1: HR/Marketing (Anant) */}
                                <div className="w-1/5 flex flex-col items-center px-2">
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.directorSales} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.teamSales} onSelect={setSelectedMember} />
                                </div>
  
                                {/* 5: IT (Pranav) */}
                                <div className="w-1/5 flex flex-col items-center px-2">
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.directorTech} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.teamLeader} onSelect={setSelectedMember} />
                                    <ConnectLine className="w-1 h-8" />
                                    <OrgCard member={ORG_MEMBERS.architects} onSelect={setSelectedMember} />
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
                        // Added fixed padding and flex alignment to prevent the modal from getting stuck off-screen
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--bg-primary)]/80 backdrop-blur-sm"
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            // MODIFIED: Added max-h-[90vh] to constrain height, and flex flex-col so internal scrolling works
                            className="bg-[var(--bg-secondary)] border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] shadow-2xl relative overflow-hidden flex flex-col"
                        >
                            {/* Glow Behind */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />

                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 z-10 text-[var(--text-muted)] hover:text-white transition-colors p-2 bg-[var(--bg-secondary)]/50 rounded-full hover:bg-[var(--bg-secondary)]"
                            >
                                <X size={20} />
                            </button>

                            {/* MODIFIED: Added overflow-y-auto to allow scrolling *inside* the modal, hiding the main scrollbar for aesthetics */}
                            <div className="overflow-y-auto pr-2 pb-4 -mr-2 hide-scrollbar">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 mt-4 sm:mt-0">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-500/30 flex-shrink-0 shadow-lg">
                                        <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-center sm:text-left pt-2">
                                        <h3 className="text-2xl sm:text-3xl font-bold var(--text-main) mb-1 pr-6">{selectedMember.name}</h3>
                                        <p className="text-cyan-400 font-medium text-lg">{selectedMember.role}</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-[var(--text-muted)] font-bold mb-2">About Role</h4>
                                        <p className="text-[var(--text-muted)] leading-relaxed bg-[var(--bg-secondary)]/50 p-4 rounded-xl border border-slate-700/50">
                                            {selectedMember.details}
                                        </p>
                                    </div>

                                    {selectedMember.experiences && selectedMember.experiences.length > 0 && (
                                        <div>
                                            <h4 className="text-sm uppercase tracking-wider text-[var(--text-muted)] font-bold mb-2">Experience</h4>
                                            <ul className="space-y-2">
                                                {selectedMember.experiences.map((exp, idx) => (
                                                    <motion.li
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * idx }}
                                                        key={idx}
                                                        className="flex items-start text-[var(--text-muted)] bg-[var(--bg-secondary)]/30 p-3 rounded-lg border border-slate-700/30"
                                                    >
                                                        <span className="text-cyan-400 mr-3 mt-1 text-lg leading-none">•</span>
                                                        <span>{exp}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
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