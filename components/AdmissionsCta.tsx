import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

export default function AdmissionsCta() {
  return (
    <section className="py-16 sm:py-20 bg-[#050B18] text-white border-y border-slate-800 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Ready to Take the Next Step?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-normal">
              Explore our courses and speak with the SKIE team about the right learning path for you.
            </p>
          </div>

          {/* Right Buttons + Crest Icon */}
          <div className="flex items-center space-x-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/courses"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 transition-colors shadow-sm"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/40 font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Graduation Cap Crest Icon on Far Right */}
            <div className="hidden xl:flex w-20 h-20 rounded-full border border-slate-700 bg-white/5 items-center justify-center text-[#C5A059] opacity-80 flex-shrink-0">
              <GraduationCap className="w-10 h-10" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
