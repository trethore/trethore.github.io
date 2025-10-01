'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm a creative developer crafting beautiful digital experiences
        </p>
        <div className="hero-cta flex gap-4 justify-center">
          <Button size="lg">View My Work</Button>
          <Button size="lg" variant="outline">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
