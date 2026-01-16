'use client';

import {useTranslations} from 'next-intl';
import type {SkillKey} from '@/types';

interface ProjectTitleProps {
  skillKey: SkillKey;
  title: string;
  isHovered?: boolean;
}

export function ProjectTitle({skillKey, title, isHovered = false}: ProjectTitleProps) {
  const tSkills = useTranslations('skills');

  return (
    <span>
      <span className="inline-flex flex-col">
        <span>{tSkills(skillKey)}</span>
        <span
          className={`h-0.5 bg-gradient-to-r from-primary/40 to-primary transition-all duration-500 ease-in-out ${
            isHovered ? 'w-full' : 'w-0'
          }`}
        />
      </span>
      <span> : {title}</span>
    </span>
  );
}
