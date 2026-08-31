import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono, Cormorant_Garamond, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prograstic — Bespoke Software Engineering Studio",
  description:
    "A small engineering-led studio. No account managers, no handoffs between departments — the person who scopes your project is the person who builds it.",
  keywords: [
    "Prograstic Software Studio",
    "Custom Software Engineering",
    "Bespoke Internal Tools",
    "Hospital Operating Systems",
    "Aesthetic Medical Portals",
    "Industrial Telemetry Engines",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${outfit.variable} ${mono.variable} ${cormorant.variable} ${playfair.variable} ${spaceGrotesk.variable} font-sans bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
