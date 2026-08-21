import { getDB } from '@/lib/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { Clock, Award, CheckCircle2, BookOpen, Briefcase, Wrench, ShieldCheck, ChevronRight, ArrowRight, UserCheck } from 'lucide-react';

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const db = getDB();
  return db.courses.map((course) => ({
    id: course.id,
  }));
}

export function generateMetadata({ params }: CourseDetailPageProps) {
  const db = getDB();
  const course = db.courses.find((c) => c.id === params.id);
  if (!course) return { title: 'Course Not Found | SKIE Academy' };
  return {
    title: `${course.name} | SKIE Academy`,
    description: course.shortDesc,
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const db = getDB();
  const course = db.courses.find((c) => c.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="pb-20 space-y-12">
      
      {/* Course Detail Hero Header */}
      <section className="bg-brand-navy text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-brand-cyan">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/courses" className="hover:text-brand-cyan">Courses</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-cyan font-semibold truncate">{course.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                {course.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {course.name}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {course.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-brand-cyan" />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <UserCheck className="w-4 h-4 text-brand-cyan" />
                  <span>Eligibility: {course.eligibility}</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>ISO 9001:2015 Certificate</span>
                </div>
              </div>
            </div>

            {/* Quick Enrollment Card */}
            <div className="lg:col-span-4 dark-glass-card p-6 rounded-2xl border border-white/20 shadow-2xl text-center space-y-4">
              <div className="text-slate-400 text-xs uppercase font-bold tracking-wider">Special Fee Structure</div>
              <div className="text-3xl font-black text-brand-cyan">{course.fees}</div>
              <p className="text-xs text-slate-300">Flexible monthly installment options available for students.</p>
              <a
                href="#contact-form"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-bright to-cyan-500 text-white text-sm font-bold shadow-lg shadow-brand-bright/30 block hover:scale-[1.02] transition-transform"
              >
                Enroll / Enquire Now
              </a>
              <a
                href="tel:+918882362470"
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 text-white text-xs font-semibold block hover:bg-white/15"
              >
                Call Counselor: +91 8882362470
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Main Course Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="glass-card p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-brand-bright" />
                <span>Course Overview</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {course.fullDesc}
              </p>
            </div>

            {/* Curriculum Breakdown */}
            <div className="glass-card p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
                <Award className="w-6 h-6 text-brand-bright" />
                <span>What You Will Learn (Curriculum)</span>
              </h2>
              <div className="space-y-3">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software & Tools Covered */}
            <div className="glass-card p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
                <Wrench className="w-6 h-6 text-brand-bright" />
                <span>Tools & Software Covered</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.toolsCovered.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-xl bg-brand-navy text-brand-cyan font-bold text-xs shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="glass-card p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
                <Briefcase className="w-6 h-6 text-brand-bright" />
                <span>Career Opportunities</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.careerOps.map((job) => (
                  <div key={job} className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-100 font-semibold text-slate-800 text-xs">
                    <ArrowRight className="w-4 h-4 text-brand-bright" />
                    <span>{job}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Sticky Highlights */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-card p-6 rounded-2xl border border-slate-200 shadow-md space-y-4 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-3">
                Course Highlights
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-center justify-between py-1 border-b">
                  <span className="font-semibold text-slate-500">Duration</span>
                  <span className="font-bold text-slate-900">{course.duration}</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b">
                  <span className="font-semibold text-slate-500">Skill Level</span>
                  <span className="font-bold text-slate-900">{course.skillLevel}</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b">
                  <span className="font-semibold text-slate-500">Certificate</span>
                  <span className="font-bold text-emerald-600">ISO 9001:2015</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b">
                  <span className="font-semibold text-slate-500">Placement Support</span>
                  <span className="font-bold text-brand-bright">Available</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b">
                  <span className="font-semibold text-slate-500">Practical Labs</span>
                  <span className="font-bold text-slate-900">100% Daily Lab</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="#contact-form"
                  className="w-full py-3 rounded-xl bg-brand-navy text-white text-xs font-bold text-center block shadow hover:bg-brand-bright transition-colors"
                >
                  Request Fee Discount Details
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Shared Callback Form */}
      <ContactSection />

    </div>
  );
}
