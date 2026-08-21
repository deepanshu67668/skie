import { BookOpenCheck, Terminal, Layers, Award, Rocket } from 'lucide-react';

export default function LearningJourney() {
  const steps = [
    {
      step: '01',
      title: 'Learn',
      description: 'Master core concepts & practical theory with expert instructors.',
      icon: BookOpenCheck,
    },
    {
      step: '02',
      title: 'Practice',
      description: 'Hands-on practice sessions in dedicated computer labs.',
      icon: Terminal,
    },
    {
      step: '03',
      title: 'Build',
      description: 'Create real workplace projects, reports & portfolios.',
      icon: Layers,
    },
    {
      step: '04',
      title: 'Get Certified',
      description: 'Receive ISO 9001:2015 & Govt. recognized qualification.',
      icon: Award,
    },
    {
      step: '05',
      title: 'Start Your Career',
      description: 'Crack interviews with placement guidance & resume building.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-bright uppercase">
            Proven Learning Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Learn More Than <span className="text-brand-bright">Just a Course</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Our step-by-step learning methodology takes you from complete beginner to job-ready professional.
          </p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-bright via-brand-cyan to-emerald-500 transform -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="glass-card p-6 rounded-2xl border border-slate-200 text-center relative hover:shadow-xl hover:border-brand-bright/40 transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-navy text-brand-cyan group-hover:bg-brand-bright group-hover:text-white flex items-center justify-center font-bold text-xl shadow-lg transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black bg-brand-bright/10 text-brand-bright mb-2">
                    Step {item.step}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-bright transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
