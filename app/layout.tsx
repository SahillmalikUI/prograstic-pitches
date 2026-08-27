import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prograstic Health — Engineering-Led Healthcare Platforms",
  description:
    "Direct-to-builder clinical software engineering. Bespoke multi-chair scheduling, zero-wait OPD queue engines, VIP aesthetic funnels, and DICOM diagnostic vaults.",
  keywords: [
    "Healthcare Software Engineering",
    "Clinic Operating System",
    "Dental Booking WhatsApp Engine",
    "Hospital OPD Queue Manager",
    "Aesthetic Clinic Treatment Visualizer",
    "Cloud DICOM Diagnostic Vault",
    "Prograstic Software Studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${mono.variable} font-sans bg-background text-gray-100 antialiased selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
