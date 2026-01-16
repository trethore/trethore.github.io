import type { ProjectContent } from '@/types';

export const portfolioContent: ProjectContent = {
  slug: 'portfolio',
  sections: [
    {
      titleKey: 'projects.content.portfolio.whatIsThis.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.portfolio.whatIsThis.p1' },
        { type: 'text', content: 'projects.content.portfolio.whatIsThis.p2' },
      ],
    },
    {
      titleKey: 'projects.content.portfolio.overview.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.portfolio.overview.intro' },
      ],
    },
    {
      titleKey: 'projects.content.portfolio.overview.techStack.title',
      level: 4,
      blocks: [
        {
          type: 'list',
          items: [
            'projects.content.portfolio.overview.techStack.nextjs',
            'projects.content.portfolio.overview.techStack.react',
            'projects.content.portfolio.overview.techStack.tailwind',
            'projects.content.portfolio.overview.techStack.nextIntl',
            'projects.content.portfolio.overview.techStack.radix',
            'projects.content.portfolio.overview.techStack.gsap',
            'projects.content.portfolio.overview.techStack.nextThemes',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.portfolio.features.title',
      level: 3,
      blocks: [],
    },
    {
      titleKey: 'projects.content.portfolio.features.i18n.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.portfolio.features.i18n.intro' },
        {
          type: 'code',
          language: 'typescript',
          content: `// server component
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('projects');
  return <h1>{t('title')}</h1>;
}

// client component
import { useTranslations } from 'next-intl';

export function ProjectCard() {
  const t = useTranslations('projects');
  return <p>{t('description')}</p>;
}`,
        },
      ],
    },
    {
      titleKey: 'projects.content.portfolio.features.theming.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.portfolio.features.theming.intro' },
      ],
    },
    {
      titleKey: 'projects.content.portfolio.features.animations.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.portfolio.features.animations.intro' },
        {
          type: 'code',
          language: 'typescript',
          content: `import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// animate elements on scroll
gsap.from('.project-card', {
  scrollTrigger: {
    trigger: '.projects-section',
    start: 'top 80%',
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
});`,
        },
      ],
    },
    {
      titleKey: 'projects.content.portfolio.structure.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.portfolio.structure.intro' },
        {
          type: 'code',
          language: 'text',
          content: `src/
├── app/
│   ├── [locale]/          # locale-aware routes
│   │   ├── page.tsx       # home page
│   │   ├── projects/      # projects listing
│   │   └── [slug]/        # dynamic project pages
│   ├── layout.tsx         # root layout
│   └── globals.css        # global styles
├── components/
│   ├── layout/            # navbar, footer, etc.
│   ├── sections/          # page sections
│   └── ui/                # reusable primitives
├── config/
│   ├── projects.ts        # project definitions
│   └── project-content/   # detailed blog content
├── i18n/                  # next-intl configuration
└── messages/              # translation files
    ├── en.json
    └── fr.json`,
        },
      ],
    },
    {
      titleKey: 'projects.content.portfolio.opinion.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.portfolio.opinion.intro' },
        { type: 'text', content: 'projects.content.portfolio.opinion.nextjsExperience' },
        { type: 'text', content: 'projects.content.portfolio.opinion.i18nChallenge' },
        { type: 'text', content: 'projects.content.portfolio.opinion.designPhilosophy' },
        { type: 'text', content: 'projects.content.portfolio.opinion.continuousImprovement' },
      ],
    },
  ],
};
