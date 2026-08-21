import { Quote } from 'lucide-react';

export default function ChairmanMessage({ chairman }: { chairman?: { name: string; title: string; message: string; image: string } }) {
  const data = chairman || {
    name: 'Sandeep Tyagi',
    title: 'Chairman, SKIE Academy',
    message: 'Education becomes truly meaningful when theoretical knowledge is converted into workplace confidence, individual capability, and practical career opportunities for our students.',
    image: 'https://skieofficial.com/wp-content/uploads/2026/01/front-page.webp',
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBF9] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Portrait */}
          <div className="lg:col-span-5">
            <div className="relative border border-slate-300 p-2 bg-white shadow-sm">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-[450px] object-cover"
              />
              <div className="p-3 bg-[#0B132B] text-white mt-2">
                <h4 className="text-lg font-serif font-bold text-brand-gold">{data.name}</h4>
                <p className="text-xs font-sans text-slate-300">{data.title}</p>
              </div>
            </div>
          </div>

          {/* Right Quotation Composition */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-brand-gold">
              From the Chairman
            </p>

            <blockquote className="text-2xl sm:text-4xl font-serif font-normal text-[#0B132B] leading-tight">
              "{data.message}"
            </blockquote>

            <div className="space-y-3 text-slate-600 text-base font-sans leading-relaxed pt-4 border-t border-slate-200">
              <p>
                At Shri Krishan Institute of Education, our founding principle has always been student-centered development. We recognize that in today's technology-driven world, acquiring hands-on digital skills is not an optional extra—it is an absolute prerequisite for career growth.
              </p>
              <p>
                Whether a student is enrolling in basic computer applications or mastering advanced accounting with Tally Prime and web programming, our faculty ensures that every individual receives patient, rigorous, and practical guidance.
              </p>
            </div>

            <div className="pt-2">
              <span className="block font-serif font-bold text-xl text-[#0B132B]">{data.name}</span>
              <span className="block text-xs font-sans text-slate-500 uppercase tracking-wider">Chairman • Shri Krishan Institute of Education</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
