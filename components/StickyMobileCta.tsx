import Link from 'next/link';
import { Phone, GraduationCap } from 'lucide-react';

export default function StickyMobileCta() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-navy/95 backdrop-blur-xl border-t border-white/10 p-2.5 px-4 shadow-2xl flex items-center space-x-3">
      <a
        href="tel:+918882362470"
        className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold text-xs tracking-wide"
      >
        <Phone className="w-4 h-4 text-brand-cyan animate-pulse" />
        <span>Call Counselor</span>
      </a>

      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-bright to-cyan-500 text-white font-bold text-xs tracking-wide shadow-md shadow-brand-bright/30"
      >
        <GraduationCap className="w-4 h-4" />
        <span>Enroll Now</span>
      </Link>
    </div>
  );
}
