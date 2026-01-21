
import React from 'react';
import { Code, Figma, Aperture, LineChart } from 'lucide-react';
import { Service, TeamMember, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with the latest technologies like React, Next.js, and Node.',
    icon: 'Code',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centric designs that focus on intuition, aesthetic appeal, and seamless interaction patterns.',
    icon: 'Figma',
  },
  {
    id: 'motion',
    title: 'Motion Graphics',
    description: 'Dynamic visual storytelling through complex animations and interactive 3D elements for the modern web.',
    icon: 'Aperture',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Strategic technical advice to help scale your product and optimize architecture for growth.',
    icon: 'LineChart',
  }
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Alex Rivera', role: 'Lead Architect', image: 'https://picsum.photos/seed/alex/200' },
  { id: '2', name: 'Sarah Chen', role: 'UX Director', image: 'https://picsum.photos/seed/sarah/200' },
  { id: '3', name: 'Marcus Bell', role: 'Motion Lead', image: 'https://picsum.photos/seed/marcus/200' },
  { id: '4', name: 'Elena Frost', role: 'Frontend Expert', image: 'https://picsum.photos/seed/elena/200' },
];

export const PROJECTS: Project[] = [
  { id: 'p1', title: 'CyberSphere', category: 'Platform Design', image: 'https://picsum.photos/seed/p1/800/600' },
  { id: 'p2', title: 'NeonVault', category: 'FinTech', image: 'https://picsum.photos/seed/p2/800/600' },
  { id: 'p3', title: 'Aura Fitness', category: 'Mobile App', image: 'https://picsum.photos/seed/p3/800/600' },
  { id: 'p4', title: 'Zenith Agency', category: 'Branding', image: 'https://picsum.photos/seed/p4/800/600' },
];

export const CLIENT_LOGOS = [
  'GMR', 'BMC', 'Delhi Jal Board', 'ICAR'
];
