'use client';

import {useEffect, useRef} from 'react';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {Github} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {PROJECTS} from '@/config';
import {gsap} from '@/lib/gsap';

export default function Projects() {
  const t = useTranslations();
  const tTags = useTranslations('tags');
  const locale = useLocale();

  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.project-card', {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="min-h-screen py-20">
      <div className="mx-auto w-full px-4 lg:w-4/5">
        <h2 className="projects-title text-4xl md:text-5xl font-bold mb-16">
          {t('projects.title')}
        </h2>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(280px,_auto)] gap-4">
          {PROJECTS.map((project) => {
            const title = t(project.titleKey);
            const description = t(project.descriptionKey);

            return (
              <Link
                key={project.id}
                href={`/${locale}/${project.slug}`}
                className={`project-card group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 cursor-pointer ${
                  project.featured
                    ? 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2'
                    : 'md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1'
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
                />

                <div className="relative h-full flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tagKeys.map((tagKey) => (
                        <Badge
                          key={tagKey}
                          variant="secondary"
                          className="bg-background/80 backdrop-blur-sm"
                        >
                          {tTags(tagKey)}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.github, '_blank', 'noopener,noreferrer');
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-background/80 backdrop-blur-sm hover:bg-background transition-colors text-sm font-medium"
                        aria-label={t('projects.viewOnGithub', {title})}
                      >
                        <Github className="w-4 h-4" />
                        {t('projects.code')}
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
