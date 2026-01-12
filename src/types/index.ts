import type { ComponentType } from 'react';

export interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  featured: boolean;
  gradient: string;
  github: string;
  blogPostUrl?: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}

export interface NavLink {
  href: string;
  labelKey: string;
}

export interface AnimationConfig {
  opacity?: number;
  x?: number;
  y?: number;
  duration: number;
  delay?: number;
  stagger?: number;
  ease: string;
}
