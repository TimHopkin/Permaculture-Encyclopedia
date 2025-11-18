import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Permaculture Encyclopedia | The Open-Source Manual for Solving Global Challenges",
  description: "Discover how permaculture principles can empower you to address the world's biggest problems. A beautiful, comprehensive guide to creating regenerative, sustainable solutions inspired by nature.",
  keywords: "permaculture, sustainability, regenerative agriculture, UN SDGs, environmental solutions, British English",
  authors: [{ name: "Permaculture Encyclopedia Contributors" }],
  openGraph: {
    title: "Permaculture Encyclopedia",
    description: "The open-source manual for solving the world's problems through permaculture",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <div className="min-h-screen bg-white">
          <Navigation />
          <main className="min-h-screen bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
