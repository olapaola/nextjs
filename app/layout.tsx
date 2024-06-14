import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fundación Acción Neurodivergente",
  description: "Fundación Acción Neurodivergente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
