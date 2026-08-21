'use client';

import { useState } from 'react';
import { Course } from '@/lib/db';
import { Clock, ArrowRight, Sparkles, Eye } from 'lucide-react';
import CourseDetailModal from '@/components/CourseDetailModal';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getOvalBadgeText = (c: Course) => {
    if (c.category) return c.category.toUpperCase();
    if (c.duration?.includes('Year') || c.duration?.includes('12')) return 'DIPLOMA PROGRAM';
    if (c.name.includes('Tally') || c.name.includes('Excel')) return 'ACCOUNTING SPECIALIST';
    if (c.name.includes('Web') || c.name.includes('Coding')) return 'PROGRAMMING TRACK';
    return 'CERTIFIED COURSE';
  };

  return (
    <>
      <div className="bg-white border-2 border-[#C5A059]/40 hover:border-[#C5A059] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#C5A059]/25 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between group">
        
        {/* Course Image & Top Badge Header */}
        <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/80 via-[#050B18]/20 to-transparent" />
          
          {/* Top Left Oval Category Badge */}
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#050B18]/90 text-white border border-[#C5A059]/60 backdrop-blur-md shadow-md">
            {getOvalBadgeText(course)}
          </span>

          {/* Top Right Badge */}
          {course.badge && (
            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-[#C5A059] text-[#050B18] shadow-md flex items-center space-x-1">
              <Sparkles className="w-3 h-3 fill-current" />
              <span>{course.badge}</span>
            </span>
          )}

          {/* Duration & Fees Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
            <div className="flex items-center space-x-1 font-bold bg-[#050B18]/80 px-2.5 py-1 rounded-md border border-white/20 backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{course.duration}</span>
            </div>
            <div className="font-extrabold bg-[#C5A059] text-[#050B18] px-2.5 py-1 rounded-md shadow-md">
              {course.fees}
            </div>
          </div>
        </div>

        {/* Course Details Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4 font-sans">
          <div className="space-y-2">
            <h3 className="text-lg font-serif font-bold text-[#050B18] group-hover:text-[#C5A059] transition-colors leading-snug line-clamp-2">
              {course.name}
            </h3>
            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {course.shortDesc}
            </p>
          </div>

          {/* Career Opportunities Tags */}
          <div className="space-y-2 pt-3 border-t border-slate-100">
            <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
              Career Roles:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {course.careerOps.slice(0, 3).map((job) => (
                <span
                  key={job}
                  className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-[#050B18] border border-slate-200"
                >
                  {job}
                </span>
              ))}
              {course.careerOps.length > 3 && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold text-[#C5A059]">
                  +{course.careerOps.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex items-center space-x-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#050B18] text-xs font-bold text-center transition-colors flex items-center justify-center space-x-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] text-xs font-bold text-center shadow-md hover:scale-[1.02] transition-all flex items-center justify-center space-x-1"
            >
              <span>Explore Course</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Detail Modal Screen */}
      {isModalOpen && (
        <CourseDetailModal
          course={course}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
