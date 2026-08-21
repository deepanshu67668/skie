import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '@/lib/db';

export default function StudentStories({ testimonials }: { testimonials: Testimonial[] }) {
  const featured = testimonials[0] || {
    studentName: 'Amit Kumar',
    course: 'ADCA (1 Year Master Diploma)',
    review: 'The practical training at SKIE Academy helped me understand how the computer and accounting skills I learned could actually be used in a professional office environment. The teachers give individual attention in the computer lab.',
    photo: 'https://skieofficial.com/wp-content/uploads/2026/01/front-page.webp',
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBF9] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-brand-gold">
              Student Experiences
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#0B132B]">
              Real Stories from <span className="italic font-light">SKIE Alumni</span>
            </h2>
          </div>
          <Link
            href="/student-success"
            className="inline-flex items-center space-x-2 text-sm font-sans font-bold text-[#0B132B] hover:text-brand-gold border-b-2 border-[#0B132B] hover:border-brand-gold pb-1 transition-colors group"
          >
            <span>View All Student Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 border border-slate-200 shadow-sm">
          
          {/* Left Student Photograph */}
          <div className="lg:col-span-5">
            <img
              src={featured.photo}
              alt={featured.studentName}
              className="w-full h-80 sm:h-96 object-cover border border-slate-200"
            />
          </div>

          {/* Right Editorial Testimonial Quotation */}
          <div className="lg:col-span-7 space-y-6">
            <Quote className="w-10 h-10 text-brand-gold opacity-60" />
            
            <p className="text-lg sm:text-2xl font-serif italic text-[#0B132B] leading-relaxed">
              "{featured.review}"
            </p>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-lg font-serif font-bold text-[#0B132B]">
                {featured.studentName}
              </h4>
              <p className="text-xs font-sans text-brand-gold font-semibold uppercase tracking-wider mt-0.5">
                {featured.course} • SKIE Graduate
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
