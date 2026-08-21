'use client';

import { Testimonial } from '@/lib/db';
import { Star, Quote, Award } from 'lucide-react';

interface TestimonialProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialProps) {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-bright uppercase">
            Student Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Real Students. Real Skills. <span className="text-brand-bright">Real Growth.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Hear from SKIE Academy alumni who transformed their knowledge into workplace success.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-card p-8 rounded-2xl border border-slate-200/90 relative flex flex-col justify-between hover:shadow-2xl hover:border-brand-bright/40 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-bright/10" />
              
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-4">
                <img
                  src={item.photo}
                  alt={item.studentName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-bright/30"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {item.studentName}
                  </h4>
                  <p className="text-xs text-brand-bright font-semibold">
                    {item.course}
                  </p>
                  <div className="flex items-center space-x-1 text-[11px] text-emerald-600 font-medium mt-0.5">
                    <Award className="w-3 h-3" />
                    <span>{item.achievement}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
