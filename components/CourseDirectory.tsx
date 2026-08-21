'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Clock, CheckCircle2, ShieldCheck, Eye } from 'lucide-react';
import CourseDetailModal from '@/components/CourseDetailModal';

export default function CourseDirectory() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCourseModal, setSelectedCourseModal] = useState<any | null>(null);

  const categories = ['All', 'Computer Skills', 'Accounting', 'Programming', 'Design', 'IT Diploma'];

  const courses = [
    {
      id: 1,
      category: 'Computer Skills',
      title: 'Computer & Digital Skills',
      subtitle: 'Diploma in Computer Applications (DCA / ADCA)',
      desc: "Build essential computer operations, MS Office, typing, and digital literacy for today's workplace.",
      photo: '/images/course_computer.jpg',
      badge: 'POPULAR',
      ovalTag: 'DIPLOMA PROGRAM',
      duration: '3 - 6 Months',
      highlights: ['100% Daily Lab Practice', 'MS Office & Internet', 'ISO Certificate'],
      modules: [
        'Module 1: Computer Fundamentals & Operating System',
        'Module 2: MS Word, MS Excel & PowerPoint 2026',
        'Module 3: Fast Touch Typing (English & Hindi)',
        'Module 4: Internet, Email & Digital Security',
      ],
      careerOps: ['Computer Operator', 'Data Entry Executive', 'Office Administrator', 'Helpdesk Assistant'],
      href: '/courses',
    },
    {
      id: 2,
      category: 'Accounting',
      title: 'Accounting & Office Applications',
      subtitle: 'Tally Prime, GST & Financial Accounting',
      desc: 'Master practical business accounting, GST return filing, Tally Prime Gold, and Excel analytics.',
      photo: '/images/course_accounting.jpg',
      badge: 'JOB READY',
      ovalTag: 'ACCOUNTING CERTIFICATION',
      duration: '3 - 6 Months',
      highlights: ['Tally Prime with GST', 'Excel VLOOKUP & Pivot', 'Taxation Basics'],
      modules: [
        'Module 1: Double Entry Bookkeeping & Accounting Principles',
        'Module 2: Tally Prime Gold Edition & Inventory Management',
        'Module 3: GST Calculation, E-way Bills & Tax Return Filing',
        'Module 4: Advanced MS Excel (VLOOKUP, Pivot Tables, Macros)',
      ],
      careerOps: ['Junior Accountant', 'Tally Operator', 'Billing Executive', 'GST Tax Assistant'],
      href: '/courses',
    },
    {
      id: 3,
      category: 'Programming',
      title: 'Programming & Web Development',
      subtitle: 'Python, HTML/CSS & Full Stack Basics',
      desc: 'Learn modern programming logic, Python data structures, HTML5, CSS3, and JavaScript web development.',
      photo: '/images/course_programming.jpg',
      badge: 'HIGH DEMAND',
      ovalTag: 'PROGRAMMING TRACK',
      duration: '6 - 12 Months',
      highlights: ['Python & Web Code', 'Real-world Projects', 'Coding Certificate'],
      modules: [
        'Module 1: Logic Building & Python Programming Basics',
        'Module 2: HTML5, CSS3 Responsive Web Layouts',
        'Module 3: JavaScript Programming & DOM Manipulation',
        'Module 4: Git, GitHub & Web Deployment Projects',
      ],
      careerOps: ['Web Developer', 'Python Programmer', 'Frontend Designer', 'Junior Software Developer'],
      href: '/courses',
    },
    {
      id: 4,
      category: 'Design',
      title: 'Creative & Design Skills',
      subtitle: 'Graphic Design, Photoshop & Editing',
      desc: 'Explore graphic design, Photoshop banner creation, CorelDraw vector design, and digital media editing.',
      photo: '/images/course_graphic.jpg',
      badge: 'CREATIVE',
      ovalTag: 'GRAPHIC & EDITING',
      duration: '3 - 6 Months',
      highlights: ['Adobe Photoshop & Illustrator', 'Portfolio Creation', 'Design Projects'],
      modules: [
        'Module 1: Color Theory, Typography & Composition',
        'Module 2: Adobe Photoshop Photo Editing & Banners',
        'Module 3: CorelDraw Vector Graphics & Logo Design',
        'Module 4: Social Media Branding & Portfolio Design',
      ],
      careerOps: ['Graphic Designer', 'UI/UX Trainee', 'Social Media Editor', 'DTP Operator'],
      href: '/courses',
    },
    {
      id: 5,
      category: 'IT Diploma',
      title: 'Professional IT Training',
      subtitle: 'Hardware, Networking & IT Support',
      desc: 'Comprehensive computer hardware troubleshooting, network configuration, and desktop support training.',
      photo: '/images/course_it_training.jpg',
      badge: 'ADVANCED',
      ovalTag: 'IT HARDWARE & NETWORKING',
      duration: '6 - 12 Months',
      highlights: ['Hardware & Networking', 'System Maintenance', 'Job Placement'],
      modules: [
        'Module 1: PC Hardware Assembly & Component Diagnostics',
        'Module 2: Windows Server & OS Installation',
        'Module 3: LAN/WAN Networking & Router Configuration',
        'Module 4: Cybersecurity Basics & System Maintenance',
      ],
      careerOps: ['Hardware Engineer', 'Network Administrator', 'IT Support Technician', 'Desktop Specialist'],
      href: '/courses',
    },
  ];

  const filteredCourses = activeCategory === 'All'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="py-20 sm:py-24 bg-[#F8F8F5] text-slate-900 border-b border-slate-200 font-sans relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                CAREER-ORIENTED PROGRAMS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#050B18] tracking-tight">
              Explore Our Professional Courses
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Industry-aligned diploma and certification programs designed to develop practical computer skills and prepare students for career growth.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#050B18] hover:bg-[#C5A059] text-white hover:text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:scale-105"
          >
            <span>VIEW ALL COURSES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#050B18] text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-[#C5A059]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 5 Clean Light Cards Grid (No Circular Symbols, Gold Accent Border) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-2 border-[#C5A059]/40 hover:border-[#C5A059] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#C5A059]/25 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group relative"
            >
              {/* Top Image Banner */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={course.photo}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Top Left Oval Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#050B18]/90 text-white border border-[#C5A059]/60 backdrop-blur-md rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  {course.ovalTag}
                </div>

                {/* Top Right Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#C5A059] text-[#050B18] font-black text-[10px] uppercase tracking-wider rounded-lg shadow-md">
                  {course.badge}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[11px] text-[#C5A059] font-bold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#050B18] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-[#C5A059] font-bold">
                    {course.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {course.desc}
                  </p>
                </div>

                {/* Course Highlights Checklist */}
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {course.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Full-Width Gold Action Button */}
                <div className="pt-3">
                  <button
                    onClick={() => setSelectedCourseModal(course)}
                    className="w-full py-3 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-md group-hover:scale-[1.02]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>EXPLORE COURSE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Flagship Program Spotlight Banner */}
        <div className="bg-white border-2 border-[#C5A059] rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          
          <div className="space-y-3 max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-full text-xs font-bold text-[#C5A059] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>FLAGSHIP CAREER PROGRAM</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#050B18]">
              ADCA - Advanced Diploma in Computer Applications
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              1-Year Master Diploma covering MS Office 2026, Financial Accounting (Tally Prime Gold with GST), Web Designing Basics, Graphic Design (Photoshop & CorelDraw), and Daily Computer Lab Practice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <button
              onClick={() => setSelectedCourseModal(courses[0])}
              className="px-8 py-4 bg-[#050B18] hover:bg-[#C5A059] text-white hover:text-[#050B18] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105 flex items-center space-x-2"
            >
              <span>ENROLL NOW FOR 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Course Detail Modal Popup */}
      {selectedCourseModal && (
        <CourseDetailModal
          course={selectedCourseModal}
          onClose={() => setSelectedCourseModal(null)}
        />
      )}

    </section>
  );
}
