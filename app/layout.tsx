import "./globals.css";
import { cairo } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}
