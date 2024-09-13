import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

// https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mdsmechanicalinc.ca/'),
  title: {
    default:
      'MDS Mechanical Services - HVAC, Heating, Gas, Air Conditioning, Electrical, 24/7 Emergency Services',
    template: '%s - MDS Mechanical Services | HVAC Hamilton & Niagara Region',
  },
  description:
    'MDS Mechanical Services offers comprehensive HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region. We provide 24/7 emergency services to ensure your home or business stays comfortable and safe.',
  twitter: {
    title:
      'MDS Mechanical Services - HVAC, Heating, Gas, Air Conditioning, Electrical',
    card: 'summary_large_image',
    description:
      'MDS Mechanical Services provides expert HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region, with 24/7 emergency support.',
  },
  keywords: [
    'HVAC Hamilton',
    'HVAC Hamilton Ontario',
    'air conditioning system',
    'heating system',
    'air conditioning',
    'air conditioning installations',
  ],
  creator: 'Web Development Hamilton | www.webdevelopmenthamilton.com',
  publisher: 'Web Development Hamilton | www.webdevelopmenthamilton.com',
  openGraph: {
    title:
      'MDS Mechanical Services - HVAC, Heating, Gas, Air Conditioning, Electrical',
    description:
      'MDS Mechanical Services offers professional HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region. Available 24/7 for emergency services.',
    url: 'https://www.mdsmechanicalinc.ca/',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.mdsmechanicalinc.ca/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-DWR4PSBJF1" />
    </html>
  );
}
