import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Dosis({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "CineVerse",
  description: "Your Ultimate Movie Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/cineverse.png" />
      </head>
      <body
        className={`${inter.className} bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
