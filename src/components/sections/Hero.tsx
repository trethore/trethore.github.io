'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleChars = gsap.utils.toArray('.hero-title-char');

      gsap.from(titleChars, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      });

      gsap.to(titleChars, {
        y: -10,
        duration: 2,
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true,
        },
        ease: 'sine.inOut',
        delay: 1,
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-green-500/20 to-background dark:from-purple-500/20 dark:to-background"
    >
      <div className="container mx-auto px-4 text-center -mt-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 inline-flex flex-wrap justify-center gap-x-2">
          {['W', 'e', 'l', 'c', 'o', 'm', 'e', '\u00A0', 't', 'o', '\u00A0', 'M', 'y', '\u00A0', 'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'].map((char, i) => (
            <span key={i} className="hero-title-char inline-block">
              {char}
            </span>
          ))}
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
