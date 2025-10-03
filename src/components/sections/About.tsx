'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

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
    <section id="about" ref={aboutRef} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6">
              I'm a passionate developer with expertise in creating modern web applications.
              I love bringing ideas to life through clean code and beautiful design.
            </p>
            <p className="text-lg mb-8">
              With a focus on user experience and performance, I strive to build products
              that make a difference.
            </p>
            <Button size="lg">
              <FileText />
              RESUME
            </Button>
          </div>
          <div className="about-image bg-muted rounded-full aspect-square w-full max-w-sm mx-auto flex items-center justify-center shadow-2xl border-4 border-primary/20">
            <p className="text-muted-foreground">Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
