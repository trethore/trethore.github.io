'use client';

import {useEffect, useRef} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {FileText} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {gsap} from '@/lib/gsap';

export default function About() {
  const t = useTranslations();

  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // fade in on scroll
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

      // parallax effect on image placeholder
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
      <div className="mx-auto w-full px-4 lg:w-4/5">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-lg mb-6">{t('about.p1')}</p>
            <p className="text-lg mb-8">{t('about.p2')}</p>
            <Button size="lg" asChild>
              <a href="/cv.pdf" download>
                <FileText />
                {t('about.resume')}
              </a>
            </Button>
          </div>
          <div className="about-image relative overflow-hidden rounded-full aspect-square w-full max-w-sm mx-auto shadow-2xl border-4 border-primary/20 bg-muted">
            <Image
              src="/titouan_rethore.webp"
              alt="Titouan Réthoré"
              fill
              sizes="(min-width: 768px) 384px, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
