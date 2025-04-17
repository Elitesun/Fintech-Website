
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/Components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fintech Website",
  description: "just frying my frontend skills for no reason at all",
  authors: [{ name: "Alex Sunday" }],
  viewport: "width=device-width,initial-scale=1,shrink-to-fit=no",
  icons: {
    icon: [
      { url: "/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/img/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white mt-2`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
