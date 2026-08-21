'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Phone, Sparkles, Flame } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'COURSES', href: '/courses' },
    { name: 'OUR FACULTY', href: '/faculty' },
    { name: 'ACHIEVEMENTS', href: '/results' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const marqueeText = "🔥 ADMISSIONS OPEN FOR 2026-2027 BATCHES • ISO 9001:2015 & GOVT. REGISTERED INSTITUTE • 100% DAILY PRACTICAL COMPUTER LABS • CALL ADMISSIONS: +91 8882362470 • SPECIAL SCHOLARSHIPS AVAILABLE • ";

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR WITH RICH METALLIC GOLD RIBBON & MOVING TICKER */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#B38728] via-[#FDF3A9] to-[#AA771C] text-[#050B18] text-[11px] py-1.5 border-b border-[#D4AF37] shadow-lg overflow-hidden font-sans transition-all duration-300 ${scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          
          {/* Static Pill Badge Left */}
          <div className="flex items-center space-x-1.5 bg-[#050B18] text-[#C5A059] px-3 py-0.5 font-black uppercase text-[10px] tracking-wider flex-shrink-0 z-10 rounded-full shadow-md border border-[#C5A059]/50">
            <Flame className="w-3.5 h-3.5 text-[#C5A059] animate-pulse fill-current" />
            <span>ADMISSIONS 2026-2027</span>
          </div>

          {/* Circulating Motion Ticker Center (Dark Navy Bold Text on Gold Ribbon) */}
          <div className="overflow-hidden whitespace-nowrap flex-1 mx-4 relative">
            <div className="animate-marquee inline-flex space-x-8 text-[#050B18] font-extrabold text-[11px] tracking-wider uppercase">
              <span>{marqueeText}</span>
              <span>{marqueeText}</span>
            </div>
          </div>

          {/* Right Helpline Pill Badge */}
          <div className="hidden md:flex items-center space-x-2 bg-[#050B18] text-white px-3 py-0.5 rounded-full flex-shrink-0 z-10 border border-[#C5A059]/50 shadow-md">
            <a href="tel:+918882362470" className="flex items-center space-x-1.5 hover:text-[#C5A059] transition-colors">
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span className="font-bold text-[10px] tracking-wider text-[#C5A059]">+91 8882362470</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR - All Navigation Spelling in CAPITAL letters */}
      <header
        className={`z-50 transition-all duration-300 font-sans ${
          scrolled
            ? 'fixed top-3 left-4 right-4 max-w-6xl mx-auto bg-[#050B18]/95 text-white border-2 border-[#C5A059] ring-1 ring-[#C5A059]/40 rounded-full shadow-2xl shadow-[#C5A059]/15 backdrop-blur-2xl py-2 px-5 sm:px-7'
            : 'fixed top-[31px] left-0 right-0 bg-white text-slate-900 border-b border-slate-200 py-3 px-4 sm:px-8 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-serif font-black text-lg shadow-sm transition-all ${
              scrolled ? 'bg-[#C5A059] text-[#050B18] ring-1 ring-[#C5A059]' : 'bg-[#050B18] text-[#C5A059] border border-[#050B18]'
            }`}>
              S
            </div>
            <div>
              <span className={`text-lg sm:text-xl font-serif font-black tracking-tight transition-colors block leading-tight ${
                scrolled ? 'text-white group-hover:text-[#C5A059]' : 'text-[#050B18] group-hover:text-[#C5A059]'
              }`}>
                SKIE
              </span>
              <span className={`text-[8px] sm:text-[9px] font-sans tracking-widest uppercase block font-semibold ${
                scrolled ? 'text-slate-300' : 'text-slate-600'
              }`}>
                SHRI KRISHAN INSTITUTE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - ALL CAPS / CAPITAL LETTERS */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold tracking-wider uppercase transition-colors py-1 ${
                    scrolled
                      ? isActive ? 'text-[#C5A059] border-b border-[#C5A059]' : 'text-slate-200 hover:text-[#C5A059]'
                      : isActive ? 'text-[#050B18] border-b-2 border-[#C5A059]' : 'text-slate-700 hover:text-[#050B18]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={`px-5 py-2.5 bg-[#C5A059] hover:bg-[#b59049] text-[#050B18] font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors shadow-sm ${
                scrolled ? 'rounded-full px-6 shadow-md shadow-[#C5A059]/30' : 'rounded-none'
              }`}
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              href="/contact"
              className="px-3 py-1.5 bg-[#C5A059] text-[#050B18] font-bold text-xs uppercase flex items-center space-x-1 rounded-full"
            >
              <span>ENQUIRE</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${scrolled ? 'text-white' : 'text-[#050B18]'}`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu - ALL CAPS */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 bg-[#050B18] text-white border border-[#C5A059]/40 shadow-2xl rounded-2xl p-6 space-y-3 font-sans">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-[#C5A059] py-1.5 border-b border-slate-800"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 bg-[#C5A059] text-[#050B18] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 rounded-full"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
