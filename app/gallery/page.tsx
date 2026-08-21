'use client';

import { useState, useEffect } from 'react';
import initialData from '@/data/initialData.json';
import { GalleryItem } from '@/lib/db';
import { Maximize2 } from 'lucide-react';

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>(initialData.gallery as GalleryItem[]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        if (data.gallery) setGallery(data.gallery);
      })
      .catch(() => {});
  }, []);

  const categories = ['All', 'Classroom', 'Students', 'Events', 'Training', 'Certificates'];

  const filteredGallery =
    selectedCategory === 'All'
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  return (
    <div className="pb-20 space-y-12">
      
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Campus Life & Training Activities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            SKIE Academy <span className="cyan-gradient-text">Photo Gallery</span>
          </h1>
          <p className="mt-3 text-slate-300 text-base max-w-2xl mx-auto">
            Explore photos of our computer labs, classroom practical sessions, certificate ceremonies, and student events.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-navy text-brand-cyan shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md border border-slate-200 cursor-pointer bg-slate-900 h-64"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase text-brand-cyan">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center space-x-1 text-xs text-slate-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view full screen</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden border border-white/20 shadow-2xl relative animate-in fade-in zoom-in duration-200"
          >
            <div className="relative max-h-[75vh] w-full bg-black flex items-center justify-center">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white font-bold hover:bg-black"
              >
                ✕
              </button>
            </div>

            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-brand-cyan uppercase">{activeImage.category}</span>
                <h3 className="text-lg font-bold mt-0.5">{activeImage.title}</h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="px-5 py-2 rounded-xl bg-brand-bright text-white text-xs font-bold"
              >
                Close Lightbox
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
