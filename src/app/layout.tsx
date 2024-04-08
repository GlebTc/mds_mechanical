import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mdsmechanicalinc.ca/"),
  title: {
    default:
      "HVAC | Heating | Gas | Air Conditioning | Plumbing | Electrical | 24/7 Emergency Services",
    template: "%s - MDS Mechanical Services",
  },
  description:
    "HVAC | Heating | Gas | Air Conditioning | Plumbing | Electrical | 24/7 Emergency Services",
  twitter: {
    title: "MDS Mechanical Services",
    card: "summary_large_image",
    description:
      "HVAC | Heating | Gas | Air Conditioning | Plumbing | Electrical | 24/7 Emergency Services",
  },
  keywords:
    "Hamilton, Niagara Region, Ontario, HVAC, Heating, Gas, Air Conditioning, Plumbing, Electrical, 24/7 Emergency Services",
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
