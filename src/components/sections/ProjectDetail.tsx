'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, Github, ExternalLink, ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { gsap } from '@/lib/gsap';
import { getProjectContent } from '@/config/project-content';
import type { Project, ContentBlock, ProjectSection } from '@/types';

interface ProjectDetailProps {
  project: Project;
}

function CodeBlock({ language, content }: { language: string; content: string }) {
  return (
    <div className="relative rounded-lg bg-zinc-950 dark:bg-zinc-900 border border-border overflow-hidden my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 dark:bg-zinc-800 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-zinc-100">{content}</code>
      </pre>
    </div>
  );
}

function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div className="my-8 rounded-lg border-2 border-dashed border-border bg-muted/30 p-12 flex flex-col items-center justify-center gap-4">
      <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
      <p className="text-sm text-muted-foreground italic text-center">{alt}</p>
    </div>
  );
}

function ContentBlockRenderer({
  block,
  t,
}: {
  block: ContentBlock;
  t: (key: string) => string;
}) {
  switch (block.type) {
    case 'text':
      return (
        <p className="text-muted-foreground leading-relaxed mb-4">
          {t(block.content)}
        </p>
      );
    case 'code':
      return <CodeBlock language={block.language} content={block.content} />;
    case 'image-placeholder':
      return <ImagePlaceholder alt={t(block.alt)} />;
    case 'list':
      return (
        <ul className="list-disc list-outside ml-6 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-muted-foreground leading-relaxed">
              {t(item)}
            </li>
          ))}
        </ul>
      );
    case 'link':
      return (
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {t(block.label)}
        </a>
      );
    default:
      return null;
  }
}

function SectionRenderer({
  section,
  t,
}: {
  section: ProjectSection;
  t: (key: string) => string;
}) {
  const headingClasses = {
    2: 'text-3xl font-bold mt-12 mb-6 text-foreground',
    3: 'text-2xl font-bold mt-10 mb-4 text-foreground',
    4: 'text-xl font-semibold mt-8 mb-3 text-foreground',
  };

  const className = headingClasses[section.level];
  const titleText = t(section.titleKey);

  return (
    <div className="section-block">
      {section.level === 2 && <h2 className={className}>{titleText}</h2>}
      {section.level === 3 && <h3 className={className}>{titleText}</h3>}
      {section.level === 4 && <h4 className={className}>{titleText}</h4>}
      {section.blocks.map((block, i) => (
        <ContentBlockRenderer key={i} block={block} t={t} />
      ))}
    </div>
  );
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const t = useTranslations();
  const locale = useLocale();
  const containerRef = useRef<HTMLElement>(null);

  const content = getProjectContent(project.slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-header', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.project-tags', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.project-content', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.from('.project-links', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.6,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const title = t(project.titleKey);
  const description = t(project.descriptionKey);

  // tag translation map for french
  const tagTranslations: Record<string, string> = {
    '#Implement': '#réaliser',
    '#Fuzzy': '#flou',
    '#Patch': '#correctif',
    '#Optimize': '#optimiser',
    '#Market': '#marché',
    '#Administer': '#administrer',
    '#Manage': '#gérer',
    '#Collaborate': '#collaborer',
  };

  return (
    <main ref={containerRef} className="min-h-screen py-20">
      {/* gradient background matching project theme */}
      <div
        className={`fixed inset-0 bg-gradient-to-br ${project.gradient} opacity-30 -z-10`}
      />

      <div className="mx-auto w-full max-w-4xl px-4">
        {/* back link */}
        <Link
          href={`/${locale}/#projects`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('projects.backToProjects')}
        </Link>

        {/* header: title */}
        <header className="project-header mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {title}
          </h1>
        </header>

        {/* tags */}
        <div className="project-tags flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag) => {
            const displayTag =
              locale === 'fr' ? (tagTranslations[tag] ?? tag) : tag;

            return (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-background/80 backdrop-blur-sm text-sm"
              >
                {displayTag}
              </Badge>
            );
          })}
        </div>

        {/* main content / sections */}
        <section className="project-content mb-12">
          <div className="max-w-none">
            {/* description as intro */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>

            {/* render content sections if available */}
            {content ? (
              content.sections.map((section, i) => (
                <SectionRenderer key={i} section={section} t={t} />
              ))
            ) : (
              <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-8 text-center">
                <p className="text-muted-foreground italic">
                  {t('projects.sections')}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* links */}
        <footer className="project-links flex flex-wrap gap-4">
          {project.github !== '#' && (
            <Button asChild variant="outline" size="lg">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                {t('projects.code')}
              </a>
            </Button>
          )}

          {project.blogPostUrl && (
            <Button asChild variant="outline" size="lg">
              <a
                href={project.blogPostUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                {t('projects.demo')}
              </a>
            </Button>
          )}
        </footer>
      </div>
    </main>
  );
}
