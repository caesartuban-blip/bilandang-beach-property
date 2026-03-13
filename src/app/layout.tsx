import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilandang Beach Property | 12.3 Hectare Beach Resort for Sale in Philippines",
  description: "Luxury beach property for sale in Sarangani Province, Philippines. 12.3 hectares with 240m white sand beach, 30 rooms, Spanish Mediterranean architecture, and crystal-clear waters with coral reefs. 80% completed.",
  keywords: ["beach property", "Philippines", "Sarangani", "beach resort", "real estate", "investment property", "tropical paradise"],
  authors: [{ name: "JOBELENT RESORT DEVELOPMENT CORPORATION" }],
  openGraph: {
    title: "Bilandang Beach Property for Sale",
    description: "Luxury 12.3 hectare beach property in the Philippines with Spanish Mediterranean architecture",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
