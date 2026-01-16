import type { ProjectContent } from '@/types';

export const blocktrackContent: ProjectContent = {
  slug: 'blocktrack',
  sections: [
    {
      titleKey: 'projects.content.blocktrack.whatIsThis.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.blocktrack.whatIsThis.p1' },
        { type: 'text', content: 'projects.content.blocktrack.whatIsThis.p2' },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.overview.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.blocktrack.overview.intro' },
        { type: 'image-placeholder', alt: 'projects.content.blocktrack.overview.architectureAlt' },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.overview.features.title',
      level: 4,
      blocks: [
        {
          type: 'list',
          items: [
            'projects.content.blocktrack.overview.features.leaderboard',
            'projects.content.blocktrack.overview.features.search',
            'projects.content.blocktrack.overview.features.favorites',
            'projects.content.blocktrack.overview.features.details',
            'projects.content.blocktrack.overview.features.auth',
            'projects.content.blocktrack.overview.features.responsive',
            'projects.content.blocktrack.overview.features.theme',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.overview.techStack.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.blocktrack.overview.techStack.frontendIntro' },
        {
          type: 'list',
          items: [
            'projects.content.blocktrack.overview.techStack.react',
            'projects.content.blocktrack.overview.techStack.vite',
            'projects.content.blocktrack.overview.techStack.apollo',
            'projects.content.blocktrack.overview.techStack.tailwind',
            'projects.content.blocktrack.overview.techStack.framer',
            'projects.content.blocktrack.overview.techStack.recharts',
          ],
        },
        { type: 'text', content: 'projects.content.blocktrack.overview.techStack.backendIntro' },
        {
          type: 'list',
          items: [
            'projects.content.blocktrack.overview.techStack.nestjs',
            'projects.content.blocktrack.overview.techStack.graphql',
            'projects.content.blocktrack.overview.techStack.prisma',
            'projects.content.blocktrack.overview.techStack.jwt',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.architecture.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.blocktrack.architecture.intro' },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.architecture.cleanArch.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.blocktrack.architecture.cleanArch.intro' },
        {
          type: 'list',
          items: [
            'projects.content.blocktrack.architecture.cleanArch.domain',
            'projects.content.blocktrack.architecture.cleanArch.useCases',
            'projects.content.blocktrack.architecture.cleanArch.adapters',
            'projects.content.blocktrack.architecture.cleanArch.frameworks',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.api.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.blocktrack.api.intro' },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.api.queries.title',
      level: 4,
      blocks: [
        {
          type: 'code',
          language: 'graphql',
          content: `# Fetch all tokens for leaderboard
query Tokens {
  tokens {
    id
    name
    symbol
    price
    marketCap
    percentChange24h
  }
}

# Get detailed token information
query Token($input: GetTokenInput!) {
  token(input: $input) {
    id
    name
    symbol
    price
    marketCap
    volume24h
    circulatingSupply
    maxSupply
    priceHistory {
      timestamp
      price
    }
  }
}`,
        },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.api.mutations.title',
      level: 4,
      blocks: [
        {
          type: 'code',
          language: 'graphql',
          content: `# User authentication
mutation Login($loginData: LoginInput!) {
  login(loginData: $loginData) {
    accessToken
    user { id username email }
  }
}

# Manage favorites
mutation AddFavorite($input: FavoriteTokenInput!) {
  addFavoriteToken(input: $input) {
    id
    favoriteTokens { id symbol }
  }
}`,
        },
      ],
    },
    {
      titleKey: 'projects.content.blocktrack.opinion.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.blocktrack.opinion.intro' },
        { type: 'text', content: 'projects.content.blocktrack.opinion.cleanArchChallenge' },
        { type: 'text', content: 'projects.content.blocktrack.opinion.graphqlBenefits' },
        { type: 'text', content: 'projects.content.blocktrack.opinion.realTimeData' },
        { type: 'text', content: 'projects.content.blocktrack.opinion.future' },
      ],
    },
  ],
};
