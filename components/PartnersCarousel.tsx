import { ShieldCheck, Award, Building2, FileCheck2, Stamp } from 'lucide-react';

export default function PartnersCarousel() {
  const partners = [
    { name: 'ISO 9001:2015 Certified', sub: 'Quality Standard', icon: ShieldCheck },
    { name: 'Govt. of India NCT Delhi', sub: 'Trust Act 1882', icon: FileCheck2 },
    { name: 'Department of Labor', sub: 'Regd No. 201006450', icon: Award },
    { name: 'Trade Mark Registry', sub: 'App No. 3214249', icon: Stamp },
    { name: 'MSME Govt of India', sub: 'Skill Enterprise', icon: Building2 },
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
          Recognized, Registered & Accredited By
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {partners.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all grayscale hover:grayscale-0 group cursor-default"
              >
                <div className="flex flex-col items-center justify-center space-y-1.5">
                  <Icon className="w-8 h-8 text-slate-400 group-hover:text-brand-bright transition-colors" />
                  <span className="text-xs font-bold text-slate-800 group-hover:text-brand-navy transition-colors">
                    {p.name}
                  </span>
                  <span className="text-[10px] text-slate-500">{p.sub}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
