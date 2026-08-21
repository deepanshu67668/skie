'use client';

import { useState, useEffect } from 'react';
import initialData from '@/data/initialData.json';
import { StudentResult } from '@/lib/db';
import { Search, Award, ShieldCheck, FileText, Printer, Download, CheckCircle2 } from 'lucide-react';

export default function ResultsPage() {
  const [results, setResults] = useState<StudentResult[]>(initialData.studentResults as StudentResult[]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [activeResult, setActiveResult] = useState<StudentResult | null>(null);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        if (data.studentResults) setResults(data.studentResults);
      })
      .catch(() => {});
  }, []);

  const years = ['All', '2025', '2024', '2023'];
  const coursesList = [
    'All',
    'Advance Diploma in Computer Applications (ADCA)',
    'Diploma in Computer Applications (DCA)',
    'Tally Prime with GST & Financial Accounting',
    'Advanced Excel & Business Analytics',
    'Web Development & Frontend Design',
  ];

  const filteredResults = results.filter((item) => {
    const matchesYear = selectedYear === 'All' || item.year === selectedYear;
    const matchesCourse = selectedCourse === 'All' || item.course === selectedCourse;
    const matchesQuery =
      item.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fatherName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesCourse && matchesQuery;
  });

  return (
    <div className="pb-20 space-y-12 font-sans bg-[#FBFBF9]">
      
      {/* Hero Header */}
      <section className="bg-[#050B18] text-white py-16 lg:py-20 relative overflow-hidden border-b border-[#C5A059]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/15 px-3.5 py-1 rounded-full border border-[#C5A059]/30">
            Official Certification & Marksheet Portal
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white mt-2">
            Student Results & <span className="text-[#C5A059]">Verification</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Search student examination results, verified marksheet records, and download authentic ISO 9001:2015 certificates.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Roll Number (e.g. SKIE-2025-0101) or Student Name..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#C5A059] outline-none"
              />
            </div>

            {/* Filter Year */}
            <div className="md:col-span-3">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 bg-white outline-none"
              >
                <option value="All">Filter by Year: All Years</option>
                {years.filter((y) => y !== 'All').map((y) => (
                  <option key={y} value={y}>Year {y}</option>
                ))}
              </select>
            </div>

            {/* Filter Course */}
            <div className="md:col-span-3">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 bg-white outline-none truncate"
              >
                <option value="All">Filter by Course: All Courses</option>
                {coursesList.filter((c) => c !== 'All').map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Results List / Verification Cards */}
        <div className="mt-8 space-y-4">
          {filteredResults.length > 0 ? (
            filteredResults.map((result) => (
              <div
                key={result.rollNo}
                className="bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-[#C5A059] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-xl transition-all group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-0.5 rounded text-xs font-mono font-bold bg-[#050B18] text-[#C5A059] border border-[#C5A059]/40">
                      {result.rollNo}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                      {result.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#050B18] group-hover:text-[#C5A059] transition-colors">{result.studentName}</h3>
                  <p className="text-xs text-slate-500">Father's Name: {result.fatherName}</p>
                  <p className="text-xs font-bold text-[#C5A059]">{result.course}</p>
                </div>

                <div className="flex items-center space-x-6 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-6">
                  <div className="text-center">
                    <span className="block text-2xl font-black text-[#050B18]">{result.percentage}</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Grade {result.grade}</span>
                  </div>

                  <button
                    onClick={() => setActiveResult(result)}
                    className="px-5 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] text-xs font-bold uppercase tracking-wider shadow-md flex items-center space-x-2 transition-all hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    <span>VIEW & DOWNLOAD MARKSHEET</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <Award className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-xl font-bold text-slate-800">No Student Result Found</h3>
              <p className="text-sm text-slate-500">Try searching with roll number `SKIE-2025-0101` or student name `Rahul`.</p>
            </div>
          )}
        </div>

      </div>

      {/* Official Marksheet Modal Lightbox */}
      {activeResult && (
        <div className="fixed inset-0 z-50 bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl border-2 border-[#C5A059] relative space-y-6 animate-scale-up">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#050B18] text-[#C5A059] flex items-center justify-center font-serif font-black text-lg border border-[#C5A059]">
                  S
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#050B18]">Official SKIE Marksheet Certificate</h3>
                  <p className="text-xs text-slate-500">Verification Code: <span className="font-mono font-bold text-[#C5A059]">{activeResult.verificationCode}</span></p>
                </div>
              </div>

              <button
                onClick={() => setActiveResult(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Marksheet Body */}
            <div className="space-y-4 text-sm text-slate-800 bg-[#F8F8F5] p-6 rounded-2xl border border-slate-200">
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 font-medium">Roll Number:</span>
                  <p className="font-bold text-[#050B18] font-mono">{activeResult.rollNo}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Student Name:</span>
                  <p className="font-bold text-[#050B18]">{activeResult.studentName}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Father's Name:</span>
                  <p className="font-bold text-[#050B18]">{activeResult.fatherName}</p>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Session:</span>
                  <p className="font-bold text-[#050B18]">{activeResult.session}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-slate-500 text-xs font-medium">Course Title:</span>
                <p className="font-bold text-[#C5A059] text-base">{activeResult.course}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-xl border border-slate-200 text-center">
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">Total Marks</span>
                  <span className="text-lg font-extrabold text-[#050B18]">{activeResult.totalMarks} / {activeResult.maxMarks}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">Percentage</span>
                  <span className="text-lg font-extrabold text-[#C5A059]">{activeResult.percentage}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">Grade</span>
                  <span className="text-lg font-extrabold text-emerald-600">{activeResult.grade}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-300 font-semibold">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Status: {activeResult.status}</span>
                </span>
                <span>Issue Date: {activeResult.issueDate}</span>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => window.print()}
                className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] text-xs font-bold uppercase tracking-wider shadow-md flex items-center space-x-2 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD / PRINT MARKSHEET</span>
              </button>

              <button
                onClick={() => setActiveResult(null)}
                className="px-5 py-3 rounded-xl bg-[#050B18] text-white text-xs font-bold uppercase"
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
