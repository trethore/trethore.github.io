import type { ProjectContent } from '@/types';

export const musicAnalysisContent: ProjectContent = {
  slug: 'music-analysis',
  sections: [
    {
      titleKey: 'projects.content.musicAnalysis.whatIsThis.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.whatIsThis.p1' },
        { type: 'text', content: 'projects.content.musicAnalysis.whatIsThis.p2' },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.overview.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.overview.intro' },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.overview.tracks.title',
      level: 4,
      blocks: [
        {
          type: 'list',
          items: [
            'projects.content.musicAnalysis.overview.tracks.t1',
            'projects.content.musicAnalysis.overview.tracks.t2',
            'projects.content.musicAnalysis.overview.tracks.t3',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.database.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.database.intro' },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.database.schema.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.database.schema.intro' },
        {
          type: 'list',
          items: [
            'projects.content.musicAnalysis.database.schema.track',
            'projects.content.musicAnalysis.database.schema.artist',
            'projects.content.musicAnalysis.database.schema.album',
            'projects.content.musicAnalysis.database.schema.audioFeature',
            'projects.content.musicAnalysis.database.schema.temporalFeature',
            'projects.content.musicAnalysis.database.schema.user',
          ],
        },
        { type: 'text', content: 'projects.content.musicAnalysis.database.schema.features' },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.recommenders.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.recommenders.intro' },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.recommenders.itemBased.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.recommenders.itemBased.intro' },
        {
          type: 'code',
          language: 'bash',
          content: `# Item-based audio recommendation with weighted similarity
PYTHONPATH="T3_Recommandation/src" python -m item_based_audio.cli \\
  --track-id 0eef0068-99b1-45a1-92f1-57c277bb9501 \\
  --n 10 \\
  --audio-weight 0.75 \\
  --random-noise 0.01`,
        },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.recommenders.userBased.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.recommenders.userBased.intro' },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.recommenders.neuralNetwork.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.recommenders.neuralNetwork.intro' },
        {
          type: 'code',
          language: 'text',
          content: `Input (9 features)
    ↓
Dense 256 → ReLU → Dropout 0.1
    ↓
Dense 128 → ReLU → Dropout 0.1
    ↓
Dense 1 (output)

Loss: SmoothL1Loss
Optimizer: Adam + ReduceLROnPlateau
Gradient Clipping: 1.0`,
        },
        { type: 'text', content: 'projects.content.musicAnalysis.recommenders.neuralNetwork.training' },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.dataProcessing.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.dataProcessing.intro' },
        {
          type: 'list',
          items: [
            'projects.content.musicAnalysis.dataProcessing.cleaning',
            'projects.content.musicAnalysis.dataProcessing.validation',
            'projects.content.musicAnalysis.dataProcessing.merging',
            'projects.content.musicAnalysis.dataProcessing.visualization',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.musicAnalysis.opinion.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.musicAnalysis.opinion.intro' },
        { type: 'text', content: 'projects.content.musicAnalysis.opinion.dataChallenge' },
        { type: 'text', content: 'projects.content.musicAnalysis.opinion.iterativeApproach' },
        { type: 'text', content: 'projects.content.musicAnalysis.opinion.teamCollaboration' },
        { type: 'text', content: 'projects.content.musicAnalysis.opinion.learnings' },
      ],
    },
  ],
};
