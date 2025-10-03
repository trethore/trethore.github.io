'use client';

import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { DiscordIcon } from '@/components/icons/DiscordIcon';

const SOCIAL_LINKS = [
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
] as const;

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold hover:text-primary transition-colors relative group">
              <span className="relative inline-block">
                Titouan Réthoré
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary/40 to-primary dark:from-primary/40 dark:to-primary animate-underline" />
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                asChild
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-[1.3rem] w-[1.3rem]" />
                </a>
              </Button>
            ))}

            <div className="h-6 w-px bg-border mx-2" />

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
