import Link from 'next/link';

const SOCIAL_LINKS = [
  {
    href: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME',
    label: 'linkedin',
  },
  {
    href: 'https://github.com/trethore',
    label: 'github',
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 backdrop-blur-sm bg-muted/30 dark:bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {currentYear}
          </div>

          <div className="text-sm font-medium">
            Titouan Réthoré
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
