'use client';

import { useState } from 'react';
import { X, Clock, Award, CheckCircle2, ShieldCheck, Sparkles, Send, Phone, GraduationCap, Briefcase } from 'lucide-react';

interface CourseDetailModalProps {
  course: any;
  onClose: () => void;
}

export default function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  const [enquirySent, setEnquirySent] = useState(false);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  if (!course) return null;

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setEnquirySent(true);
    }
  };

  const modules = course.modules || [
    'Module 1: Fundamentals of Computer & OS Operations',
    'Module 2: Advanced MS Office (Word, Excel, PowerPoint)',
    'Module 3: Internet, Email & Online Business Tools',
    'Module 4: Practical Typing (English & Hindi) & Projects',
  ];

  const careerOps = course.careerOps || [
    'Computer Operator',
    'Data Entry Specialist',
    'Office Assistant',
    'Administrative Executive',
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in font-sans"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white border-2 border-[#C5A059] max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col relative animate-scale-up"
      >
        
        {/* Top Header Banner */}
        <div className="bg-[#050B18] text-white p-5 sm:p-6 border-b border-[#C5A059]/40 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#050B18] font-bold flex items-center justify-center transition-colors shadow-md z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C5A059] text-[#050B18]">
                {course.category || course.badge || 'CERTIFIED PROGRAM'}
              </span>
              <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/20 flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#C5A059]" />
                <span>{course.duration || '3 - 6 Months'}</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {course.name || course.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
              {course.subtitle || course.shortDesc || 'Industry-oriented practical computer & technical training.'}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Top Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#F8F8F5] border border-slate-200 rounded-xl space-y-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase block">Duration</span>
              <span className="text-xs font-bold text-[#050B18]">{course.duration || '3-6 Months'}</span>
            </div>

            <div className="p-3 bg-[#F8F8F5] border border-slate-200 rounded-xl space-y-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase block">Practical Labs</span>
              <span className="text-xs font-bold text-[#050B18]">100% Daily Lab Access</span>
            </div>

            <div className="p-3 bg-[#F8F8F5] border border-slate-200 rounded-xl space-y-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase block">Certification</span>
              <span className="text-xs font-bold text-[#C5A059]">ISO 9001:2015 Verified</span>
            </div>

            <div className="p-3 bg-[#F8F8F5] border border-slate-200 rounded-xl space-y-1">
              <span className="text-[10px] text-slate-500 font-bold uppercase block">Placement</span>
              <span className="text-xs font-bold text-[#050B18]">Career Guidance</span>
            </div>
          </div>

          {/* Course Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-serif font-bold text-[#050B18] uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Course Overview</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {course.desc || course.shortDesc || 'This program is tailored to equip students with hands-on practical skills required in modern corporate offices, IT companies, and government service sectors. Includes daily live computer practice and personalized mentorship.'}
            </p>
          </div>

          {/* Syllabus Modules Breakdown */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h3 className="text-sm font-serif font-bold text-[#050B18] uppercase tracking-wider flex items-center space-x-1.5">
              <GraduationCap className="w-4 h-4 text-[#C5A059]" />
              <span>Syllabus & Modules Covered</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {modules.map((mod: string, idx: number) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start space-x-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h3 className="text-sm font-serif font-bold text-[#050B18] uppercase tracking-wider flex items-center space-x-1.5">
              <Briefcase className="w-4 h-4 text-[#C5A059]" />
              <span>Career Opportunities</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {careerOps.map((job: string, idx: number) => (
                <span key={idx} className="px-3 py-1 bg-[#050B18]/5 text-[#050B18] border border-[#050B18]/15 rounded-lg text-xs font-bold">
                  {job}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Admission Enquiry Box Inside Modal */}
          <div className="bg-[#050B18] text-white p-5 rounded-2xl space-y-3 border border-[#C5A059]/40">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>Instant Admission Helpline</span>
              </h4>
              <span className="text-[10px] text-slate-400">BATCH 2026-2027</span>
            </div>

            {enquirySent ? (
              <div className="p-3 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 rounded-xl text-xs font-bold flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Enquiry received! SKIE admissions officer will call you back shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleEnquiry} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 outline-none focus:border-[#C5A059] flex-1"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Mobile Number"
                  className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 outline-none focus:border-[#C5A059] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 flex-shrink-0"
                >
                  <span>SUBMIT</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="bg-[#F8F8F5] p-4 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-bold text-[#C5A059]">
            <ShieldCheck className="w-4 h-4" />
            <span>ISO 9001:2015 CERTIFIED CAMPUS</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors"
            >
              CLOSE
            </button>
            <a
              href="tel:+918882362470"
              className="px-5 py-2 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] text-xs font-bold rounded-xl transition-colors shadow-md flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL: +91 8882362470</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
