'use client';

import { useState, useEffect } from 'react';
import initialData from '@/data/initialData.json';
import { Certification } from '@/lib/db';
import { ShieldCheck, Eye } from 'lucide-react';

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<Certification[]>(
    initialData.certifications as Certification[]
  );
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        if (data.certifications) setCertifications(data.certifications);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="pb-20 space-y-12">
      
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Government Registrations & Approvals
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Recognized. Certified. <span className="cyan-gradient-text">Trusted.</span>
          </h1>
          <p className="mt-3 text-slate-300 text-base max-w-2xl mx-auto">
            SKIE Academy operates under strict government regulations, ISO quality standards, and registered trademarks to ensure full credibility for all student certificates.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-8 rounded-2xl border border-slate-200/90 space-y-6 hover:shadow-xl hover:border-brand-bright/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-brand-bright/10 text-brand-bright">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                    {cert.regNo}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{cert.title}</h3>
                  <p className="text-xs font-semibold text-brand-bright mt-0.5">{cert.authority}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{cert.description}</p>
                </div>
              </div>

              {/* Certificate Image Preview */}
              <div
                onClick={() => setActiveCert(cert)}
                className="relative h-56 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer group"
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs space-x-2">
                  <Eye className="w-5 h-5 text-brand-cyan" />
                  <span>Click to Inspect Official Certificate</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl relative space-y-4 animate-in fade-in zoom-in duration-200"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{activeCert.title}</h3>
                <p className="text-xs text-slate-500">{activeCert.regNo}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="relative max-h-[65vh] w-full overflow-hidden bg-slate-100 rounded-xl border">
              <img
                src={activeCert.imageUrl}
                alt={activeCert.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveCert(null)}
                className="px-6 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
