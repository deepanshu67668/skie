'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const heroImages = [
    {
      url: '/images/hero_student.jpg',
      alt: 'SKIE Academy Student Learning in Computer Lab',
    },
    {
      url: '/images/campus_facade.jpg',
      alt: 'SKIE Academy Modern Campus Building Facade',
    },
    {
      url: '/images/course_computer.jpg',
      alt: 'Students Practicing Daily Computer Applications',
    },
    {
      url: '/images/course_it_training.jpg',
      alt: 'Expert IT Faculty Delivering Practical Training',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative bg-[#050B18] text-white min-h-[560px] lg:min-h-[600px] flex flex-col justify-between overflow-hidden pt-12">
      
      {/* Background Image Carousel with Smooth Fade */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image.url}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-65 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover object-right"
            />
          </div>
        ))}
        {/* Left-heavy dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#050B18]/90 to-transparent" />
      </div>

      {/* Hero Content - Hard Aligned to Left */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10 my-auto">
        <div className="max-w-xl lg:max-w-2xl text-left space-y-6 mr-auto ml-0">
          
          {/* Animated Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
            </span>
            <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#C5A059]">
              Shri Krishan Institute of Education
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.12]">
            Education That<br />
            Builds Skills for<br />
            the <span className="text-[#C5A059]">Real World.</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed max-w-xl">
            Practical computer and professional training designed to help students gain confidence, develop skills and build successful careers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 font-sans">
            <Link
              href="/courses"
              className="px-7 py-3.5 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-[#C5A059]/20"
            >
              <span>EXPLORE COURSES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://www.youtube.com/@skieofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/40 font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
            >
              <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current text-[#C5A059]" />
              </div>
              <span>WATCH VIDEO</span>
            </a>
          </div>

        </div>
      </div>

      {/* Carousel Controls (Bottom Right) */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 hidden sm:flex items-center space-x-3">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-9 h-9 rounded-full border border-white/30 bg-black/40 hover:bg-[#C5A059] hover:text-[#050B18] text-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-1.5">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-7 bg-[#C5A059]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-9 h-9 rounded-full border border-white/30 bg-black/40 hover:bg-[#C5A059] hover:text-[#050B18] text-white flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
