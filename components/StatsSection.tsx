'use client';

import { Trophy, Users, BookOpen, Award, Sparkles } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Trophy,
      value: '10+',
      label: 'YEARS OF EXCELLENCE',
      subtext: 'Delivering trusted educational quality since 2014',
    },
    {
      icon: Users,
      value: '5000+',
      label: 'STUDENTS TRAINED',
      subtext: 'Empowering ambitious learners across UP & Delhi NCR',
    },
    {
      icon: BookOpen,
      value: '20+',
      label: 'PROFESSIONAL COURSES',
      subtext: 'Industry-aligned computer & IT diplomas',
    },
    {
      icon: Award,
      value: '100%',
      label: 'PRACTICAL LEARNING',
      subtext: 'Hands-on daily computer lab sessions & projects',
    },
  ];

  return (
    <section className="bg-[#050B18] text-white py-5 border-y border-[#C5A059]/40 font-sans shadow-lg relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#C5A059]/10 blur-3xl rounded-full pointer-events-none" />

      {/* Continuous Smooth Right-to-Left Marquee Motion Container */}
      <div className="overflow-hidden whitespace-nowrap relative z-10">
        <div className="animate-marquee inline-flex space-x-6 items-center">
          
          {/* First Set of Cards */}
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={`a-${idx}`}
                className="inline-flex items-center space-x-4 bg-[#0B1426] border border-slate-800 hover:border-[#C5A059] px-6 py-4 rounded-2xl flex-shrink-0 transition-all duration-300 transform hover:scale-105 shadow-md group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] group-hover:text-[#050B18] transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-serif font-black text-[#C5A059] group-hover:text-white transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-xs font-sans font-bold text-slate-100 tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-normal">
                    {stat.subtext}
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors ml-2" />
              </div>
            );
          })}

          {/* Duplicate Set for Seamless Infinite Loop */}
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={`b-${idx}`}
                className="inline-flex items-center space-x-4 bg-[#0B1426] border border-slate-800 hover:border-[#C5A059] px-6 py-4 rounded-2xl flex-shrink-0 transition-all duration-300 transform hover:scale-105 shadow-md group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C5A059] group-hover:text-[#050B18] transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-serif font-black text-[#C5A059] group-hover:text-white transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-xs font-sans font-bold text-slate-100 tracking-wider uppercase">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-normal">
                    {stat.subtext}
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors ml-2" />
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}
