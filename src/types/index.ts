import type { ComponentType } from 'react';

export interface Project {
  id: number;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  tagKeys: string[];
  featured: boolean;
  gradient: string;
  github?: string;
  blogPostUrl?: string;
}

export interface SocialLink {
  href: string;
  labelKey: string;
  icon: ComponentType<{ className?: string }>;
}

export interface NavLink {
  href: string;
  labelKey: string;
}

// project content types for detailed project pages
export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'code'; language: string; content: string }
  | { type: 'image-placeholder'; alt: string }
  | { type: 'list'; items: string[] }
  | { type: 'link'; href: string; label: string };

export interface ProjectSection {
  titleKey: string;
  level: 2 | 3 | 4; // h2, h3, h4
  blocks: ContentBlock[];
}

export interface ProjectContent {
  slug: string;
  sections: ProjectSection[];
}
