import { Monitor, Zap, Wifi, ShieldCheck, Clock, Users } from 'lucide-react';

export default function LabInfrastructure() {
  const features = [
    {
      title: '1-on-1 Computer Workstations',
      description: 'Every student gets dedicated computer access during lab hours. No sharing or waiting.',
      icon: Monitor,
      badge: 'Individual Lab Machine',
    },
    {
      title: 'High-Speed Internet & Software',
      description: 'Pre-loaded with Tally Prime, MS Office 365, Adobe Photoshop, CorelDRAW, Python & VS Code.',
      icon: Wifi,
      badge: 'Updated 2026',
    },
    {
      title: 'Air-Conditioned Classrooms',
      description: 'Comfortable, quiet learning environment built for focus, deep practice, and clarity.',
      icon: Zap,
      badge: 'Smart Campus',
    },
    {
      title: 'Uninterrupted Generator Backup',
      description: '100% power backup ensures zero interruption during exams, practicals, and coding sessions.',
      icon: Clock,
      badge: 'Zero Downtime',
    },
    {
      title: '1-on-1 Counselor Assistance',
      description: 'Personalized doubt solving by certified instructors after regular class hours.',
      icon: Users,
      badge: 'Personal Attention',
    },
    {
      title: 'ISO 9001:2015 Certification',
      description: 'Government registered trust certificate valid for government jobs & private enterprise employment.',
      icon: ShieldCheck,
      badge: 'Govt Validated',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-[#0B192C] to-slate-950 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-bright/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            World-Class Campus Facilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3">
            State-of-the-Art <span className="cyan-gradient-text">Practical Computer Labs</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Designed to give students the exact environment they will experience in top IT companies and corporate offices.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="dark-glass-card p-8 rounded-3xl border border-white/10 hover:border-brand-cyan/50 shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-bright to-brand-cyan p-0.5 shadow-glow">
                    <div className="w-full h-full bg-[#060D17] rounded-[14px] flex items-center justify-center text-brand-cyan group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-brand-cyan border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
