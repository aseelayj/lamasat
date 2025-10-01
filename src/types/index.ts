export interface Project {
  title: string;
  latitude: number;
  longitude: number;
}

export interface HeroSlide {
  id: number;
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: string;
}

export interface ProjectCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  location?: string;
  status: 'available' | 'sold' | 'coming-soon';
  acceptsFinancing: boolean;
  image: string;
  link: string;
}