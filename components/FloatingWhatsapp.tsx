'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Phone, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const whatsappNumber = '918882362470';
  const message = 'Hello SKIE Academy! I want to enquire about courses and admissions for 2026-2027.';

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Popover Quick Chat Card */}
      {tooltipOpen && (
        <div className="mb-3 bg-white border-2 border-[#C5A059] rounded-2xl shadow-2xl max-w-xs w-72 overflow-hidden animate-scale-up text-slate-900 border-opacity-80">
          {/* Header */}
          <div className="bg-[#050B18] text-white p-4 border-b border-[#C5A059]/40 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">SKIE Admissions Desk</p>
                <p className="text-[10px] text-[#25D366] font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse inline-block" />
                  <span>Online • Ready to help</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setTooltipOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close chat window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Message */}
          <div className="p-4 bg-[#F8F8F5] space-y-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1 shadow-sm">
              <p className="font-bold text-[#050B18]">Namaste! 🙏</p>
              <p>Looking for course details or special batch fee discounts? Chat directly with our admissions counselor!</p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>START WHATSAPP CHAT</span>
            </a>

            <div className="pt-1 text-center">
              <a
                href="tel:+918882362470"
                className="text-[10px] font-bold text-slate-500 hover:text-[#050B18] flex items-center justify-center space-x-1"
              >
                <Phone className="w-3 h-3 text-[#C5A059]" />
                <span>Or Call Us Directly: +91 8882362470</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        
        {/* Pulsing Ripple Effect */}
        <span className="absolute -inset-1 bg-[#25D366] rounded-full opacity-40 group-hover:opacity-75 blur-sm animate-ping pointer-events-none" />

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
          1
        </span>

        {/* Floating Button */}
        <button
          onClick={() => setTooltipOpen(!tooltipOpen)}
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50 transform group-hover:scale-110 transition-all duration-300 border-2 border-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </button>

      </div>

    </div>
  );
}
