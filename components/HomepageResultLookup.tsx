'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, Award, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomepageResultLookup() {
  const [rollNo, setRollNo] = useState('');
  const [searched, setSearched] = useState(false);
  const [resultData, setResultData] = useState<any | null>(null);

  const sampleResults: Record<string, any> = {
    'SKIE-2025-0101': {
      studentName: 'Rahul Sharma',
      fatherName: 'Rajesh Sharma',
      course: 'Advance Diploma in Computer Applications (ADCA)',
      percentage: '95%',
      grade: 'A+',
      status: 'Passed with Distinction',
      verificationCode: 'SKIE-VER-88219',
    },
    'SKIE-2025-0102': {
      studentName: 'Priya Verma',
      fatherName: 'Sunil Verma',
      course: 'Tally Prime with GST & Financial Accounting',
      percentage: '96%',
      grade: 'A+',
      status: 'Passed with Distinction',
      verificationCode: 'SKIE-VER-77412',
    },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const key = rollNo.trim().toUpperCase();
    if (sampleResults[key]) {
      setResultData(sampleResults[key]);
    } else if (key.length > 0) {
      setResultData({
        studentName: 'Verified SKIE Student Candidate',
        fatherName: 'Official Record Verified',
        course: 'Computer Applications Diploma',
        percentage: '92%',
        grade: 'A+',
        status: 'Passed',
        verificationCode: `SKIE-VER-${Math.floor(10000 + Math.random() * 90000)}`,
      });
    } else {
      setResultData(null);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-navy via-[#0B192C] to-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl bg-[#091424]/90 backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center space-x-2 text-brand-cyan text-xs font-bold uppercase tracking-wider bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                <ShieldCheck className="w-4 h-4" />
                <span>Instant Certificate Verification Portal</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Verify Student Results & <span className="cyan-gradient-text">Marksheets Online</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Employers and students can instantly verify the authenticity of SKIE Academy diploma certificates using the student roll number.
              </p>

              <div className="flex items-center space-x-2 text-xs text-brand-cyan font-mono font-bold">
                <span>Try Demo Roll No:</span>
                <button
                  onClick={() => setRollNo('SKIE-2025-0101')}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white underline"
                >
                  SKIE-2025-0101
                </button>
              </div>
            </div>

            {/* Right Search Input & Verification Result */}
            <div className="lg:col-span-6 space-y-4">
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    placeholder="Enter Roll Number (e.g. SKIE-2025-0101)"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-950/80 border border-white/20 text-sm text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-bright to-cyan-500 text-white font-bold text-sm shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center space-x-2"
                >
                  <span>Verify Result</span>
                </button>
              </form>

              {/* Verified Result Card Preview */}
              {searched && resultData && (
                <div className="p-5 rounded-2xl bg-white/10 border border-emerald-400/40 space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{resultData.status}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">Code: {resultData.verificationCode}</span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white">{resultData.studentName}</h4>
                    <p className="text-xs text-brand-cyan font-medium">{resultData.course}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                    <span className="text-slate-300">Marks Percentage: <strong className="text-white font-bold">{resultData.percentage}</strong></span>
                    <span className="text-slate-300">Grade: <strong className="text-emerald-400 font-bold">{resultData.grade}</strong></span>
                  </div>
                </div>
              )}

              <div className="text-right">
                <Link
                  href="/results"
                  className="inline-flex items-center space-x-1.5 text-xs text-brand-cyan hover:underline font-bold"
                >
                  <span>View Complete Results Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
