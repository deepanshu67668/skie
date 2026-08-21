'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, Phone, Send, CheckCircle2, ShieldCheck, Flame, GraduationCap } from 'lucide-react';

export default function AdmissionSplashModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'Diploma in Computer Applications (DCA)',
    timing: 'Morning Batch (9:00 AM - 11:00 AM)',
  });

  useEffect(() => {
    // Check if splash modal was closed during current session
    const hasSeenSplash = sessionStorage.getItem('skie_splash_closed');
    if (!hasSeenSplash) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200); // Opens automatically 1.2s after page load
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('skie_splash_closed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      // Automatically close modal 1.8 seconds after submission
      setTimeout(() => {
        handleClose();
      }, 1800);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in font-sans">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white border-2 border-[#C5A059] max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col relative animate-scale-up"
      >
        
        {/* Top Metallic Gold Announcement Header */}
        <div className="bg-gradient-to-r from-[#050B18] via-[#111F3C] to-[#050B18] text-white p-6 border-b-2 border-[#C5A059] relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#050B18] font-bold flex items-center justify-center transition-colors shadow-md z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-8">
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 bg-[#C5A059] text-[#050B18] rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
              <Flame className="w-3.5 h-3.5 fill-current animate-pulse" />
              <span>ADMISSIONS OPEN 2026-2027</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Shri Krishan Institute of Education
            </h2>

            <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider">
              ISO 9001:2015 & Govt. NCT Delhi Registered Institute
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          
          {/* Key Offer Highlights */}
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
            <div className="p-2.5 bg-[#F8F8F5] border border-slate-200 rounded-xl flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>100% Practical Computer Labs</span>
            </div>
            <div className="p-2.5 bg-[#F8F8F5] border border-slate-200 rounded-xl flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>ISO 9001:2015 Certificate</span>
            </div>
            <div className="p-2.5 bg-[#F8F8F5] border border-slate-200 rounded-xl flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>Special Batch Scholarship</span>
            </div>
            <div className="p-2.5 bg-[#F8F8F5] border border-slate-200 rounded-xl flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>Job Placement Support</span>
            </div>
          </div>

          {/* Quick Admission Form */}
          <div className="bg-[#050B18] text-white p-5 rounded-2xl space-y-4 border border-[#C5A059]/40 shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h3 className="text-xs font-bold text-[#C5A059] uppercase tracking-wider flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Online Admission Enquiry Form</span>
              </h3>
              <span className="text-[10px] text-slate-400">LIMITED SEATS</span>
            </div>

            {submitted ? (
              <div className="p-5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 rounded-xl text-xs font-bold space-y-1.5 text-center animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-1 animate-bounce" />
                <p className="text-sm text-emerald-300 font-extrabold">Enquiry Submitted Successfully!</p>
                <p className="text-slate-300 font-normal">Our SKIE admissions officer will contact you shortly. Closing window...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter mobile number (e.g. 9876543210)"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Course of Interest
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-[#C5A059]"
                    >
                      <option value="Diploma in Computer Applications (DCA)">DCA - Computer Applications</option>
                      <option value="Advanced Diploma (ADCA)">ADCA - 1 Year Master Diploma</option>
                      <option value="Tally Prime Gold with GST">Tally Prime Gold & Accounting</option>
                      <option value="Python & Web Development">Python & Web Development</option>
                      <option value="Graphic Design & Photoshop">Graphic Design & Photoshop</option>
                      <option value="Professional IT Training">Professional IT Training</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      Batch Timing
                    </label>
                    <select
                      value={formData.timing}
                      onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white outline-none focus:border-[#C5A059]"
                    >
                      <option value="Morning Batch (9:00 AM - 11:00 AM)">Morning (9:00 AM - 11:00 AM)</option>
                      <option value="Afternoon Batch (12:00 PM - 2:00 PM)">Afternoon (12:00 PM - 2:00 PM)</option>
                      <option value="Evening Batch (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
                      <option value="Sunday Special Batch">Sunday Special Batch</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.01] flex items-center justify-center space-x-2 pt-3 mt-2"
                >
                  <span>SUBMIT ADMISSION ENQUIRY</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="bg-[#F8F8F5] p-4 border-t border-slate-200 flex items-center justify-between">
          <a
            href="tel:+918882362470"
            className="flex items-center space-x-1.5 text-xs font-bold text-[#050B18] hover:text-[#C5A059] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>HELPLINE: +91 8882362470</span>
          </a>

          <button
            onClick={handleClose}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors"
          >
            CLOSE & CONTINUE
          </button>
        </div>

      </div>
    </div>
  );
}
