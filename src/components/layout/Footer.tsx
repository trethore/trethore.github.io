import Link from 'next/link';
import {getTranslations} from 'next-intl/server';

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/titouan-rethore-1b83132bb/',
    labelKey: 'linkedin'
  },
  {
    href: 'https://github.com/trethore',
    labelKey: 'github'
  }
] as const;

export default async function Footer() {
  const t = await getTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 backdrop-blur-sm bg-muted/30 dark:bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-sm text-muted-foreground">{currentYear}</div>

          <div className="text-sm font-medium">Titouan Réthoré</div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({href, labelKey}) => (
              <Link
                key={labelKey}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
