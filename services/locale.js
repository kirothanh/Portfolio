'use server';

import { cookies } from 'next/headers';
import { defaultLocale } from '@/i18n/config';

const COOKIE_NAME = 'NEXT_LOCALE';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale) {
  cookies().set(COOKIE_NAME, locale);
}
