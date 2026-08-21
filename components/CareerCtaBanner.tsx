import Link from 'next/link';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function CareerCtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-brand-navy relative overflow-hidden text-white">
      {/* Pattern Background */}
      <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-bright/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transform Your Future Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Your Career Starts With the <span className="cyan-gradient-text">Right Skills</span>.
        </h2>

        <p className="mt-4 text-slate-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
          "Don't just learn. Prepare yourself for the real world with practical computer education."
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-bright to-cyan-500 text-white font-bold text-base shadow-xl shadow-brand-bright/30 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="tel:+918882362470"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all"
          >
            <Phone className="w-5 h-5 text-brand-cyan" />
            <span>Talk to SKIE Counselor</span>
          </a>
        </div>
      </div>
    </section>
  );
}
