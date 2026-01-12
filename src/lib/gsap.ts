import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// register plugins once at module level
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
