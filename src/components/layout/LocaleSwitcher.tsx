'use client';

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

export function LocaleSwitcher() {
  const t = useTranslations('locale');
  const currentLocale = useLocale() as Locale;

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === currentLocale) {
      return;
    }
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    window.location.href = `/${newLocale}`;
  };

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
