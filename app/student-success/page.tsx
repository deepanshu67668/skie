import { getDB } from '@/lib/db';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CareerCtaBanner from '@/components/CareerCtaBanner';
import { Award, Briefcase, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Student Success Stories | SKIE Academy',
  description: 'Read how SKIE Academy alumni achieved career placements in IT, accounting, data analytics, and office administration.',
};

export default function StudentSuccessPage() {
  const db = getDB();

  return (
    <div className="space-y-16 pb-16">
      
      <section className="bg-brand-navy text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Careers Built at SKIE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3">
            Real Students. Real Skills. <span className="cyan-gradient-text">Real Growth.</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Discover student reviews, job placements, and practical achievement stories from our computer institute graduates.
          </p>
        </div>
      </section>

      <TestimonialCarousel testimonials={db.testimonials} />

      <CareerCtaBanner />

    </div>
  );
}
