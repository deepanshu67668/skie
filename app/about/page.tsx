'use client';

import { useState } from 'react';
import DirectorMessage from '@/components/DirectorMessage';
import { Target, Compass, Sparkles, CheckCircle2, Award, ShieldCheck, ArrowRight, X, Phone, Check } from 'lucide-react';

export default function AboutPage() {
  const [selectedPhilosophy, setSelectedPhilosophy] = useState<any | null>(null);

  const philosophyDetails = {
    mission: {
      title: 'Our Mission',
      tag: 'COMMUNITY IMPACT & SKILL DEVELOPMENT',
      badge: 'COMMUNITY IMPACT',
      icon: Target,
      tagline: 'Eradicating Digital Illiteracy Through Practical Technical Education',
      desc: 'Shri Krishan Institute of Education (SKIE Academy) was established under the Public Charitable Trust Act 1882 with the primary mission of making high-quality computer education accessible to all sections of society.',
      fullStory: 'We believe that theoretical knowledge alone is insufficient in today’s technology-driven workplace. At SKIE, every student undergoes 100% daily practical computer lab sessions under expert faculty guidance. Our courses—ranging from DCA, ADCA, Tally Prime Gold with GST, to Web Development and Graphic Design—are structured specifically to fulfill real-world job requirements.',
      pillars: [
        'Affordable & Subsidized Fee Structures for Needy Students',
        '100% Daily Practical Computer Lab Terminals for Every Student',
        'ISO 9001:2015 Certified Examination & Credential Verification',
        'Dedicated Job Placement & Career Counseling Desk',
      ],
      achievement: 'Trained 5000+ students from Ghaziabad & Delhi NCR since 2014.',
    },
    vision: {
      title: 'Our Vision',
      tag: 'NATIONAL RECOGNITION & ACADEMIC EXCELLENCE',
      badge: 'NATIONAL RECOGNITION',
      icon: Compass,
      tagline: 'Building a Premier Center for Practical & Technical Education',
      desc: 'Our vision is to transform SKIE Academy into a benchmark institute for practical IT, accounting, and professional vocational training across Uttar Pradesh and Delhi NCR.',
      fullStory: 'We strive to continuously upgrade our computer infrastructure, introduce emerging digital skill courses, and maintain rigorous academic standards. Our objective is to graduate students who are not only technically proficient but also ethically sound, socially responsible, and prepared for leadership roles.',
      pillars: [
        'State-of-the-Art Air-Conditioned Computer Laboratories',
        'Recognized Accreditations (Govt. NCT Delhi & Trade Marks Regd.)',
        'Regular Industry Workshops & Real-Site Project Exposure',
        'Continuous Faculty Development & Modern Curricula Update',
      ],
      achievement: 'ISO 9001:2015 & Govt. NCT Delhi Registered Institute.',
    },
    aim: {
      title: 'Our Aim',
      tag: 'GLOBAL STANDARDS & CAREER GROWTH',
      badge: 'GLOBAL STANDARDS',
      icon: Award,
      tagline: 'Empowering Every Graduate with Dignified Career Employment',
      desc: 'SKIE Academy aims to achieve national acclaim by delivering training services of international quality that empower individuals to secure dignified, sustainable careers.',
      fullStory: 'We measure our institutional success by the real-world success of our graduates. Whether a student aims to work as an accountant, computer operator, web designer, or start their own IT/Cyber service center, our practical training provides the confidence and technical capability required for independence.',
      pillars: [
        'Practical Assessment & Real-World Case Study Projects',
        'Career Placement Tie-Ups with Regional Companies & Offices',
        'Self-Employment & Freelance Skill Mentorship',
        'Lifetime Alumni Verification & Skill Refreshers',
      ],
      achievement: '100% Practical Verification Before Certificate Issuance.',
    },
  };

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* Page Header */}
      <section className="bg-[#050B18] text-white py-16 lg:py-20 relative overflow-hidden border-b border-[#C5A059]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/15 px-3.5 py-1 rounded-full border border-[#C5A059]/30">
            Shri Krishan Institute of Education
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
            Empowering Careers Through <span className="text-[#C5A059]">Practical Education</span>
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Located centrally in Loni Ghaziabad, SKIE Academy has been the stepping stone for thousands of students entering the IT and professional workforce.
          </p>
        </div>
      </section>

      {/* Our Story & Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              Our Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#050B18] leading-tight">
              Shaping Careers & Eradicating Digital Illiteracy
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                <strong>Shri Krishan Institute of Education (SKIE)</strong> is registered under the Public Charitable Trust Act 1882 under section 60 vide <strong>Reg. No. 3123/IV</strong> from Govt. of India NCT Delhi.
              </p>
              <p>
                SKIE is an <strong>ISO 9001:2015 Certified Training Institute</strong> and is also legally registered in Controller General of Patents Design & Trade Marks (Ministry of Commerce & Industry) under Trade Marks Application No. <strong>3214249</strong>, as well as Department of Labor Govt. of India Delhi Regd. No. <strong>201006450</strong>.
              </p>
              <p>
                At SKIE Academy, we don't just teach computers; we shape careers. Our core focus is to provide high-quality, affordable technical education that makes every student job-ready from Day 1.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-bold text-slate-800">
              <div className="flex items-center space-x-2 bg-slate-100 p-3 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>100% Lab Practical Focus</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-100 p-3 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>ISO & Govt Recognition</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]">
              <img
                src="/images/campus_facade.jpg"
                alt="SKIE Computer Institute Campus"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xl font-serif font-bold">10+ Years of Educational Service</p>
                  <p className="text-xs text-[#C5A059] font-bold">5000+ Students Successfully Trained</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Director's Message & Vision */}
      <DirectorMessage />

      {/* Mission, Vision, Aim Cards - Clickable Cards Opening Modal Screen */}
      <section className="bg-[#FBFBF9] py-20 border-y border-slate-200 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                OUR PHILOSOPHY & VALUES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#050B18]">
              Mission, Vision & Strategic Aims
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm">
              Click any card below to view detailed institutional goals & strategic objectives.
            </p>
          </div>

          {/* 3 Interactive Clickable Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Our Mission */}
            <div
              onClick={() => setSelectedPhilosophy(philosophyDetails.mission)}
              className="bg-white border-2 border-slate-200 hover:border-[#C5A059] rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#C5A059]/25 transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#050B18] via-[#C5A059] to-[#050B18] absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#050B18] text-[#C5A059] border-2 border-[#C5A059] flex items-center justify-center shadow-lg group-hover:bg-[#C5A059] group-hover:text-[#050B18] group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1.5 bg-[#C5A059]/15 text-[#050B18] text-[10px] font-black uppercase tracking-wider rounded-lg border border-[#C5A059]/40 shadow-xs">
                    COMMUNITY IMPACT
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-black text-[#050B18] group-hover:text-[#C5A059] transition-colors">
                  Our Mission
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To eradicate illiteracy from weaker sections and provide affordable quality technical education. We introduce job-oriented self-employment courses to train students and build a wide network of education centers.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#050B18]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>100% Practical Skill Education</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. Our Vision */}
            <div
              onClick={() => setSelectedPhilosophy(philosophyDetails.vision)}
              className="bg-white border-2 border-slate-200 hover:border-[#C5A059] rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#C5A059]/25 transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#050B18] via-[#C5A059] to-[#050B18] absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#050B18] text-[#C5A059] border-2 border-[#C5A059] flex items-center justify-center shadow-lg group-hover:bg-[#C5A059] group-hover:text-[#050B18] group-hover:rotate-6 transition-all duration-300">
                    <Compass className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1.5 bg-[#C5A059]/15 text-[#050B18] text-[10px] font-black uppercase tracking-wider rounded-lg border border-[#C5A059]/40 shadow-xs">
                    NATIONAL RECOGNITION
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-black text-[#050B18] group-hover:text-[#C5A059] transition-colors">
                  Our Vision
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To become a leading training institute providing instruction, certification, and research in computer education, developing students to become highly competent, socially responsible, and ethically sound.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#050B18]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>ISO 9001:2015 Accredited</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Our Aim */}
            <div
              onClick={() => setSelectedPhilosophy(philosophyDetails.aim)}
              className="bg-white border-2 border-slate-200 hover:border-[#C5A059] rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-[#C5A059]/25 transition-all duration-500 transform hover:-translate-y-2 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#050B18] via-[#C5A059] to-[#050B18] absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#050B18] text-[#C5A059] border-2 border-[#C5A059] flex items-center justify-center shadow-lg group-hover:bg-[#C5A059] group-hover:text-[#050B18] group-hover:rotate-6 transition-all duration-300">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1.5 bg-[#C5A059]/15 text-[#050B18] text-[10px] font-black uppercase tracking-wider rounded-lg border border-[#C5A059]/40 shadow-xs">
                    GLOBAL STANDARDS
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-black text-[#050B18] group-hover:text-[#C5A059] transition-colors">
                  Our Aim
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To achieve global acclamation by offering training services of international standards, empowering individuals to earn a dignified living with practical tech and accounting skills.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#050B18]">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Job Placement Assistance</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Philosophy Detail Modal Screen */}
      {selectedPhilosophy && (
        <div
          onClick={() => setSelectedPhilosophy(null)}
          className="fixed inset-0 z-50 bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-2 border-[#C5A059] max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col relative animate-scale-up"
          >
            
            {/* Modal Header */}
            <div className="bg-[#050B18] text-white p-6 border-b border-[#C5A059]/40 relative">
              <button
                onClick={() => setSelectedPhilosophy(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#050B18] font-bold flex items-center justify-center transition-colors shadow-md z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 pr-8">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C5A059] text-[#050B18] inline-block">
                  {selectedPhilosophy.tag}
                </span>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {selectedPhilosophy.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
                  {selectedPhilosophy.tagline}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
              
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {selectedPhilosophy.desc}
              </p>

              <div className="p-4 bg-[#F8F8F5] border border-slate-200 rounded-xl space-y-2">
                <h4 className="text-xs font-serif font-bold text-[#050B18] uppercase tracking-wider">
                  Detailed Philosophy Breakdown
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedPhilosophy.fullStory}
                </p>
              </div>

              {/* Key Pillars */}
              <div className="space-y-3">
                <h4 className="text-xs font-serif font-bold text-[#050B18] uppercase tracking-wider">
                  Key Strategic Objectives
                </h4>
                <div className="space-y-2">
                  {selectedPhilosophy.pillars.map((pillar: string, idx: number) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start space-x-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      <span className="font-semibold">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#050B18] text-white rounded-xl flex items-center justify-between text-xs">
                <span className="text-[#C5A059] font-bold uppercase tracking-wider text-[10px]">Track Record:</span>
                <span className="font-semibold">{selectedPhilosophy.achievement}</span>
              </div>

            </div>

            {/* Modal Bottom Footer */}
            <div className="bg-[#F8F8F5] p-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-[#C5A059] flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>SKIE ACADEMY GOVT. REGISTERED</span>
              </span>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setSelectedPhilosophy(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                >
                  CLOSE
                </button>
                <a
                  href="tel:+918882362470"
                  className="px-5 py-2 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] text-xs font-bold rounded-xl transition-colors shadow-md flex items-center space-x-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL ADMISSIONS</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
