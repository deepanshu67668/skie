import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdmissionSplashModal from '@/components/AdmissionSplashModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SKIE Academy | Shri Krishan Institute of Education',
  description: 'Education that builds practical skills for the real world. ISO 9001:2015 & Govt. Registered Institute.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#FBFBF9] text-slate-900 font-sans antialiased selection:bg-[#C5A059] selection:text-[#050B18]">
        {/* Auto-Opening Admission Splash Modal */}
        <AdmissionSplashModal />

        {/* Floating WhatsApp Live Chat Widget Right */}
        <FloatingWhatsApp />

        {/* Main Navbar */}
        <Navbar />

        {/* Main Content with exact height offset matching Navbar height (82px) */}
        <main className="flex-grow pt-[82px] sm:pt-[84px]">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
