import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are bundled in app/fonts so builds never depend on fetching them.
const body = localFont({
  src: [
    { path: "./fonts/ChakraPetch-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ChakraPetch-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ChakraPetch-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ChakraPetch-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

const display = localFont({
  src: "./fonts/DelaGothicOne-400.woff2",
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/JetBrainsMono.woff2",
  weight: "400 700",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jawwad.dev"),
  title: "Tahsin Jawwad | Quant Research & Software Engineering",
  description:
    "Master of Quantitative Finance candidate at the University of Waterloo. Quant research, statistical arbitrage and software engineering.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Tahsin Jawwad",
    title: "Tahsin Jawwad | Quant Research & Software Engineering",
    description: "MQF candidate at the University of Waterloo. Quant research and software engineering.",
  },
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
