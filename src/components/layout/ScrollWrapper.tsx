'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    const ctx = gsap.context(() => {
      // ScrollTrigger setup will be done in individual sections
    }, wrapperRef);

    return () => {
      ctx.revert(); // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="scroll-wrapper">
      {children}
    </div>
  );
}
