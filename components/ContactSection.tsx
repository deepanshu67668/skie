import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-white text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Campus Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                VISIT SKIE
              </p>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050B18] block">Campus Address</span>
                    <span>Ghoda Gate, Near Laxmi Sweets, Pavi Sadakpur, Loni, Ghaziabad, 201102</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050B18] block">Helpline Phone</span>
                    <a href="tel:+918882362470" className="hover:text-[#C5A059] transition-colors">+91 8882362470</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050B18] block">Official Email</span>
                    <a href="mailto:skieacademyofficial@gmail.com" className="hover:text-[#C5A059] transition-colors">skieacademyofficial@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#050B18] block">Office Hours</span>
                    <span>Mon - Sat : 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <a
                href="https://maps.google.com/?q=Loni+Ghaziabad+SKIE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#050B18] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#050B18] transition-colors"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed (7 Cols) */}
          <div className="lg:col-span-7 h-72 sm:h-96 relative border border-slate-300 overflow-hidden">
            <iframe
              title="SKIE Academy Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.423719826372!2d77.2845618763072!3d28.736767978716335!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbb15b6d51c9%3A0x7d6a5d4d5e2c5b1a!2sPavi%20Sadakpur%2C%20Loni%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201102!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
