import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HVAC | Heating | Gas | Air Conditioning | Plumbing | Electrical | 24/7 Emergency Services",
  description: "HVAC | Heating | Gas | Air Conditioning | Plumbing | Electrical | 24/7 Emergency Services",
  keywords: "HVAC, Heating, Gas, Air Conditioning, Plumbing, Electrical, 24/7 Emergency Services",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
