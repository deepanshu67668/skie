import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import Introduction from '@/components/Introduction';
import ResultSearchSection from '@/components/ResultSearchSection';
import CourseDirectory from '@/components/CourseDirectory';
import WhyChooseSkie from '@/components/WhyChooseSkie';
import CampusLife from '@/components/CampusLife';
import AdmissionsCta from '@/components/AdmissionsCta';
import ContactSection from '@/components/ContactSection';

export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="space-y-0 bg-[#FBFBF9]">
      {/* 1. Hero Carousel */}
      <Hero />

      {/* 2. Compact Movable Stats Section */}
      <StatsSection />

      {/* 3. About SKIE Section */}
      <Introduction />

      {/* 4. Student Result & Marksheet Verification Portal */}
      <ResultSearchSection />

      {/* 5. Our Programs / Explore Our Courses */}
      <CourseDirectory />

      {/* 6. Why Choose SKIE */}
      <WhyChooseSkie />

      {/* 7. Life at SKIE */}
      <CampusLife />

      {/* 8. Ready to Take the Next Step? */}
      <AdmissionsCta />

      {/* 9. Get In Touch & Map */}
      <ContactSection />
    </div>
  );
}
