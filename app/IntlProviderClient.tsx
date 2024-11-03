"use client";

import { NextIntlClientProvider } from 'next-intl';
import enMessages from './messages/en.json';
import esMessages from './messages/es.json';

export default function IntlProviderClient({ children }: { children: React.ReactNode }) {
  // Verifica si estamos en el cliente antes de acceder a navigator.language
  if (typeof window === "undefined") {
    return null; // Retorna null si estamos en el servidor
  }

  // Solo se ejecuta en el cliente
  const locale = navigator.language.startsWith("es") ? "es" : "en";
  const messages = locale === "es" ? esMessages : enMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
