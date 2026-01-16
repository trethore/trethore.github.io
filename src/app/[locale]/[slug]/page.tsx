import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/routing';
import { PROJECTS } from '@/config';
import ProjectDetail from '@/components/sections/ProjectDetail';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// generate static params for all project/locale combinations
export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const project of PROJECTS) {
      params.push({ locale, slug: project.slug });
    }
  }

  return params;
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);

  // find project by slug
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
