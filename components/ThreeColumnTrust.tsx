'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Quote, Eye, Star, Award, Sparkles } from 'lucide-react';
import initialData from '@/data/initialData.json';

export default function ThreeColumnTrust() {
  const [activeCertModal, setActiveCertModal] = useState<any | null>(null);

  const certs = initialData.certifications.slice(0, 3);
  const achievements = [
    { title: 'Computer Lab Practical', img: '/images/hero_student.jpg' },
    { title: 'Student Practice Batch', img: '/images/course_computer.jpg' },
    { title: 'Faculty Training Session', img: '/images/why_skie_lab.jpg' },
    { title: 'IT Networking Lab', img: '/images/course_it_training.jpg' },
    { title: 'SKIE Campus Building', img: '/images/campus_facade.jpg' },
    { title: 'Coding & Web Lab', img: '/images/course_programming.jpg' },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: STUDENT STORIES (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/30 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                STUDENT STORIES
              </span>
            </div>

            {/* Testimonial Card */}
            <div className="bg-[#F8F8F5] border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
              
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-[#C5A059]" />
                <div className="flex items-center space-x-1 text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed font-serif">
                "The practical training and supportive faculty at SKIE helped me gain the confidence to apply my skills in real-site projects and secure a great opportunity."
              </p>

              <div className="flex items-center space-x-3.5 pt-2 border-t border-slate-200">
                <img
                  src="/images/hero_student.jpg"
                  alt="Neha Sharma SKIE Graduate"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A059] shadow-md"
                />
                <div>
                  <h4 className="text-xs font-bold font-serif text-[#050B18]">Neha Sharma</h4>
                  <p className="text-[11px] text-slate-500">Diploma in Computer Applications</p>
                  <p className="text-[10px] text-[#C5A059] font-bold uppercase">2024 Batch • Passed First Division</p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: OUR STUDENTS, THEIR ACHIEVEMENTS (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/30 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                OUR STUDENTS, THEIR ACHIEVEMENTS
              </span>
            </div>

            {/* 6 Distinct High-Res Photo Grid with Hover Zoom */}
            <div className="grid grid-cols-3 gap-2.5">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="h-24 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative group cursor-pointer shadow-xs hover:shadow-lg transition-all"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#050B18]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-1 text-center">
                    <span className="text-[9px] font-bold text-white uppercase">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <Link
                href="/results"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#050B18] hover:text-[#C5A059] transition-colors group"
              >
                <span>VIEW ALL ACHIEVEMENTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 3: TRUSTED & CERTIFIED (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/30 rounded-full mb-2">
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                  TRUSTED & CERTIFIED
                </span>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-[#050B18]">
                A Foundation Built on Trust.
              </h3>
            </div>

            {/* 3 Thumbnail Certificates */}
            <div className="grid grid-cols-3 gap-2.5">
              {certs.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveCertModal(cert)}
                  className="h-24 bg-slate-50 border border-slate-200 hover:border-[#C5A059] rounded-xl cursor-pointer overflow-hidden p-1 group flex items-center justify-center relative shadow-xs hover:shadow-lg transition-all"
                >
                  <img src={cert.imageUrl} alt={cert.title} className="max-h-full max-w-full object-contain" />
                  <div className="absolute inset-0 bg-[#050B18]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#C5A059]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/certifications"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#050B18] hover:text-[#C5A059] transition-colors group"
              >
                <span>VIEW ALL CERTIFICATES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeCertModal && (
        <div
          onClick={() => setActiveCertModal(null)}
          className="fixed inset-0 z-50 bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 max-w-2xl w-full rounded-2xl border border-slate-300 space-y-4 shadow-2xl relative animate-fade-in"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-serif font-bold text-[#050B18]">{activeCertModal.title}</h3>
              <button onClick={() => setActiveCertModal(null)} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center">✕</button>
            </div>
            <div className="max-h-[60vh] overflow-hidden bg-slate-50 border rounded-xl p-2 flex items-center justify-center">
              <img src={activeCertModal.imageUrl} alt={activeCertModal.title} className="max-h-[55vh] object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
