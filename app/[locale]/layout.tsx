import "./globals.css";
import { cairo } from "@/app/ui/fonts";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "شركة رعاية – منصة طبية لحجز المواعيد مع نخبة من الأطباء",
  description:
    "شركة رعاية هي منصة طبية موثوقة تتيح لك حجز مواعيد بسهولة مع نخبة من الأطباء في مختلف التخصصات. احجز موعدك الآن واحصل على رعاية صحية موثوقة.",
  keywords:
    "شركة رعاية, منصة طبية, حجز مواعيد, أطباء, حجز دكتور, رعاية طبية, خدمات طبية, اطباء متخصصين, استشارات طبية",
  icons: {
    icon: "/logo.svg",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="ar">
      <body className={`${cairo.className} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
