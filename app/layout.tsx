import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Dela_Gothic_One, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const body = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const display = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tahsin Jawwad | Quant Research & Software Engineering",
  description:
    "Master of Quantitative Finance candidate at the University of Waterloo. Quant research, statistical arbitrage and software engineering.",
};

export const viewport: Viewport = {
  themeColor: "#04050a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`.loader{display:none}.rise,.glitch,.path-layer{animation-play-state:running!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
