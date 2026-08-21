'use client';

import { useState } from 'react';
import { Search, GraduationCap, CheckCircle2, AlertCircle, FileText, Download, UserCheck, Shield, Printer, Sparkles, Check, Award } from 'lucide-react';
import initialData from '@/data/initialData.json';
import { downloadMarksheetFile, printMarksheetWindow } from '@/lib/downloadMarksheet';

export default function ResultSearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentResult, setStudentResult] = useState<any | null>(null);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [downloading, setDownloading] = useState(false);

  const sampleRolls = ['SKIE-2025-0101', 'SKIE-2025-0102', 'SKIE-2025-0103', '101', '102'];
  const studentList = initialData.studentResults || [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setErrorMsg('');

    if (!searchQuery.trim()) {
      setErrorMsg('Please enter a valid Roll Number or Student Name.');
      setStudentResult(null);
      return;
    }

    const query = searchQuery.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

    const match = studentList.find((s: any) => {
      const cleanRoll = s.rollNo.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanName = s.studentName.toLowerCase();
      const cleanFather = s.fatherName.toLowerCase();
      const cleanCode = (s.verificationCode || '').toLowerCase().replace(/[^a-z0-9]/g, '');

      return (
        cleanRoll.includes(query) ||
        query.includes(cleanRoll) ||
        cleanName.includes(searchQuery.trim().toLowerCase()) ||
        cleanFather.includes(searchQuery.trim().toLowerCase()) ||
        cleanCode.includes(query) ||
        (query.length >= 3 && cleanRoll.endsWith(query))
      );
    });

    if (match) {
      setStudentResult(match);
    } else {
      setStudentResult(null);
      setErrorMsg(`No student record found for: "${searchQuery}". Try demo roll numbers like SKIE-2025-0101 or 101.`);
    }
  };

  const fillQuickSearch = (roll: string) => {
    setSearchQuery(roll);
    const query = roll.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const match = studentList.find((s: any) => {
      const cleanRoll = s.rollNo.toLowerCase().replace(/[^a-z0-9]/g, '');
      return cleanRoll.includes(query) || query.includes(cleanRoll);
    });

    if (match) {
      setStudentResult(match);
      setSearched(true);
      setErrorMsg('');
    }
  };

  const handleDownload = () => {
    if (!studentResult) return;
    setDownloading(true);
    downloadMarksheetFile(studentResult);
    setTimeout(() => setDownloading(false), 1200);
  };

  const handlePrint = () => {
    if (!studentResult) return;
    printMarksheetWindow(studentResult);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#050B18] text-white border-y border-[#C5A059]/40 font-sans relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-full">
            <UserCheck className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">
              STUDENT VERIFICATION PORTAL
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Check Student Result & Marksheet
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Search student marksheet, grade breakdown, and download official ISO 9001:2015 verified certificate status instantly.
          </p>
        </div>

        {/* Search Card Container */}
        <div className="max-w-3xl mx-auto bg-[#0B1426] border border-slate-700/80 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Roll Number (e.g. SKIE-2025-0101 or 101) or Student Name"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>SEARCH RESULT</span>
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Roll Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-[11px] text-slate-400 font-semibold">Try Demo Roll Numbers:</span>
            {sampleRolls.map((roll) => (
              <button
                key={roll}
                type="button"
                onClick={() => fillQuickSearch(roll)}
                className="px-3 py-1 bg-slate-800 hover:bg-[#C5A059] hover:text-[#050B18] border border-slate-700 rounded-lg text-[11px] font-mono font-bold text-[#C5A059] transition-colors shadow-sm"
              >
                {roll}
              </button>
            ))}
          </div>

        </div>

        {/* Ultra-Attractive Verified Marksheet Card Display */}
        {searched && (
          <div className="max-w-3xl mx-auto">
            {studentResult ? (
              <div className="bg-white text-slate-900 border-4 border-[#C5A059] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden animate-fade-in">
                
                {/* Background Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-black text-6xl text-slate-900/[0.03] rotate-[-25deg] pointer-events-none select-none whitespace-nowrap">
                  SKIE ACADEMY CERTIFIED
                </div>

                {/* Top Official Seal Banner */}
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
                    Reg. No. 3123/IV (Public Charitable Trust Act 1882, Govt. of India NCT Delhi) • ISO 9001:2015 Certified Institute • Trade Marks Regd. No. 3214249
                  </p>
                </div>

                {/* Student Personal Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#F8F8F5] p-5 rounded-2xl border border-slate-200 text-xs font-sans relative z-10">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Roll Number</span>
                    <span className="font-mono font-bold text-base text-[#C5A059]">{studentResult.rollNo}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Student Full Name</span>
                    <span className="font-bold text-sm text-[#050B18]">{studentResult.studentName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Father's Name</span>
                    <span className="font-semibold text-slate-800">{studentResult.fatherName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Session</span>
                    <span className="font-semibold text-slate-800">{studentResult.session || 'Jan 2024 - Dec 2024'}</span>
                  </div>
                </div>

                {/* Course Name */}
                <div className="p-4 bg-[#050B18] text-white rounded-2xl border-2 border-[#C5A059] flex items-center justify-between relative z-10">
                  <div>
                    <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider block">Completed Program:</span>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-white">{studentResult.course}</h4>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-extrabold border border-emerald-500/40 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>VERIFIED PASSED</span>
                  </div>
                </div>

                {/* Performance Summary Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-5 rounded-2xl border-2 border-slate-200 text-center font-sans relative z-10">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Marks</span>
                    <span className="text-xl font-black text-[#050B18]">{studentResult.totalMarks || 475} / {studentResult.maxMarks || 500}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Percentage</span>
                    <span className="text-xl font-black text-[#C5A059]">{studentResult.percentage}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Grade</span>
                    <span className="text-xl font-black text-emerald-600">{studentResult.grade}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Issue Date</span>
                    <span className="text-xs font-bold text-slate-800">{studentResult.issueDate || '15-Jan-2025'}</span>
                  </div>
                </div>

                {/* Verification Code & Director Signature */}
                <div className="pt-4 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs relative z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Digital Security Code:</span>
                    <span className="font-mono font-bold text-[#C5A059] bg-[#050B18] px-3 py-1 rounded-lg border border-[#C5A059]/40 inline-block text-xs">
                      {studentResult.verificationCode || 'SKIE-VER-88219'}
                    </span>
                  </div>

                  <div className="text-center sm:text-right space-y-1">
                    <div className="w-32 border-b-2 border-[#050B18] mx-auto sm:ml-auto" />
                    <span className="font-serif font-bold text-[#050B18] block text-sm">Sandeep Tyagi</span>
                    <span className="text-[10px] text-slate-500 font-semibold block">Founder & Director, SKIE Academy</span>
                  </div>
                </div>

                {/* Footer Action Buttons (Download & Print) */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-105 flex items-center justify-center space-x-2 border-2 border-[#050B18]"
                  >
                    <Download className="w-4 h-4 text-[#050B18]" />
                    <span>{downloading ? 'DOWNLOADING...' : 'DOWNLOAD MARKSHEET FILE (.HTML)'}</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#050B18] hover:bg-slate-800 text-[#C5A059] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-105 flex items-center justify-center space-x-2 border-2 border-[#C5A059]"
                  >
                    <Printer className="w-4 h-4 text-[#C5A059]" />
                    <span>PRINT / SAVE PDF</span>
                  </button>
                </div>

              </div>
            ) : (
              <div className="bg-[#0B1426] border border-amber-500/50 rounded-2xl p-6 text-center space-y-3 text-amber-200">
                <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
                <h4 className="text-base font-bold">{errorMsg}</h4>
                <p className="text-xs text-slate-400">
                  Please verify your Roll Number with your SKIE admission card or call Helpline: <a href="tel:+918882362470" className="text-[#C5A059] underline font-bold">+91 8882362470</a>.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
