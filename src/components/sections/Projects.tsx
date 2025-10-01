'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A cutting-edge web application with modern features',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An innovative mobile-first platform',
    tags: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Full-stack e-commerce solution',
    tags: ['Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Real-time collaboration tool',
    tags: ['WebSockets', 'Express', 'MongoDB'],
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'AI-powered analytics dashboard',
    tags: ['Python', 'TensorFlow', 'React'],
  },
  {
    id: 6,
    title: 'Project Six',
    description: 'Beautiful design system and component library',
    tags: ['Tailwind', 'Storybook', 'Figma'],
  },
];

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.projects-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 80%',
        },
      });

      // Stagger animation for project cards
      gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={projectsRef} className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="projects-title text-4xl md:text-5xl font-bold mb-12 text-center">
          My Projects
        </h2>
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="project-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-muted rounded-lg aspect-video mb-4 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Project Preview</p>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
