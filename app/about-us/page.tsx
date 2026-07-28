
import JoinUsSection from "@/components/JoinUsSection";
import Pillars from "@/components/Pillars";
import VisionMission from "@/components/VisionMission";
import PageBanner from "@/components/PageBanner";

export default function AboutUsPage() {



  return (
    <div>
        <PageBanner
        tag="About Us"
        title="Excellence International School"
        subtitle="Shaping future leaders through quality education, moral values, and a safe, nurturing environment in Aligarh."
        imageSrc="/about.webp"
      />
<VisionMission/>
<Pillars/>
<JoinUsSection/>
    </div>
  );
}