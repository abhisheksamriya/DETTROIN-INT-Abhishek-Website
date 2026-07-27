import AcademicStages from "@/components/AcademicStages";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Testimonials from "@/components/Testimonials";
import VisionMission from "@/components/VisionMission";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
<div>
      <Hero />
      <IntroSection/>
      <VisionMission/>
      <AcademicStages/>
      <WhyChooseUs/>
      <Testimonials/>
      <FAQSection/>
    </div>
  );
}
