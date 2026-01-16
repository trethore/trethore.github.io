import type { ProjectContent } from '@/types';
import { mqsContent } from './mqs';

export const PROJECT_CONTENT: Record<string, ProjectContent> = {
  mqs: mqsContent,
};

export function getProjectContent(slug: string): ProjectContent | undefined {
  return PROJECT_CONTENT[slug];
}
