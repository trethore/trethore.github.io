'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in on scroll
      gsap.from('.about-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Parallax effect on image placeholder
      gsap.to('.about-image', {
        y: -50,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-image bg-muted rounded-lg aspect-square flex items-center justify-center">
            <p className="text-muted-foreground">Image Placeholder</p>
          </div>
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate developer with expertise in creating modern web applications.
              I love bringing ideas to life through clean code and beautiful design.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With a focus on user experience and performance, I strive to build products
              that make a difference.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">GSAP</Badge>
              <Badge variant="secondary">Node.js</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
