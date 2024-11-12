"use client";

import { useState, useEffect } from "react";
import { NextIntlClientProvider } from 'next-intl';
import enMessages from './messages/en.json';
import esMessages from './messages/es.json';

export default function IntlProviderClient({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Cambia el estado a true una vez que estamos en el cliente
  }, []);

  if (!isClient) {
    // Evita la renderización en el servidor
    return null;
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
