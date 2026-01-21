
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  video?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export type SectionId = 'home' | 'services' | 'work' | 'team' | 'contact';
