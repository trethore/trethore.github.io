import type { ProjectContent } from '@/types';
import { mqsContent } from './mqs';
import { mendContent } from './mend';
import { blocktrackContent } from './blocktrack';
import { cryptoAnalysisContent } from './crypto-analysis';
import { musicAnalysisContent } from './music-analysis';
import { portfolioContent } from './portfolio';

export const PROJECT_CONTENT: Record<string, ProjectContent> = {
  mqs: mqsContent,
  mend: mendContent,
  blocktrack: blocktrackContent,
  'crypto-analysis': cryptoAnalysisContent,
  'music-analysis': musicAnalysisContent,
  portfolio: portfolioContent,
};

export function getProjectContent(slug: string): ProjectContent | undefined {
  return PROJECT_CONTENT[slug];
}
