import type { NavLink, SocialLink } from '@/types';
import { Github, Linkedin } from 'lucide-react';
import { DiscordIcon } from '@/components/icons/DiscordIcon';

export const NAV_LINKS: NavLink[] = [
  {href: '#about', labelKey: 'nav.about'},
  {href: '/projects', labelKey: 'nav.projects'},
  {href: '#contact', labelKey: 'nav.contact'}
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://discord.com/users/YOUR_DISCORD_ID',
    label: 'Discord',
    icon: DiscordIcon,
  },
  {
    href: 'https://github.com/trethore',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/titouan-rethore-1b83132bb/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
];
