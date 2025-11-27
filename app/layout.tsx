import "./globals.css";
import { cairo } from "@/app/ui/fonts";
import type { Metadata } from "next";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}
