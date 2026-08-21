'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Cog, BookOpen, Scroll, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: 'Admissions',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.areaOfInterest,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          areaOfInterest: 'Admissions',
          message: '',
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FBFBF9] text-slate-900 pb-20 font-sans">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-[#050B18] text-white py-20 sm:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://skieofficial.com/wp-content/uploads/2026/01/front-page-1024x683.webp"
            alt="SKIE Academy Campus"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#050B18]/80 to-[#050B18]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white uppercase">
            GET IN TOUCH WITH SKIE ACADEMY
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Have questions? We're here to help you build your future.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid (Direct Contact & Send Us A Message) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: DIRECT CONTACT (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl font-sans font-black text-[#050B18] uppercase tracking-wider">
              DIRECT CONTACT
            </h2>

            <div className="space-y-4">
              
              {/* Card 1: ADMISSIONS OFFICE */}
              <div className="bg-white p-5 border border-slate-200 shadow-sm flex items-start space-x-4">
                <div className="w-11 h-11 bg-[#C5A059] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h3 className="font-sans font-bold text-sm text-[#050B18] uppercase tracking-wider">
                    ADMISSIONS OFFICE
                  </h3>
                  <div className="flex items-center space-x-1.5 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Email: skieacademyofficial@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Phone: +91 8882362470</span>
                  </div>
                </div>
              </div>

              {/* Card 2: GENERAL INQUIRIES */}
              <div className="bg-white p-5 border border-slate-200 shadow-sm flex items-start space-x-4">
                <div className="w-11 h-11 bg-[#C5A059] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h3 className="font-sans font-bold text-sm text-[#050B18] uppercase tracking-wider">
                    GENERAL INQUIRIES
                  </h3>
                  <div className="flex items-center space-x-1.5 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Email: skieofficial@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Phone: +91 8882362470</span>
                  </div>
                </div>
              </div>

              {/* Card 3: VISIT US */}
              <div className="bg-white p-5 border border-slate-200 shadow-sm flex items-start space-x-4">
                <div className="w-11 h-11 bg-[#C5A059] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h3 className="font-sans font-bold text-sm text-[#050B18] uppercase tracking-wider">
                    VISIT US
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Ghoda Gate, Near Laxmi Sweets, Pavi Sadakpur, Loni, Ghaziabad, UP 201102
                  </p>
                </div>
              </div>

              {/* Card 4: MAP & DRIVING DIRECTIONS CARD */}
              <div className="bg-white p-5 border border-slate-200 shadow-sm space-y-3">
                <div className="relative h-44 bg-slate-100 border border-slate-200 overflow-hidden">
                  <iframe
                    title="SKIE Map Thumbnail"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.423719826372!2d77.2845618763072!3d28.736767978716335!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbb15b6d51c9%3A0x7d6a5d4d5e2c5b1a!2sPavi%20Sadakpur%2C%20Loni%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201102!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 bg-[#050B18] text-[#C5A059] text-[10px] font-bold uppercase tracking-wider shadow-md">
                    YOU ARE HERE
                  </div>
                </div>

                <div className="text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-[#050B18] uppercase text-[11px] block">Driving directions:</span>
                  <p>Ghoda Gate, Near Laxmi Sweets, Pavi Sadakpur, Loni, Ghaziabad, UP 201102</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: SEND US A MESSAGE (7 Cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Decorative Icons on Right Margin */}
            <div className="absolute -right-4 top-4 hidden xl:flex flex-col space-y-12 text-[#C5A059] opacity-70 pointer-events-none">
              <Cog className="w-10 h-10 animate-spin-slow" />
              <BookOpen className="w-10 h-10" />
              <Scroll className="w-10 h-10" />
            </div>

            <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="space-y-1">
                <h2 className="text-xl font-sans font-black text-[#050B18] uppercase tracking-wider">
                  SEND US A MESSAGE
                </h2>
                <p className="text-xs text-slate-600">
                  We aim to respond to all inquiries within 24 business hours.
                </p>
              </div>

              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. Our admissions team will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="font-bold text-[#050B18] uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* 2-Column Row: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#050B18] uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#050B18] uppercase">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone Number"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                {/* Area of Interest Dropdown */}
                <div className="space-y-1">
                  <label className="font-bold text-[#050B18] uppercase">Area of Interest</label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#C5A059]"
                  >
                    <option value="Admissions">Admissions</option>
                    <option value="Academics">Academics</option>
                    <option value="Alumni">Alumni</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="font-bold text-[#050B18] uppercase">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 text-slate-900 outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* Gold Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#C5A059] hover:bg-[#b59049] text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-sm disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Message'}
                  </button>
                </div>

              </form>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
