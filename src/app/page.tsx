import ScrollWrapper from '@/components/layout/ScrollWrapper';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <ScrollWrapper>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ScrollWrapper>
  );
}
