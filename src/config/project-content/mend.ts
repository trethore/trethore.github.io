import type { ProjectContent } from '@/types';

export const mendContent: ProjectContent = {
  slug: 'mend',
  sections: [
    {
      titleKey: 'projects.content.mend.whatIsThis.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.mend.whatIsThis.p1' },
        { type: 'text', content: 'projects.content.mend.whatIsThis.p2' },
      ],
    },
    {
      titleKey: 'projects.content.mend.overview.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.mend.overview.intro' },
      ],
    },
    {
      titleKey: 'projects.content.mend.overview.features.title',
      level: 4,
      blocks: [
        {
          type: 'list',
          items: [
            'projects.content.mend.overview.features.interactive',
            'projects.content.mend.overview.features.ciMode',
            'projects.content.mend.overview.features.clipboard',
            'projects.content.mend.overview.features.fuzzyMatching',
            'projects.content.mend.overview.features.gitDiff',
            'projects.content.mend.overview.features.robustParser',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.mend.technical.title',
      level: 3,
      blocks: [],
    },
    {
      titleKey: 'projects.content.mend.technical.fuzzyLevels.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mend.technical.fuzzyLevels.intro' },
        {
          type: 'list',
          items: [
            'projects.content.mend.technical.fuzzyLevels.level0',
            'projects.content.mend.technical.fuzzyLevels.level1',
            'projects.content.mend.technical.fuzzyLevels.level2',
          ],
        },
        { type: 'text', content: 'projects.content.mend.technical.fuzzyLevels.explanation' },
      ],
    },
    {
      titleKey: 'projects.content.mend.technical.architecture.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mend.technical.architecture.intro' },
        {
          type: 'list',
          items: [
            'projects.content.mend.technical.architecture.parser',
            'projects.content.mend.technical.architecture.diff',
            'projects.content.mend.technical.architecture.patcher',
            'projects.content.mend.technical.architecture.error',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.mend.usage.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.mend.usage.intro' },
      ],
    },
    {
      titleKey: 'projects.content.mend.usage.basicUsage.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mend.usage.basicUsage.intro' },
        {
          type: 'code',
          language: 'bash',
          content: `# auto-detect target file from diff headers
mend my_changes.diff

# apply diff to specific target file
mend src/main.rs my_changes.diff

# pipe from git diff
git diff | mend

# apply from clipboard
mend -c`,
        },
      ],
    },
    {
      titleKey: 'projects.content.mend.usage.advanced.title',
      level: 4,
      blocks: [
        {
          type: 'code',
          language: 'bash',
          content: `# preview changes without writing
mend --dry-run my_changes.diff

# require confirmation for every hunk
mend --confirm my_changes.diff

# revert a previously applied patch
mend -r my_changes.diff

# CI mode: fail on any ambiguity
mend --ci my_changes.diff`,
        },
      ],
    },
    {
      titleKey: 'projects.content.mend.interactive.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.mend.interactive.intro' },
        {
          type: 'code',
          language: 'text',
          content: `[ERROR] Ambiguous match for hunk 1 in file src/main.rs. Possible locations:

> Option 1 (Line 42, Score: 0.95)
    40 | }
    41 |
    | 42  | fn main() { |
    | --- | ----------- |(Patch would be applied here, replacing 5 lines) ---
    47 |     println!("Exiting...");
    48 | }

> Option 2 (Line 118, Score: 0.85)
   116 | }
   117 |
   | 118 | fn old_main() { |
   | --- | --------------- |(Patch would be applied here, replacing 5 lines) ---
   123 |     println!("Old exit...");
   124 | }

Enter the index of the correct location, [s]kip this hunk, or [a]bort:`,
        },
        { type: 'text', content: 'projects.content.mend.interactive.explanation' },
      ],
    },
    {
      titleKey: 'projects.content.mend.opinion.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.mend.opinion.intro' },
        { type: 'text', content: 'projects.content.mend.opinion.llmProblem' },
        { type: 'text', content: 'projects.content.mend.opinion.rustChoice' },
        { type: 'text', content: 'projects.content.mend.opinion.fuzzyAlgorithm' },
        { type: 'text', content: 'projects.content.mend.opinion.future' },
      ],
    },
  ],
};
