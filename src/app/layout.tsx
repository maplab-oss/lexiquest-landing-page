import "@/styles/globals.css";

import { type Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "LexiQuest",
  description: "The app for serious language learners.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
