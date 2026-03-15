import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/header/navigation-bar";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeevan Vaishnav | Full Stack Software Developer",
  description: "Portfolio of Jeevan Vaishnav - Full Stack Software Developer specializing in Next.js, React, Node.js and scalable web applications.",
  keywords: [
    "Jeevan Vaishnav",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ScrollProgress />
        <NavigationBar />
        <main>
          {children}
        </main>
      </body>
    </html >
  );
}
