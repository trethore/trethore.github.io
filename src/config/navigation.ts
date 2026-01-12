import type { NavLink, SocialLink } from '@/types';
import { Github, Linkedin } from 'lucide-react';
import { DiscordIcon } from '@/components/icons/DiscordIcon';

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Featured Projects' },
  { href: '#contact', label: 'Get In Touch' },
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
    href: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
    label: 'LinkedIn',
    icon: Linkedin,
  },
];
