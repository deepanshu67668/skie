'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What computer courses are offered at SKIE Academy?',
      a: 'SKIE Academy offers 1-year master diplomas (ADCA), 6-month computer diplomas (DCA), Tally Prime with GST accounting, Advanced Excel & Business Analytics, Web Development, Female Special computer batches, and Nursery Teacher Training (NTT).',
    },
    {
      q: 'Are SKIE certificates valid for government and private jobs?',
      a: 'Yes! SKIE is registered under the Public Charitable Trust Act 1882 (Reg No. 3123/IV Govt of India NCT Delhi), ISO 9001:2015 certified, Trade Mark registered (App No. 3214249), and registered with the Department of Labor (Regd No. 201006450). Certificates are valid for government job applications, private employment, and higher studies.',
    },
    {
      q: 'Do you offer monthly installment fee options?',
      a: 'Yes, we provide student-friendly flexible monthly fee installment plans so that education remains affordable for everyone.',
    },
    {
      q: 'Is practical lab training provided daily?',
      a: 'Absoluty! We follow a 100% practical lab-focused teaching methodology. Students practice on dedicated computers daily with personalized instructor support.',
    },
    {
      q: 'Are there separate batches for female students?',
      a: 'Yes, we conduct dedicated female-special computer batches in a comfortable learning environment for girls, homemakers, and working women.',
    },
    {
      q: 'How can I check or verify my marksheet result?',
      a: 'You can verify your official result anytime on our website under the Results section by entering your Student Roll Number or Name.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-20 space-y-12">
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Common <span className="cyan-gradient-text">Questions & Answers</span>
          </h1>
          <p className="mt-3 text-slate-300 text-base max-w-xl mx-auto">
            Everything you need to know about admissions, course validity, lab timings, and fees.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Input */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQ questions..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 shadow-sm text-sm focus:ring-2 focus:ring-brand-bright outline-none"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="glass-card rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 hover:text-brand-bright text-base sm:text-lg"
                >
                  <span className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-bright flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-brand-bright' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
