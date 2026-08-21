'use client';

import { useState, useEffect } from 'react';
import initialData from '@/data/initialData.json';
import { StudentResult } from '@/lib/db';
import { Search, Award, ShieldCheck, FileText, Printer, Download, CheckCircle2, Lock, KeyRound, AlertCircle, UserCheck } from 'lucide-react';
import { downloadMarksheetFile, printMarksheetWindow } from '@/lib/downloadMarksheet';

export default function ResultsPage() {
  const [results, setResults] = useState<StudentResult[]>(initialData.studentResults as StudentResult[]);
  const [searchRoll, setSearchRoll] = useState('');
  const [searched, setSearched] = useState(false);
  const [foundResult, setFoundResult] = useState<StudentResult | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        if (data.studentResults) setResults(data.studentResults);
      })
      .catch(() => {});
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setErrorMsg('');

    if (!searchRoll.trim()) {
      setErrorMsg('Please enter your official Roll Number to access your marksheet.');
      setFoundResult(null);
      return;
    }

    const query = searchRoll.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

    const match = results.find((s: StudentResult) => {
      const cleanRoll = s.rollNo.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanCode = (s.verificationCode || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return (
        cleanRoll === query ||
        cleanCode === query ||
        (query.length >= 3 && cleanRoll.endsWith(query))
      );
    });

    if (match) {
      setFoundResult(match);
    } else {
      setFoundResult(null);
      setErrorMsg(`No marksheet record matches Roll Number: "${searchRoll}". Please check your admit card roll number.`);
    }
  };

  return (
    <div className="pb-20 space-y-12 font-sans bg-[#FBFBF9]">
      
      {/* Hero Header */}
      <section className="bg-[#050B18] text-white py-16 lg:py-20 relative overflow-hidden border-b border-[#C5A059]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-full">
            <Lock className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              SECURE MARKSHEET ACCESS PORTAL
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white mt-2">
            Student Marksheet <span className="text-[#C5A059]">Verification</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Enter your official SKIE Roll Number to privately access and download your verified examination marksheet.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Secure Search Form */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-xl space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-xl bg-[#050B18] text-[#C5A059] flex items-center justify-center font-bold">
              <KeyRound className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-[#050B18]">Private Student Login / Roll Lookup</h2>
              <p className="text-xs text-slate-500">Only students with a valid Roll Number can view their marksheet</p>
            </div>
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#050B18] mb-1.5">
                Official Student Roll Number
              </label>
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchRoll}
                  onChange={(e) => setSearchRoll(e.target.value)}
                  placeholder="e.g. SKIE-2025-0101 or 101"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-300 text-sm font-mono font-bold text-[#050B18] focus:border-[#C5A059] outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.01] flex items-center justify-center space-x-2 border border-[#050B18]"
            >
              <ShieldCheck className="w-4 h-4 text-[#050B18]" />
              <span>VERIFY & ACCESS MY MARKSHEET</span>
            </button>
          </form>
        </div>

        {/* Verified Marksheet Result Card (Only shown upon matching Roll Number search) */}
        {searched && (
          <div>
            {foundResult ? (
              <div className="bg-white text-slate-900 border-4 border-[#C5A059] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden animate-fade-in">
                
                {/* Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-black text-6xl text-slate-900/[0.03] rotate-[-25deg] pointer-events-none select-none whitespace-nowrap">
                  SKIE ACADEMY CERTIFIED
                </div>

                {/* Top Header Banner */}
                <div className="text-center pb-6 border-b-4 border-double border-[#C5A059] space-y-2 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#050B18] text-[#C5A059] border-2 border-[#C5A059] flex items-center justify-center font-serif font-black text-2xl mx-auto shadow-lg">
                    S
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#C5A059] block">
                    SHRI KRISHAN INSTITUTE OF EDUCATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#050B18]">
                    Official Verified Statement of Marks
                  </h3>
                  <p className="text-[10px] text-slate-500 font-semibold max-w-xl mx-auto">
                    Reg. No. 3123/IV (Public Charitable Trust Act 1882, Govt. of India NCT Delhi) • ISO 9001:2015 Certified Institute
                  </p>
                </div>

                {/* Student Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#F8F8F5] p-5 rounded-2xl border border-slate-200 text-xs font-sans relative z-10">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Roll Number</span>
                    <span className="font-mono font-bold text-base text-[#C5A059]">{foundResult.rollNo}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Student Name</span>
                    <span className="font-bold text-sm text-[#050B18]">{foundResult.studentName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Father's Name</span>
                    <span className="font-semibold text-slate-800">{foundResult.fatherName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Session</span>
                    <span className="font-semibold text-slate-800">{foundResult.session || 'Jan 2024 - Dec 2024'}</span>
                  </div>
                </div>

                {/* Course Title */}
                <div className="p-4 bg-[#050B18] text-white rounded-2xl border-2 border-[#C5A059] flex items-center justify-between relative z-10">
                  <div>
                    <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider block">Course Title:</span>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-white">{foundResult.course}</h4>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-extrabold border border-emerald-500/40 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>PASSED</span>
                  </div>
                </div>

                {/* Performance Summary */}
                <div className="grid grid-cols-3 gap-3 bg-white p-5 rounded-2xl border-2 border-slate-200 text-center font-sans relative z-10">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Score</span>
                    <span className="text-xl font-black text-[#050B18]">{foundResult.totalMarks || 475} / {foundResult.maxMarks || 500}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Percentage</span>
                    <span className="text-xl font-black text-[#C5A059]">{foundResult.percentage}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Grade</span>
                    <span className="text-xl font-black text-emerald-600">{foundResult.grade}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
                  <button
                    onClick={() => downloadMarksheetFile(foundResult)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-105 flex items-center justify-center space-x-2 border-2 border-[#050B18]"
                  >
                    <Download className="w-4 h-4 text-[#050B18]" />
                    <span>DOWNLOAD MARKSHEET FILE (.HTML)</span>
                  </button>

                  <button
                    onClick={() => printMarksheetWindow(foundResult)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#050B18] hover:bg-slate-800 text-[#C5A059] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-105 flex items-center justify-center space-x-2 border-2 border-[#C5A059]"
                  >
                    <Printer className="w-4 h-4 text-[#C5A059]" />
                    <span>PRINT / SAVE PDF</span>
                  </button>
                </div>

              </div>
            ) : (
              <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-6 text-center space-y-3 text-rose-900">
                <AlertCircle className="w-8 h-8 text-rose-600 mx-auto" />
                <h4 className="text-base font-bold">{errorMsg}</h4>
                <p className="text-xs text-slate-600">
                  Make sure you are entering your official Roll Number as provided on your SKIE ID Card.
                </p>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
