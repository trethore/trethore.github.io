'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A cutting-edge web application with modern features',
    tags: ['React', 'Next.js', 'TypeScript'],
    featured: true,
    gradient: 'from-blue-500/20 to-purple-500/20',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An innovative mobile-first platform',
    tags: ['React Native', 'Firebase', 'Redux'],
    featured: false,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Full-stack e-commerce solution',
    tags: ['Node.js', 'PostgreSQL', 'Stripe'],
    featured: true,
    gradient: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Real-time collaboration tool',
    tags: ['WebSockets', 'Express', 'MongoDB'],
    featured: false,
    gradient: 'from-pink-500/20 to-rose-500/20',
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'AI-powered analytics dashboard',
    tags: ['Python', 'TensorFlow', 'React'],
    featured: false,
    gradient: 'from-violet-500/20 to-indigo-500/20',
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'Beautiful design system and component library',
    tags: ['Tailwind', 'Storybook', 'Figma'],
    featured: false,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.project-card', {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="projects-title text-4xl md:text-5xl font-bold mb-16">
          Featured Projects
        </h2>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                project.featured
                  ? 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2'
                  : 'md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />

              <div className="relative h-full flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-background/80 backdrop-blur-sm hover:bg-background transition-colors text-sm font-medium"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
