'use client';

import { useState } from 'react';
import initialData from '@/data/initialData.json';
import { ShieldCheck, Eye, FileText } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = initialData.certifications;
  const [activeCert, setActiveCert] = useState<any | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#F5F5F0] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-brand-gold">
            Institutional Accreditation
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#0B132B]">
            Recognized. Certified. <span className="italic font-light">Trusted.</span>
          </h2>
          <p className="text-slate-600 text-base font-sans leading-relaxed">
            SKIE Academy operates in compliance with official government registration and international ISO quality standards.
          </p>
        </div>

        {/* Clean Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 border border-slate-300 space-y-4 hover:border-[#0B132B] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-mono font-bold text-brand-gold">
                    {cert.regNo}
                  </span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5">
                    Verified
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#0B132B]">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Certificate Thumbnail */}
              <div
                onClick={() => setActiveCert(cert)}
                className="relative h-48 w-full bg-slate-100 border border-slate-200 cursor-pointer overflow-hidden group flex items-center justify-center p-2"
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute inset-0 bg-[#0B132B]/75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-sans font-bold space-x-2">
                  <Eye className="w-4 h-4 text-brand-gold" />
                  <span>Inspect Official Document</span>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="text-xs font-sans font-bold text-[#0B132B] hover:text-brand-gold underline"
                >
                  View Full Size Document
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 bg-[#0B132B]/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 max-w-3xl w-full border border-slate-300 space-y-4 shadow-2xl relative"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-lg font-serif font-bold text-[#0B132B]">{activeCert.title}</h3>
                <p className="text-xs text-slate-500 font-mono">{activeCert.regNo}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="w-8 h-8 rounded-none bg-slate-100 text-slate-700 font-bold hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[65vh] overflow-hidden bg-slate-50 border p-2 flex items-center justify-center">
              <img
                src={activeCert.imageUrl}
                alt={activeCert.title}
                className="max-h-[60vh] object-contain"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveCert(null)}
                className="px-5 py-2 bg-[#0B132B] text-white text-xs font-sans font-bold uppercase tracking-wider"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
