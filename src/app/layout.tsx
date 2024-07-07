import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mdsmechanicalinc.ca/"),
  title: {
    default: "MDS Mechanical Services - HVAC, Heating, Gas, Air Conditioning, Electrical, 24/7 Emergency Services",
    template: "%s - MDS Mechanical Services",
  },
  description:
    "MDS Mechanical Services offers comprehensive HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region. We provide 24/7 emergency services to ensure your home or business stays comfortable and safe.",
  twitter: {
    title: "MDS Mechanical Services - HVAC, Heating, Gas, Air Conditioning, Electrical",
    card: "summary_large_image",
    description:
      "MDS Mechanical Services provides expert HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region, with 24/7 emergency support.",
  },
  keywords: [
    "Hamilton",
    "Niagara Region",
    "Ontario",
    "HVAC services",
    "Heating services",
    "Gas services",
    "Air Conditioning services",
    "Electrical services",
    "24/7 Emergency HVAC",
    "Emergency heating",
    "Emergency air conditioning",
    "Emergency electrical",
  ],
  creator: "Web Development Hamilton | www.webdevelopmenthamilton.com",
  publisher: "Web Development Hamilton | www.webdevelopmenthamilton.com",
  openGraph: {
    title: "MDS Mechanical Services - HVAC, Heating, Gas, Air Conditioning, Electrical",
    description:
      "MDS Mechanical Services offers professional HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region. Available 24/7 for emergency services.",
    url: "https://www.mdsmechanicalinc.ca/",
    type: "website",
  },
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
