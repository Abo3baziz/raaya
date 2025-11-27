import { Cairo, JetBrains_Mono } from "next/font/google";

export const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["800"],
  variable: "--font-jetbrains",
});
