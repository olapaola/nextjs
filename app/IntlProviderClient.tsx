"use client";

import { NextIntlClientProvider } from 'next-intl';
import enMessages from './messages/en.json';
import esMessages from './messages/es.json';

export default function IntlProviderClient({ children }: { children: React.ReactNode }) {
  // Detecta el idioma del navegador y define el locale
  const locale = navigator.language.startsWith("es") ? "es" : "en";
  const messages = locale === "es" ? esMessages : enMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
