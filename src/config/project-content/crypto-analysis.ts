import type { ProjectContent } from '@/types';

export const cryptoAnalysisContent: ProjectContent = {
  slug: 'crypto-analysis',
  sections: [
    {
      titleKey: 'projects.content.cryptoAnalysis.whatIsThis.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.cryptoAnalysis.whatIsThis.p1' },
        { type: 'text', content: 'projects.content.cryptoAnalysis.whatIsThis.p2' },
      ],
    },
    {
      titleKey: 'projects.content.cryptoAnalysis.overview.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.cryptoAnalysis.overview.intro' },
        { type: 'image-placeholder', alt: 'projects.content.cryptoAnalysis.overview.tuiAlt' },
      ],
    },
    {
      titleKey: 'projects.content.cryptoAnalysis.overview.pipeline.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.cryptoAnalysis.overview.pipeline.intro' },
        {
          type: 'list',
          items: [
            'projects.content.cryptoAnalysis.overview.pipeline.prepare',
            'projects.content.cryptoAnalysis.overview.pipeline.clean',
            'projects.content.cryptoAnalysis.overview.pipeline.analyze',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.cryptoAnalysis.model.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.cryptoAnalysis.model.intro' },
      ],
    },
    {
      titleKey: 'projects.content.cryptoAnalysis.model.markowitz.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.cryptoAnalysis.model.markowitz.intro' },
        {
          type: 'list',
          items: [
            'projects.content.cryptoAnalysis.model.markowitz.returns',
            'projects.content.cryptoAnalysis.model.markowitz.annualized',
            'projects.content.cryptoAnalysis.model.markowitz.portfolio',
            'projects.content.cryptoAnalysis.model.markowitz.projection',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.cryptoAnalysis.model.riskProfiles.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.cryptoAnalysis.model.riskProfiles.intro' },
        {
          type: 'code',
          language: 'rust',
          content: `let inv_w = inverse_vol_weights(&sigmas_ann);
let vol_w = vol_proportional_weights(&sigmas_ann);
let blend = match risk { Low => 0.0, Medium => 0.45, High => 0.70 };
let mut weights: Vec<f64> = inv_w.iter()
    .zip(vol_w.iter())
    .map(|(a, b)| (1.0 - blend) * a + blend * b)
    .collect();
apply_caps(&mut weights, 0.05, 0.70); // bounds 5% / 70%`,
        },
        {
          type: 'list',
          items: [
            'projects.content.cryptoAnalysis.model.riskProfiles.low',
            'projects.content.cryptoAnalysis.model.riskProfiles.medium',
            'projects.content.cryptoAnalysis.model.riskProfiles.high',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.cryptoAnalysis.tui.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.cryptoAnalysis.tui.intro' },
        {
          type: 'list',
          items: [
            'projects.content.cryptoAnalysis.tui.content',
            'projects.content.cryptoAnalysis.tui.summary',
            'projects.content.cryptoAnalysis.tui.graphs',
            'projects.content.cryptoAnalysis.tui.advanced',
          ],
        },
        { type: 'image-placeholder', alt: 'projects.content.cryptoAnalysis.tui.graphAlt' },
      ],
    },
    {
      titleKey: 'projects.content.cryptoAnalysis.usage.title',
      level: 3,
      blocks: [
        {
          type: 'code',
          language: 'bash',
          content: `# Clone and run
git clone git@github.com:trethore/R5C06-Crypto-Analysis.git
cd R5C06-Crypto-Analysis/
cargo run

# In the TUI:
# 1. Prepare - Download and extract Kraken archive
# 2. Clean - Filter USD pairs to data/clean
# 3. Analyze - Calculate weights and projections`,
        },
      ],
    },
    {
      titleKey: 'projects.content.cryptoAnalysis.opinion.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.cryptoAnalysis.opinion.intro' },
        { type: 'text', content: 'projects.content.cryptoAnalysis.opinion.rustTui' },
        { type: 'text', content: 'projects.content.cryptoAnalysis.opinion.mathModel' },
        { type: 'text', content: 'projects.content.cryptoAnalysis.opinion.teamwork' },
        { type: 'text', content: 'projects.content.cryptoAnalysis.opinion.limitations' },
      ],
    },
  ],
};
