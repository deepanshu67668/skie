import Link from 'next/link';
import { ArrowRight, Users, Building, Laptop, GraduationCap, Award, Briefcase, ShieldCheck } from 'lucide-react';

export default function Introduction() {
  const highlights = [
    { icon: Users, title: 'Experienced Faculty', desc: 'Qualified & dedicated industry trainers' },
    { icon: Building, title: 'Modern Infrastructure', desc: 'Air-conditioned high-tech lab campus' },
    { icon: Laptop, title: 'Practical Training', desc: '100% daily hands-on computer practice' },
    { icon: GraduationCap, title: 'Career Guidance', desc: 'Personalized mentoring for every student' },
    { icon: Award, title: 'Certification Programs', desc: 'Government & ISO recognized certificates' },
    { icon: Briefcase, title: 'Placement Support', desc: 'Job assistance & interview preparation' },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-[#F8F8F5] to-white text-slate-900 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Campus Facade Photograph with Floating Badges (5 Cols) */}
          <div className="lg:col-span-5 relative group">
            
            {/* Main Image Container with Glow Shadow */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl hover:shadow-[#C5A059]/25 transition-all duration-500">
              <img
                src="/images/campus_facade.jpg"
                alt="SKIE Academy Building Campus Facade"
                className="w-full h-[410px] object-cover group-hover:scale-108 transition-transform duration-700"
              />
              
              {/* Dark Overlay Gradient at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/80 via-transparent to-transparent opacity-80" />

              {/* Bottom Image Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#050B18]/90 backdrop-blur-md border border-[#C5A059]/40 rounded-xl flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                  <span className="text-xs font-bold uppercase tracking-wider">ISO 9001:2015 CERTIFIED CAMPUS</span>
                </div>
                <span className="text-[10px] text-[#C5A059] font-mono font-bold">EST. 2014</span>
              </div>
            </div>

            {/* Top Right Floating Seal Crest Badge */}
            <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-[#050B18] text-[#C5A059] border-2 border-[#C5A059] flex items-center justify-center font-serif font-black text-xl shadow-2xl animate-pulse">
              S
            </div>

          </div>

          {/* Middle Text Content (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                About SKIE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#050B18] leading-[1.15]">
              Learning That<br />
              Goes <span className="text-[#C5A059] relative inline-block">Beyond<span className="absolute bottom-1 left-0 w-full h-1.5 bg-[#C5A059]/30 rounded-full" /></span> the<br />
              Classroom.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-normal">
              At SKIE, we believe in empowering students with practical skills, industry-relevant knowledge and personal guidance. Our programs are thoughtfully designed to prepare students for real-world challenges and successful careers.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#050B18] hover:bg-[#C5A059] text-white hover:text-[#050B18] font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md group"
              >
                <span>DISCOVER SKIE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Interactive Animated Feature Pills (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white hover:bg-[#050B18] text-slate-800 hover:text-white border border-slate-200 hover:border-[#C5A059] p-3.5 rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-x-1.5 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-[#C5A059]/15 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#050B18] transition-colors duration-300 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#050B18] group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
