import type { Metadata as NextMetadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
import type { Metadata } from "next";

export const metadata: NextMetadata = {
  title: {
    default: "FL Studio Guide",
    template: "%s | FL Studio Guide",
  },

  description: "En personlig och pedagogisk guide för att lära sig FL Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
