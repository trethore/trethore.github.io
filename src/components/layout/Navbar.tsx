'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';
import {LocaleSwitcher} from './LocaleSwitcher';
import {ThemeToggle} from './ThemeToggle';
import {NAV_LINKS, SOCIAL_LINKS} from '@/config';

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();

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
              <Link
                href={`/${locale}`}
                className="group flex flex-col justify-center whitespace-nowrap text-xl font-bold leading-none hover:text-primary transition-colors"
              >
              <span className="inline-block">Titouan Réthoré</span>
              <span className="mt-1 block h-1 w-0 bg-gradient-to-r from-primary/40 to-primary dark:from-primary/40 dark:to-primary animate-underline" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({href, labelKey}) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="flex flex-col justify-center whitespace-nowrap text-base font-medium leading-none text-foreground hover:text-primary transition-colors"
              >
                <span className="inline-block">{t(labelKey)}</span>
                <span
                  className={`mt-1 block h-1 bg-gradient-to-r from-primary/40 to-primary dark:from-primary/40 dark:to-primary transition-all duration-500 ease-in-out ${
                    activeSection === href.replace('#', '') ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({href, label, icon: Icon}) => (
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

            <LocaleSwitcher />

            <div className="h-6 w-px bg-border mx-2" />

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
