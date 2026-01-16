'use client';

import {useEffect, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {locales, type Locale} from '@/i18n/routing';

const FLAGS: Record<Locale, string> = {
  en: '🇬🇧',
  fr: '🇫🇷'
};

function stripLeadingLocales(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  while (segments.length > 0) {
    const first = segments[0];

    if (!locales.includes(first as Locale)) {
      break;
    }

    segments.shift();
  }

  if (segments.length === 0) {
    return '/';
  }

  return `/${segments.join('/')}`;
}

export function LocaleSwitcher() {
  const t = useTranslations('locale');
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  // delay rendering until client-side to avoid radix id hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) {
      return;
    }

    // persist preference in cookie
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;

    // avoid depending on currentLocale since it can temporarily desync from the URL
    const pathWithoutLocale = stripLeadingLocales(pathname);
    const normalizedPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

    router.push(`/${newLocale}${normalizedPath}`);
  };

  // render placeholder during ssr to avoid hydration mismatch from radix-generated ids
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label={t('select')} disabled>
        <span className="text-lg opacity-50">{FLAGS[currentLocale]}</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('select')}>
          <span className="text-lg">{FLAGS[currentLocale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={handleLocaleChange}
        >
          {locales.map((locale) => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              <span className="mr-2">{FLAGS[locale]}</span>
              {t(locale)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
