import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScaleKeeper - Reptile & Amphibian Collection Management App",
  description:
    "Track feedings, monitor enclosures, manage breeding, and never miss a medication with ScaleKeeper—the complete husbandry app for reptile and amphibian keepers.",
  keywords: [
    "reptile tracking app",
    "ball python care",
    "reptile feeding tracker",
    "herpetoculture",
    "snake breeding",
    "reptile collection management",
    "pet reptile app",
  ],
  authors: [{ name: "ScaleKeeper" }],
  openGraph: {
    title: "ScaleKeeper - The Complete Herpetoculture Platform",
    description:
      "Track feedings, monitor enclosures, manage breeding, and never miss a medication with ScaleKeeper.",
    type: "website",
    locale: "en_US",
    siteName: "ScaleKeeper",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleKeeper - Reptile & Amphibian Collection Management",
    description:
      "The complete husbandry app for reptile and amphibian keepers. Track feedings, monitor enclosures, manage breeding.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
