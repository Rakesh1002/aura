import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aura – Your Digital Photographer",
  description: "Transform your digital presence with AI-powered lifestyle photography. Create stunning, authentic photos for dating, travel, and social media.",
  keywords: ["AI photos", "dating photos", "lifestyle photography", "digital photographer", "AI image generation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
