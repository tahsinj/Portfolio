import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const sen = Sen({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Portfolio Website Created with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sen.className} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
