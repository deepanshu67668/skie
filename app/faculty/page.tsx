'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Award, GraduationCap, Briefcase, BookOpen, CheckCircle2, ArrowRight, X, Phone, Star } from 'lucide-react';

export default function FacultyPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedFacultyModal, setSelectedFacultyModal] = useState<any | null>(null);

  const categories = [
    'All',
    'Leadership',
    'Software & Web',
    'Accounting & Taxation',
    'Design & Creative',
    'Office Automation',
  ];

  const facultyMembers = [
    {
      id: 1,
      name: 'Sandeep Tyagi',
      designation: 'Founder & Director',
      category: 'Leadership',
      experience: '12+ Years Experience',
      qualification: 'M.Tech (Computer Science), B.Tech',
      photo: '/images/director_sandeep_tyagi.jpg',
      specialization: ['IT Management', 'Computer Systems', 'Corporate Strategy', 'Education Policy'],
      coursesTaught: ['ADCA Master Diploma', 'Professional IT Training'],
      rating: 4.9,
      studentsMentored: '3000+',
      bio: 'Sandeep Tyagi is the Founder and Chairman of SKIE Academy. With over 12 years of experience in computer education and corporate technology, he has pioneered practical-first IT education across Ghaziabad and Delhi NCR.',
    },
    {
      id: 2,
      name: 'Rohan Sharma',
      designation: 'Head of Programming & Web Faculty',
      category: 'Software & Web',
      experience: '8+ Years Experience',
      qualification: 'MCA, B.Sc Computer Science',
      photo: '/images/faculty_rohan_sharma.jpg',
      specialization: ['Python', 'HTML5/CSS3', 'JavaScript', 'Full Stack Basics', 'Logic Building'],
      coursesTaught: ['Programming & Web Development', 'Python Master Track', 'DCA Coding Module'],
      rating: 4.9,
      studentsMentored: '1500+',
      bio: 'Rohan Sharma specializes in breaking down complex programming concepts into intuitive, hands-on projects. He has trained hundreds of students into confident web developers and Python programmers.',
    },
    {
      id: 3,
      name: 'Priya Verma',
      designation: 'Head of Financial Accounting Faculty',
      category: 'Accounting & Taxation',
      experience: '9+ Years Experience',
      qualification: 'M.Com, ICAI Certified Tally Professional',
      photo: '/images/faculty_priya_verma.jpg',
      specialization: ['Tally Prime Gold', 'GST Return Filing', 'E-Way Bills', 'Advanced Excel VLOOKUP'],
      coursesTaught: ['Accounting & Office Applications', 'Tally Prime Master Certification', 'GST & Taxation'],
      rating: 4.8,
      studentsMentored: '1800+',
      bio: 'Priya Verma is a seasoned financial accounting expert who trains students in real-world corporate bookkeeping, GST compliance, and Advanced Excel analytics.',
    },
    {
      id: 4,
      name: 'Amit Kumar',
      designation: 'Lead Creative & Multimedia Instructor',
      category: 'Design & Creative',
      experience: '7+ Years Experience',
      qualification: 'Bachelor of Fine Arts (BFA Graphic Design)',
      photo: '/images/faculty_amit_kumar.jpg',
      specialization: ['Adobe Photoshop', 'CorelDraw Vector', 'Illustrator', 'Social Media Branding'],
      coursesTaught: ['Creative & Design Skills', 'Graphic Design & Editing'],
      rating: 4.9,
      studentsMentored: '1200+',
      bio: 'Amit Kumar combines artistic design principles with modern digital tools. He guides creative students in building professional design portfolios for agency careers and freelancing.',
    },
    {
      id: 5,
      name: 'Kavita Singh',
      designation: 'Senior Computer Skills Instructor',
      category: 'Office Automation',
      experience: '6+ Years Experience',
      qualification: 'BCA, Diploma in Office Automation',
      photo: '/images/faculty_kavita_singh.jpg',
      specialization: ['MS Office 2026', 'Touch Typing (Eng & Hin)', 'Internet Security', 'Desktop Management'],
      coursesTaught: ['Computer & Digital Skills (DCA)', 'Office Productivity'],
      rating: 4.8,
      studentsMentored: '2000+',
      bio: 'Kavita Singh focuses on computer literacy and touch typing speed. She ensures that beginners build fast typing skills and office software mastery required for daily employment.',
    },
  ];

  const filteredFaculty = activeCategory === 'All'
    ? facultyMembers
    : facultyMembers.filter((f) => f.category === activeCategory);

  return (
    <div className="space-y-16 pb-20 font-sans bg-[#FBFBF9]">
      
      {/* 1. PAGE HERO HEADER */}
      <section className="bg-[#050B18] text-white py-16 lg:py-24 relative overflow-hidden border-b border-[#C5A059]/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-96 bg-[#C5A059]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">
              EXPERT MENTORS & INDUSTRY TRAINERS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white">
            Meet Our <span className="text-[#C5A059]">Expert Faculty</span>
          </h1>

          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Dedicated educators, certified software engineers, and experienced financial accountants guiding your practical learning journey at SKIE Academy.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#050B18] text-[#C5A059] shadow-lg border border-[#C5A059] scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-[#C5A059]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. FACULTY PROFILE CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-white border-2 border-slate-200 hover:border-[#C5A059] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#C5A059]/20 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group relative"
            >
              {/* Top Image Banner */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-[#050B18]/20 to-transparent opacity-90" />

                {/* Experience Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#050B18]/90 text-[#C5A059] border border-[#C5A059]/50 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                  {member.experience}
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-3 left-4 flex items-center space-x-1 bg-[#C5A059] text-[#050B18] px-2.5 py-1 rounded-md text-[11px] font-extrabold shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{member.rating}</span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#050B18] group-hover:text-[#C5A059] transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    {member.designation}
                  </p>

                  <div className="flex items-center space-x-1.5 text-xs text-slate-600 font-medium">
                    <GraduationCap className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                    <span>{member.qualification}</span>
                  </div>
                </div>

                {/* Specialization Tags */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                    Key Specializations:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialization.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#050B18]/5 text-[#050B18] border border-[#050B18]/15 rounded-md text-[10px] font-bold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Courses Taught */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                    Courses Taught:
                  </p>
                  <div className="space-y-1">
                    {member.coursesTaught.map((course, i) => (
                      <div key={i} className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Button */}
                <div className="pt-3">
                  <button
                    onClick={() => setSelectedFacultyModal(member)}
                    className="w-full py-3 bg-[#050B18] hover:bg-[#C5A059] text-white hover:text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:scale-[1.02]"
                  >
                    <span>VIEW FULL PROFILE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. FACULTY CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#050B18] text-white border-2 border-[#C5A059] rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/20 border border-[#C5A059] rounded-full text-xs font-bold text-[#C5A059] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>FREE 1-ON-1 FACULTY COUNSELING</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Unsure Which Course Fits Your Career Goal?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Book a free personal counseling session with our senior faculty instructors to choose the right diploma program.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-105 flex items-center space-x-2"
            >
              <span>SCHEDULE FACULTY COUNSELING</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FACULTY DETAIL MODAL SCREEN */}
      {selectedFacultyModal && (
        <div
          onClick={() => setSelectedFacultyModal(null)}
          className="fixed inset-0 z-50 bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-2 border-[#C5A059] max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col relative animate-scale-up"
          >
            {/* Modal Header */}
            <div className="bg-[#050B18] text-white p-6 border-b border-[#C5A059]/40 relative flex items-center space-x-5">
              <button
                onClick={() => setSelectedFacultyModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#050B18] font-bold flex items-center justify-center transition-colors shadow-md z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedFacultyModal.photo}
                alt={selectedFacultyModal.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#C5A059] shadow-lg flex-shrink-0"
              />

              <div className="space-y-1 pr-8">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#C5A059] text-[#050B18]">
                  {selectedFacultyModal.experience}
                </span>

                <h2 className="text-2xl font-serif font-bold text-white">
                  {selectedFacultyModal.name}
                </h2>

                <p className="text-xs text-[#C5A059] font-bold uppercase">
                  {selectedFacultyModal.designation}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
              
              <div className="p-4 bg-[#F8F8F5] border border-slate-200 rounded-xl space-y-2">
                <h4 className="text-xs font-serif font-bold text-[#050B18] uppercase tracking-wider">
                  Biography & Mentorship Philosophy
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedFacultyModal.bio}
                </p>
              </div>

              {/* Credentials & Metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border rounded-xl space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Qualification</span>
                  <span className="font-bold text-[#050B18]">{selectedFacultyModal.qualification}</span>
                </div>
                <div className="p-3 bg-slate-50 border rounded-xl space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Students Mentored</span>
                  <span className="font-bold text-[#C5A059]">{selectedFacultyModal.studentsMentored}</span>
                </div>
              </div>

              {/* Specializations List */}
              <div className="space-y-2">
                <h4 className="text-xs font-serif font-bold text-[#050B18] uppercase tracking-wider">
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFacultyModal.specialization.map((spec: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-[#050B18] text-[#C5A059] rounded-lg text-xs font-bold border border-[#C5A059]/40">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Courses Taught */}
              <div className="space-y-2">
                <h4 className="text-xs font-serif font-bold text-[#050B18] uppercase tracking-wider">
                  Assigned Courses
                </h4>
                <div className="space-y-1.5">
                  {selectedFacultyModal.coursesTaught.map((c: string, idx: number) => (
                    <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center space-x-2 text-xs font-bold text-[#050B18]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="bg-[#F8F8F5] p-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-[#C5A059] flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>CERTIFIED FACULTY INSTRUCTOR</span>
              </span>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setSelectedFacultyModal(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                >
                  CLOSE
                </button>
                <a
                  href="tel:+918882362470"
                  className="px-5 py-2 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] text-xs font-bold rounded-xl transition-colors shadow-md flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>BOOK COUNSELING</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
