import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {SOCIAL_LINKS} from '@/config';

// footer only shows github and linkedin (text links, no discord)
const FOOTER_SOCIAL_KEYS = ['social.github', 'social.linkedin'];

export default async function Footer() {
  const t = await getTranslations();
  const currentYear = new Date().getFullYear();

  const footerLinks = SOCIAL_LINKS.filter(
    (link) => FOOTER_SOCIAL_KEYS.includes(link.labelKey)
  );

  return (
    <footer className="border-t border-border/40 backdrop-blur-sm bg-muted/30 dark:bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 text-sm text-muted-foreground">{currentYear}</div>

          <div className="text-sm font-medium">Titouan Réthoré</div>

          <div className="flex-1 flex items-center justify-end gap-4">
            {footerLinks.map(({href, labelKey}) => (
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
