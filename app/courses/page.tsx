'use client';

import { useState, useEffect } from 'react';
import initialData from '@/data/initialData.json';
import { Course } from '@/lib/db';
import CourseCard from '@/components/CourseCard';
import { Search, BookOpen } from 'lucide-react';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>(initialData.courses as Course[]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        if (data.courses) setCourses(data.courses);
      })
      .catch(() => {});
  }, []);

  const categories = [
    'All',
    'Diploma Courses',
    'Professional Courses',
    'Programming & Development',
    'Female Special Courses',
    'Teacher Training',
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCat = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.toolsCovered.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pb-20 space-y-12">
      
      {/* Page Hero */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Professional Certification Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Explore All <span className="cyan-gradient-text">SKIE Courses</span>
          </h1>
          <p className="mt-3 text-slate-300 text-base max-w-2xl mx-auto">
            Choose from comprehensive 1-year master diplomas, 6-month certifications, accounting modules, and specialized tech tracks.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search course name, skill or software..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-bright focus:border-brand-bright outline-none"
              />
            </div>

            {/* Total Results Count */}
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Showing {filteredCourses.length} of {courses.length} Courses
            </p>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-navy text-brand-cyan shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Course Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-xl font-bold text-slate-800">No courses match your search</h3>
              <p className="text-sm text-slate-500">Try searching for different keywords like ADCA, Tally, Excel, or Web Dev.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
