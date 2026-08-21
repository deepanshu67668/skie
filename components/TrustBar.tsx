import { ShieldCheck, FileCheck2, Stamp, Award, Building2 } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      title: 'ISO 9001:2015 Certified',
      subtitle: 'International Quality Standard',
      icon: ShieldCheck,
      badge: 'ISO Quality Approved',
    },
    {
      title: 'Govt. Trust Registered',
      subtitle: 'Reg. No. 3123/IV (Act 1882)',
      icon: FileCheck2,
      badge: 'Govt. NCT Delhi',
    },
    {
      title: 'Trademark Registered',
      subtitle: 'App. No. 3214249',
      icon: Stamp,
      badge: 'Ministry of Commerce',
    },
    {
      title: 'Labor Dept. Registered',
      subtitle: 'Regd. No. 201006450',
      icon: Award,
      badge: 'Govt. of India',
    },
    {
      title: 'MSME Registered',
      subtitle: 'Skill Enterprise Unit',
      icon: Building2,
      badge: 'Skill Enterprise',
    },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90">
        <div className="text-center mb-6">
          <p className="text-xs font-extrabold tracking-widest text-brand-bright uppercase flex items-center justify-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            <span>Recognized & Accredited By Official Government Bodies</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white hover:from-[#060D17] hover:to-[#0B192C] hover:text-white border border-slate-200/90 hover:border-brand-cyan/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-brand-bright/10 text-brand-bright group-hover:bg-brand-cyan/20 group-hover:text-brand-cyan transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-bright/10 text-brand-bright group-hover:bg-brand-cyan/20 group-hover:text-brand-cyan transition-colors">
                      {item.badge}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 group-hover:text-slate-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
