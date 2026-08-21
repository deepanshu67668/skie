import { GraduationCap, Globe, Shield } from 'lucide-react';

export default function HeroFeatureStrip() {
  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 mb-16">
      
      <div className="bg-white border border-slate-200 shadow-xl p-8 sm:p-10 relative">
        
        {/* Prominent Golden Royal Crest Badge on Right Edge */}
        <div className="absolute -top-7 right-8 hidden sm:flex w-16 h-16 rounded-full border-2 border-[#C5A059] bg-[#0B1C38] text-[#C5A059] items-center justify-center shadow-xl">
          <Shield className="w-8 h-8" />
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 font-sans">
          
          {/* Column 1: ABOUT SKIE */}
          <div className="space-y-3 pr-0 md:pr-6 pt-2 md:pt-0">
            <h3 className="text-sm font-sans font-black text-[#0B1C38] uppercase tracking-wider">
              ABOUT SKIE
            </h3>

            <div className="flex items-start space-x-3.5">
              <img
                src="https://skieofficial.com/wp-content/uploads/2026/01/front-page.webp"
                alt="SKIE Faculty Leader"
                className="w-14 h-16 object-cover border border-slate-300 flex-shrink-0"
              />
              <p className="text-xs text-slate-600 leading-relaxed">
                Practical education, professional training and career-focused learning designed to prepare students for real-world challenges and successful careers.
              </p>
            </div>
          </div>

          {/* Column 2: ACADEMIC EXCELLENCE */}
          <div className="space-y-3 px-0 md:px-6 pt-6 md:pt-0">
            <div className="w-9 h-9 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>

            <h3 className="text-sm font-sans font-black text-[#0B1C38] uppercase tracking-wider">
              ACADEMIC EXCELLENCE
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive curriculum, experienced faculty, and ISO 9001:2015 quality standards ensuring practical computer and accounting mastery.
            </p>
          </div>

          {/* Column 3: CAREER OPPORTUNITIES */}
          <div className="space-y-3 pl-0 md:pl-6 pt-6 md:pt-0">
            <div className="w-9 h-9 rounded-full bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>

            <h3 className="text-sm font-sans font-black text-[#0B1C38] uppercase tracking-wider">
              CAREER OPPORTUNITIES
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Industry-relevant skills, 100% daily computer lab practice, recognized certificates, and job placement assistance for every student.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
