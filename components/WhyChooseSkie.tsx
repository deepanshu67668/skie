import { GraduationCap, Award, Users, ShieldCheck, BookOpen, TrendingUp, Sparkles } from 'lucide-react';

export default function WhyChooseSkie() {
  const features = [
    { icon: Users, title: 'Experienced Faculty', desc: 'Learn from qualified and experienced trainers.' },
    { icon: BookOpen, title: 'Practical Training', desc: 'Focus on real-world skills and hands-on experience.' },
    { icon: TrendingUp, title: 'Career-Oriented Curriculum', desc: "Courses designed for today's industry needs." },
    { icon: Award, title: 'Certification', desc: 'Recognized certification to boost your career.' },
    { icon: ShieldCheck, title: 'Student Support', desc: 'Personal guidance at every step of learning.' },
    { icon: GraduationCap, title: 'Skill Development', desc: 'Develop skills that make you industry-ready.' },
  ];

  return (
    <section className="bg-[#050B18] text-white py-20 sm:py-24 border-b border-slate-800 font-sans relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Dark Navy Column with 6 Interactive Feature Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                  WHY SKIE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight max-w-xl">
                Practical Education.<br />
                Personal Guidance.<br />
                Career-Focused Learning.
              </h2>
            </div>

            {/* 6 Interactive Animated Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 hover:border-[#C5A059] hover:bg-white/10 p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-start space-x-3.5 group cursor-pointer"
                  >
                    <div className="p-2.5 rounded-lg bg-[#C5A059]/15 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#050B18] transition-colors duration-300 border border-[#C5A059]/30 flex-shrink-0 mt-0.5">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-1 font-sans">
                      <h4 className="text-sm font-bold text-white font-serif group-hover:text-[#C5A059] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Realistic High-Res Lab Photograph + Bottom Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Realistic High-Res Photography Container */}
            <div className="relative h-80 sm:h-96 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl group">
              <img
                src="/images/why_skie_lab.jpg"
                alt="SKIE Computer Center Instructor Guiding Students"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/60 via-transparent to-transparent" />
            </div>

            {/* Bottom Glassmorphism Overlay Box */}
            <div className="bg-white text-[#050B18] p-5 rounded-2xl border border-slate-200 flex items-center space-x-4 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="p-3 rounded-xl bg-[#C5A059]/20 text-[#050B18] flex-shrink-0 border border-[#C5A059]">
                <GraduationCap className="w-7 h-7 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-base font-serif font-bold text-[#050B18]">Your Journey to Success</h4>
                <p className="text-xs text-slate-600 font-semibold mt-0.5">Learn. Practice. Build. Certify. Grow.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
