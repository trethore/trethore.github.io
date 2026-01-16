import createMiddleware from 'next-intl/middleware';
import {defaultLocale, locales} from '@/i18n/routing';

export default createMiddleware({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
