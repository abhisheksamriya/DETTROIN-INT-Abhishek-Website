import JoinUsSection from "@/components/JoinUsSection";
import PageBanner from "@/components/PageBanner";

export default function GalleryPage() {



  return (
    <div className="min-h-screen bg-white">
        <PageBanner
        tag="Gallery"
        title="Excellence International School"
        subtitle="Shaping future leaders through quality education, moral values, and a safe, nurturing environment in Aligarh."
        imageSrc="/gallery.webp"
      />
      <JoinUsSection/>
    </div>
  );
}