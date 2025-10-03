'use client';

import { useState, useEffect } from 'react';
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

const NAV_LINKS = [
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Featured Projects' },
  { href: '#contact', label: 'Get In Touch' },
] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

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

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="relative text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary/40 to-primary dark:from-primary/40 dark:to-primary transition-all duration-500 ease-in-out ${
                    activeSection === href.replace('#', '')
                      ? 'w-full'
                      : 'w-0'
                  }`}
                />
              </a>
            ))}
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
