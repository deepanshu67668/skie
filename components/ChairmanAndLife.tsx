export default function ChairmanAndLife() {
  const campusPhotos = [
    'https://skieofficial.com/wp-content/uploads/2026/01/front-page-1024x683.webp',
    'https://skieofficial.com/wp-content/uploads/2026/01/front-page.webp',
    'https://skieofficial.com/wp-content/uploads/2026/01/front-page-1024x683.webp',
    'https://skieofficial.com/wp-content/uploads/2026/01/front-page.webp',
  ];

  return (
    <section className="py-20 bg-[#F8F8F5] text-slate-900 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: FROM THE CHAIRMAN (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A059]">
              FROM THE CHAIRMAN
            </p>

            <div className="flex items-start space-x-4">
              <img
                src="https://skieofficial.com/wp-content/uploads/2026/01/front-page.webp"
                alt="Sandeep Tyagi Chairman SKIE Academy"
                className="w-20 h-24 object-cover border border-slate-300 flex-shrink-0"
              />
              <div className="space-y-2">
                <p className="text-xs italic text-slate-700 leading-relaxed font-serif">
                  "Education becomes meaningful when knowledge can be transformed into confidence, capability and opportunity. At SKIE, we are committed to shaping a better tomorrow for our students."
                </p>
                <div>
                  <h4 className="text-xs font-bold font-serif text-[#050B18]">Sandeep Tyagi</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Chairman</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: LIFE AT SKIE (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A059]">
                LIFE AT SKIE
              </p>
              <h3 className="text-xl font-serif font-bold text-[#050B18] mt-0.5">
                A place to learn, practice, connect and grow.
              </h3>
            </div>

            {/* 4 Horizontal Grid Photos */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {campusPhotos.map((photo, i) => (
                <div key={i} className="h-36 bg-slate-200 overflow-hidden border border-slate-300">
                  <img src={photo} alt={`Campus Life ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
