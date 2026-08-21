'use client';

import { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeImageModal, setActiveImageModal] = useState<any | null>(null);

  const tabs = ['All', 'Campus', 'Classrooms', 'Events', 'Training', 'Activities', 'Achievements'];

  const galleryItems = [
    { id: 1, category: 'Campus', title: 'SKIE Main Building Facade', img: '/images/campus_facade.jpg' },
    { id: 2, category: 'Classrooms', title: 'Modern Practical Computer Lab', img: '/images/hero_student.jpg' },
    { id: 3, category: 'Training', title: 'Individual Hands-on Practice Session', img: '/images/course_computer.jpg' },
    { id: 4, category: 'Classrooms', title: 'Faculty Interactive Guidance', img: '/images/why_skie_lab.jpg' },
    { id: 5, category: 'Training', title: 'Advanced IT Networking Hardware Training', img: '/images/course_it_training.jpg' },
    { id: 6, category: 'Achievements', title: 'Batch Graduation Certificate Ceremony', img: '/images/course_accounting.jpg' },
    { id: 7, category: 'Activities', title: 'Student Team Project Collaboration', img: '/images/course_graphic.jpg' },
    { id: 8, category: 'Training', title: 'Programming & Web Development Workshop', img: '/images/course_programming.jpg' },
    { id: 9, category: 'Events', title: 'Annual Day Celebrations & Awards', img: '/images/why_skie_lab.jpg' },
    { id: 10, category: 'Classrooms', title: 'State-of-the-Art Computer Laboratories', img: '/images/course_computer.jpg' },
    { id: 11, category: 'Activities', title: 'Sports & Student Activity Meet', img: '/images/hero_student.jpg' },
    { id: 12, category: 'Achievements', title: 'Excellence Award Felicitation Ceremony', img: '/images/campus_facade.jpg' },
  ];

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 sm:py-24 bg-[#FBFBF9] text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-sans font-bold tracking-[0.25em] uppercase text-[#C5A059]">
            GALLERY
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#050B18]">
            Life at SKIE
          </h2>

          <div className="flex items-center justify-center space-x-2 text-[#C5A059]">
            <span className="w-8 h-[1px] bg-[#C5A059]/40" />
            <Sparkles className="w-4 h-4" />
            <span className="w-8 h-[1px] bg-[#C5A059]/40" />
          </div>

          <p className="text-slate-600 text-xs sm:text-sm">
            A glimpse of our campus, students, activities and celebrations.
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#C5A059] text-[#050B18] shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 12-Photo 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImageModal(item)}
              className="h-56 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative group cursor-pointer shadow-xs hover:shadow-2xl hover:border-[#C5A059] transition-all duration-500 transform hover:-translate-y-1"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <span className="px-2.5 py-1 bg-[#050B18]/80 text-[#C5A059] text-[9px] font-bold uppercase rounded-md border border-[#C5A059]/40">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-white">
                  <span className="text-xs font-serif font-bold drop-shadow-sm">{item.title}</span>
                  <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#050B18] flex items-center justify-center shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageModal && (
        <div
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 z-50 bg-[#050B18]/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-5 max-w-3xl w-full rounded-2xl border border-slate-300 space-y-4 shadow-2xl relative animate-fade-in font-sans"
          >
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-wider">{activeImageModal.category}</span>
                <h3 className="text-base font-serif font-bold text-[#050B18]">{activeImageModal.title}</h3>
              </div>
              <button onClick={() => setActiveImageModal(null)} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center">✕</button>
            </div>
            <div className="max-h-[65vh] overflow-hidden bg-slate-50 border rounded-xl flex items-center justify-center">
              <img src={activeImageModal.img} alt={activeImageModal.title} className="max-h-[60vh] w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
