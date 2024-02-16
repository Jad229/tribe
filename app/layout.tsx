import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

const ArchivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tribe",
  description: "Tribe Podcast ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mx-auto max-w-7xl p-4 ${ArchivoBlack.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
