import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Prograstic — Custom Software Engineering Studio",
  description:
    "A small engineering-led studio. No account managers, no handoffs between departments — the person who scopes your project is the person who builds it.",
  keywords: [
    "Prograstic Software Studio",
    "Custom Software Engineering",
    "Bespoke Internal Tools",
    "Hospital Operating Systems",
    "Dental WhatsApp Scheduling",
    "Manufacturing Shop Floor Telemetry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${outfit.variable} ${mono.variable} font-sans bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
