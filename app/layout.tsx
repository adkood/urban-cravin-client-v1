import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Urban Cravin - Streetwear that actually fits",
  description: "Oversized tees and vests made for comfort and attitude. Premium cotton, clean silhouettes, zero fuss.",
  keywords: "streetwear, oversized tees, vests, urban fashion, Indian streetwear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}