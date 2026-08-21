import { ArrowRight } from 'lucide-react';

export default function LearningExperience() {
  const steps = ['LEARN', 'PRACTICE', 'BUILD', 'CERTIFY', 'GROW'];

  return (
    <section className="relative bg-[#050B18] text-white py-20 sm:py-24 overflow-hidden border-b border-slate-800 font-sans">
      
      {/* Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://skieofficial.com/wp-content/uploads/2026/01/front-page-1024x683.webp"
          alt="SKIE Lab Practice"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-[#050B18]/85 to-[#050B18]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
            Learning is more than a classroom.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal">
            At SKIE, students learn through practice, guidance and real-world application.
          </p>
        </div>

        {/* Pathway with Arrows */}
        <div className="pt-6 border-t border-slate-800 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C5A059]">
            {steps.map((step, idx) => (
              <div key={step} className="flex items-center space-x-4 sm:space-x-8">
                <span>{step}</span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
