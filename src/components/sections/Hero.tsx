'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';

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

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (!element) return;

    const offsetTop = element.offsetTop - 64;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-greeting', ANIMATION_CONFIG.greeting);
      gsap.from('.hero-title-word', ANIMATION_CONFIG.titleWords);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-green-500/20 to-background dark:from-purple-500/20 dark:to-background"
    >
      <div className="mx-auto w-full px-4 lg:w-4/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] flex items-center justify-center">
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

        <a
          href="#about"
          onClick={handleScrollDown}
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-border/60 bg-background/40 p-2 text-foreground/70 backdrop-blur-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 animate-scroll-hint"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
