import Link from 'next/link';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function CourseComparison() {
  const plans = [
    {
      title: 'Certificate Courses',
      duration: '1 to 3 Months',
      target: 'Quick Skill Upgrades',
      popular: false,
      features: [
        'Basic Computer & Typing',
        'MS Office Fundamentals',
        'Advanced Excel Module',
        'Tally Prime Module',
        'Practical Lab Practice',
        'ISO 9001:2015 Certificate',
      ],
      cta: 'Explore Certificates',
      href: '/courses',
    },
    {
      title: 'Master ADCA Diploma',
      duration: '12 Months (1 Year)',
      target: 'Complete Career Transformation',
      popular: true,
      badge: 'Best Seller',
      features: [
        'Complete Computer Fundamentals',
        'Full MS Office 365 Master Class',
        'Advanced Excel & Data Dashboards',
        'Tally Prime with GST & Returns',
        'DTP & Photoshop Graphic Design',
        'Web Design & HTML/CSS Basics',
        '100% Daily Practical Labs',
        'Resume & Placement Guidance',
        'Govt & ISO Master Diploma',
      ],
      cta: 'Enroll in ADCA Master',
      href: '/courses/adca-1',
    },
    {
      title: 'DCA Computer Diploma',
      duration: '6 Months',
      target: 'Office & Admin Jobs',
      popular: false,
      features: [
        'Computer Basics & OS Operations',
        'MS Word, Excel & PowerPoint',
        'Speed Typing & Office Automation',
        'DTP Fundamentals & Photoshop',
        'Internet & E-Governance Tools',
        'ISO Certified 6-Month Diploma',
        'Practical Exam & Marksheet',
      ],
      cta: 'Enroll in DCA',
      href: '/courses/dca-2',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-bright uppercase">
            Program Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Which Program Fits Your <span className="text-brand-bright">Career Goal?</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Compare our diploma and certificate tracks to choose the best path for your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2 relative ${
                plan.popular
                  ? 'bg-brand-navy text-white shadow-2xl border-2 border-brand-cyan scale-105 z-10'
                  : 'bg-white text-slate-900 shadow-xl border border-slate-200/90'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>{plan.badge}</span>
                </span>
              )}

              <div>
                <div className="border-b border-slate-200/20 pb-6 mb-6">
                  <span className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-brand-cyan' : 'text-brand-bright'}`}>
                    {plan.target}
                  </span>
                  <h3 className="text-2xl font-black mt-1">{plan.title}</h3>
                  <p className={`text-sm font-semibold mt-1 ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    Duration: {plan.duration}
                  </p>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start space-x-3">
                      <CheckCircle2 className={`w-4.5 h-4.5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-brand-cyan' : 'text-emerald-500'}`} />
                      <span className={plan.popular ? 'text-slate-200 font-medium' : 'text-slate-700 font-medium'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-200/20">
                <Link
                  href={plan.href}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide text-center flex items-center justify-center space-x-2 transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-bright to-cyan-500 text-white shadow-lg shadow-brand-bright/30 hover:scale-[1.02]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
