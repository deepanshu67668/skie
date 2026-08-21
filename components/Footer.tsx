'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050B18] text-slate-300 font-sans relative overflow-hidden border-t border-slate-800">
      
      {/* Top Gold Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      {/* Subtle Background Glow Spotlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C5A059]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 relative z-10 space-y-12">
        
        {/* MAIN 5-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
          
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-[#C5A059] text-[#050B18] flex items-center justify-center font-serif font-black text-xl shadow-md">
                S
              </div>
              <div>
                <span className="text-xl font-serif font-black text-white tracking-tight group-hover:text-[#C5A059] transition-colors block leading-tight">
                  SKIE <span className="font-sans font-normal text-xs text-[#C5A059]">ACADEMY</span>
                </span>
                <span className="text-[9px] text-slate-400 font-sans tracking-widest uppercase block font-semibold">
                  SHRI KRISHAN INSTITUTE
                </span>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed">
              Shri Krishan Institute of Education (SKIE Academy) is an ISO 9001:2015 certified training institute empowering students through practical computer education.
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-400 pt-1">
              <div className="flex items-center space-x-1.5 text-[#C5A059] font-semibold">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Regd. No. 3123/IV (Govt. NCT Delhi)</span>
              </div>
              <p>Trade Marks Regd. No. 3214249</p>
              <p>Dept. of Labor Regd. No. 201006450</p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/10 flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/10 flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/10 flex items-center justify-center transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/10 flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-[#C5A059] pb-1 border-b border-slate-800">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/" className="hover:text-[#C5A059] transition-colors flex items-center space-x-1.5"><ArrowRight className="w-3 h-3 text-[#C5A059]" /><span>Home Page</span></Link></li>
              <li><Link href="/about" className="hover:text-[#C5A059] transition-colors flex items-center space-x-1.5"><ArrowRight className="w-3 h-3 text-[#C5A059]" /><span>About SKIE Academy</span></Link></li>
              <li><Link href="/courses" className="hover:text-[#C5A059] transition-colors flex items-center space-x-1.5"><ArrowRight className="w-3 h-3 text-[#C5A059]" /><span>Courses & Diplomas</span></Link></li>
              <li><Link href="/results" className="hover:text-[#C5A059] transition-colors flex items-center space-x-1.5"><ArrowRight className="w-3 h-3 text-[#C5A059]" /><span>Student Results Portal</span></Link></li>
              <li><Link href="/gallery" className="hover:text-[#C5A059] transition-colors flex items-center space-x-1.5"><ArrowRight className="w-3 h-3 text-[#C5A059]" /><span>Campus Photo Gallery</span></Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors flex items-center space-x-1.5"><ArrowRight className="w-3 h-3 text-[#C5A059]" /><span>Contact & Directions</span></Link></li>
            </ul>
          </div>

          {/* Column 3: Featured Courses */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-[#C5A059] pb-1 border-b border-slate-800">
              Featured Programs
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/courses" className="hover:text-[#C5A059] transition-colors">ADCA Master Diploma</Link></li>
              <li><Link href="/courses" className="hover:text-[#C5A059] transition-colors">DCA Computer Applications</Link></li>
              <li><Link href="/courses" className="hover:text-[#C5A059] transition-colors">Tally Prime Gold with GST</Link></li>
              <li><Link href="/courses" className="hover:text-[#C5A059] transition-colors">Python & Web Development</Link></li>
              <li><Link href="/courses" className="hover:text-[#C5A059] transition-colors">Graphic Design & Photoshop</Link></li>
              <li><Link href="/courses" className="hover:text-[#C5A059] transition-colors">Professional IT Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Student Verification & Portal */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-[#C5A059] pb-1 border-b border-slate-800">
              Student Verification
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/results" className="hover:text-[#C5A059] transition-colors">Check Result by Roll No</Link></li>
              <li><Link href="/results" className="hover:text-[#C5A059] transition-colors">Check Result by Phone No</Link></li>
              <li><Link href="/certifications" className="hover:text-[#C5A059] transition-colors">ISO Certificate Verification</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Enquiry & Admission</Link></li>
              <li><Link href="/admin" className="hover:text-[#C5A059] transition-colors">Staff Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* Column 5: Campus Address & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-[#C5A059] pb-1 border-b border-slate-800">
              Visit Campus
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed text-slate-400">
                  Ghoda Gate, Near Laxmi Sweets, Pavi Sadakpur, Loni, Ghaziabad, UP - 201102
                </p>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href="tel:+918882362470" className="hover:text-[#C5A059] transition-colors font-bold text-white">
                  +91 8882362470
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href="mailto:skieacademyofficial@gmail.com" className="hover:text-[#C5A059] transition-colors truncate text-slate-400">
                  skieacademyofficial@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Mon - Sat : 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Shri Krishan Institute of Education (SKIE Academy)</span>. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-[#C5A059] transition-colors">Terms & Conditions</Link>
            <span className="text-[#C5A059] font-bold">ISO 9001:2015 Institute</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
