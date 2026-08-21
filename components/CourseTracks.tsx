import Link from 'next/link';
import { Monitor, Calculator, Code2, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

export default function CourseTracks() {
  const tracks = [
    {
      title: 'Computer Applications & Office Track',
      subtitle: 'ADCA (1 Year), DCA (6 Months), Basic Computer & Typing',
      description: 'Master complete office automation, documentation, data formatting, and desktop publishing.',
      icon: Monitor,
      count: '4 Courses',
      color: 'from-blue-600 to-indigo-600',
      badge: 'Most Popular',
      href: '/courses',
    },
    {
      title: 'Financial Accounting & Taxation Track',
      subtitle: 'Tally Prime with GST, Advanced Excel & Business Analytics',
      description: 'Learn double-entry accounting, GST filing, e-way bills, TDS, vouchers, and Excel dashboards.',
      icon: Calculator,
      count: '3 Courses',
      color: 'from-cyan-500 to-brand-bright',
      badge: 'High Salary Potential',
      href: '/courses',
    },
    {
      title: 'Web Development & Coding Track',
      subtitle: 'HTML5, CSS3, JavaScript, Tailwind CSS & Python',
      description: 'Build responsive websites, master modern coding syntax, and create live online projects.',
      icon: Code2,
      count: '3 Courses',
      color: 'from-emerald-500 to-teal-600',
      badge: 'Tech Career',
      href: '/courses',
    },
    {
      title: 'Specialized Vocational & Teaching Track',
      subtitle: 'Nursery Teacher Training (NTT) & Female Special Computer Skills',
      description: 'Tailored practical programs for aspiring teachers, homemakers, and working women.',
      icon: GraduationCap,
      count: '2 Courses',
      color: 'from-purple-600 to-pink-600',
      badge: 'Empowerment',
      href: '/courses',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeted Career Paths</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Choose Your <span className="cyan-gradient-text">Career Learning Track</span>
          </h2>

          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Select a specialized track tailored to your educational background and career goals.
          </p>
        </div>

        {/* 4 Track Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.title}
                className="dark-glass-card p-8 rounded-3xl border border-white/15 hover:border-brand-cyan/60 shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-r ${track.color} text-white shadow-lg`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/10 text-brand-cyan border border-white/10">
                        {track.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-800 text-slate-300">
                        {track.count}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-cyan/90 mt-1">
                      {track.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">ISO 9001:2015 Approved</span>
                  <Link
                    href={track.href}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-brand-bright text-white text-xs font-bold transition-all group-hover:bg-brand-bright"
                  >
                    <span>View Track Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
