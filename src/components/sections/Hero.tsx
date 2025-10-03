'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';

const IconCloud = dynamic(() => import('@/components/IconCloud'), {
  ssr: false,
});

const ANIMATION_CONFIG = {
  greeting: {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out',
  },
  titleWords: {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.1,
    delay: 0.8,
    ease: 'power3.out',
  },
} as const;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-greeting', ANIMATION_CONFIG.greeting);
      gsap.from('.hero-title-word', ANIMATION_CONFIG.titleWords);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-green-500/20 to-background dark:from-purple-500/20 dark:to-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] flex items-center justify-center" ref={globeRef}>
            <IconCloud />
          </div>

          <div className="text-left space-y-6">
            <div className="hero-greeting flex items-center gap-3 text-lg md:text-xl">
              <span className="text-2xl">🇫🇷</span>
              <span className="text-muted-foreground">Hi, I'm Titouan Réthoré</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <div className="hero-title-word text-glint mb-2">
                SOFTWARE
              </div>
              <div className="hero-title-word text-glint mb-2">
                ENGINEER
              </div>
              <div className="hero-title-word text-muted-foreground text-3xl md:text-4xl lg:text-5xl mt-4">
                & JAVA ENTHUSIAST
              </div>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
