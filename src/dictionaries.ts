import 'server-only';
import { Dict, _t } from '@/utilities';
import { ReactNode } from 'react';
import { Locale } from '../i18n-config';

interface Dictionary {
  es: () => Promise<Dict>;
  en: () => Promise<Dict>;
  fr: () => Promise<Dict>;
}

const dictionaries = {
  es: () => import('./app/[lang]/dictionaries/es.json').then((module) => module.default),
  en: () => import('./app/[lang]/dictionaries/en.json').then((module) => module.default),
  fr: () => import('./app/[lang]/dictionaries/fr.json').then((module) => module.default),
};

export const getTranslations = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en() as unknown as ReactNode;
export type Translator = (key: string) => string;