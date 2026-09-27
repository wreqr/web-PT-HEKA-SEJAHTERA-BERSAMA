import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV WILWA KARYA MANDIRI | General Contractor Jawa Timur",
  description: "Kontraktor Umum terpercaya sejak 2019 di Jawa Timur. Melayani perencanaan, pembangunan, hingga perawatan interior dan eksterior skala individu maupun perusahaan.",
  keywords: ["Jasa Kontraktor Sidoarjo", "Kontraktor Surabaya", "Kontraktor Jawa Timur", "CV Wilwa Karya Mandiri", "Renovasi Rumah", "Pembangunan Gedung"],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
