import WhyChooseSkie from '@/components/WhyChooseSkie';
import LearningJourney from '@/components/LearningJourney';
import CareerCtaBanner from '@/components/CareerCtaBanner';
import { ShieldCheck, MonitorPlay, Users, Award, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Why SKIE Academy | 100% Practical Computer Training',
  description: 'Discover why thousands of students choose SKIE Academy in Ghaziabad & Loni for computer, Tally, Excel, and tech training.',
};

export default function WhySkiePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="bg-brand-navy text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            The SKIE Education Difference
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3">
            Why Thousands of Students <span className="cyan-gradient-text">Trust SKIE</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Practical learning, experienced faculty, affordable fee structure, and government-recognized certifications.
          </p>
        </div>
      </section>

      <WhyChooseSkie />

      <LearningJourney />

      <CareerCtaBanner />
    </div>
  );
}
