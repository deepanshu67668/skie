import Link from 'next/link';
import { Quote, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DirectorMessage() {
  return (
    <section className="py-20 sm:py-24 bg-[#050B18] text-white border-y border-[#C5A059]/40 font-sans relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Chairman Sandeep Tyagi Executive Portrait (5 Cols) */}
          <div className="lg:col-span-5 relative group">
            
            {/* Main Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C5A059]/80 shadow-2xl group-hover:border-[#C5A059] transition-all duration-500">
              <img
                src="/images/director_sandeep_tyagi.jpg"
                alt="Sandeep Tyagi Chairman SKIE Academy"
                className="w-full h-[450px] sm:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/20 to-transparent" />

              {/* Floating Bottom Credentials Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#050B18]/90 backdrop-blur-md border border-[#C5A059]/50 rounded-xl space-y-1">
                <h3 className="text-base font-serif font-bold text-white">Sandeep Tyagi</h3>
                <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">Chairman & Founder, SKIE Academy</p>
                <p className="text-[10px] text-slate-400">Shri Krishan Institute of Education (Reg. No. 3123/IV Govt. NCT Delhi)</p>
              </div>
            </div>

            {/* Top Right Royal Seal Emblem */}
            <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-[#050B18] text-[#C5A059] border-2 border-[#C5A059] flex items-center justify-center font-serif font-black text-xl shadow-2xl animate-pulse">
              S
            </div>

          </div>

          {/* Right Column: Chairman's Message & Vision (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                FROM THE CHAIRMAN'S DESK
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              "Empowering Youth Through <span className="text-[#C5A059]">Practical Skill Education</span> & Career Opportunities."
            </h2>

            {/* Large Quote Mark */}
            <Quote className="w-10 h-10 text-[#C5A059] opacity-80" />

            {/* Message Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <p>
                Welcome to Shri Krishan Institute of Education (SKIE Academy). Since 2014, our core mission has been clear and unwavering: to provide job-oriented, high-quality computer and technical education that equips students with real-world skills.
              </p>
              <p>
                We strongly believe that education must extend beyond theoretical textbooks. At SKIE, every student receives 100% daily practical computer access, personalized faculty guidance, and recognized certification to build a confident, successful career.
              </p>
            </div>

            {/* 3 Key Pillars Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-sans">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">100% Practical Labs</span>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">ISO 9001:2015 Certified</span>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center space-x-2.5">
                <Sparkles className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-200">Placement Assistance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/about"
                className="px-7 py-3.5 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>READ FULL ABOUT SKIE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold text-xs uppercase tracking-wider rounded-xl transition-all w-full sm:w-auto text-center"
              >
                TALK TO ADMISSIONS
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
