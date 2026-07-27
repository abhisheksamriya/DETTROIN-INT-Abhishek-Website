import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best School in Aligarh | Top Schools in Aligarh – Excellence International School",
  description: "Excellence International School is among the best schools in Aligarh, Uttar Pradesh, offering quality education and holistic development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-20 md:pt-30"  cz-shortcut-listen="true">
        <Navbar /> 
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}
