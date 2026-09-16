import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT HEKA SEJAHTERA BERSAMA | General Contractor Jawa Timur",
  description: "Kontraktor Umum terpercaya sejak 2010 di Jawa Timur. Melayani perencanaan, pembangunan, hingga perawatan interior dan eksterior skala individu maupun perusahaan.",
  keywords: ["Jasa Kontraktor Sidoarjo", "Kontraktor Surabaya", "Kontraktor Jawa Timur", "PT HEKA Sejahtera Bersama", "Renovasi Rumah", "Pembangunan Gedung"],
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
