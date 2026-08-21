'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Course } from '@/lib/db';
import CourseCard from './CourseCard';
import { ArrowRight, BookOpen } from 'lucide-react';

interface PopularCoursesProps {
  courses: Course[];
}

export default function PopularCourses({ courses }: PopularCoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Diploma Courses',
    'Professional Courses',
    'Programming & Development',
    'Female Special Courses',
    'Teacher Training',
  ];

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-brand-bright font-bold text-xs uppercase tracking-widest mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Career-Oriented Programs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Our <span className="text-brand-bright">Popular Courses</span>
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              From computer basics to advanced diploma qualifications, choose from industry-relevant certifications designed for job success.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 text-brand-bright font-bold text-sm hover:text-brand-navy transition-colors group"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-navy text-brand-cyan shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-bold shadow-lg hover:bg-brand-bright transition-all"
          >
            <span>Explore All 20+ SKIE Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
