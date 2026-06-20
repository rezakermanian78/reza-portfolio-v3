import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import "../globals.css";

const locales = ['en', 'fa'];

export const metadata: Metadata = {
  title: "Reza Kermanian | AI & Backend Engineer",
  description: "AI Engineer, Full-Stack Developer & Researcher based in Istanbul. Building intelligent systems at the intersection of AI, scalable architecture, and real-world impact.",
  metadataBase: new URL("https://rezakermanian.com"),
  openGraph: {
    title: "Reza Kermanian — AI & Backend Engineer",
    description: "Building intelligent systems at the intersection of AI, scalable architecture, and real-world impact.",
    url: "https://rezakermanian.com",
    siteName: "Reza Kermanian",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reza Kermanian — AI & Backend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Kermanian — AI & Backend Engineer",
    description: "Building intelligent systems at the intersection of AI, scalable architecture, and real-world impact.",
    images: ["/og-image.png"],
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const safeLocale = locales.includes(locale) ? locale : 'en';
  const messages = (await import(`../../messages/${safeLocale}.json`)).default;
  const isRtl = safeLocale === 'fa';
  return (
    <html lang={safeLocale} dir={isRtl ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Vazirmatn:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider locale={safeLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
