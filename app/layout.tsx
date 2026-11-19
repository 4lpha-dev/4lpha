import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4LPHA | Innovate. Build. Test. Deploy.",
  description:
    "From the first line of code to the final quality check, 4LPHA transforms ideas into powerful digital experiences through innovative web development and precision-driven software testing.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
