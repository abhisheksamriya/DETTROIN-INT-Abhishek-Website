import PageBanner from "@/components/PageBanner";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <PageBanner
        tag="Contact Us"
        title="Excellence International School"
        subtitle="Shaping future leaders through quality education, moral values, and a safe, nurturing environment in Aligarh."
        imageSrc="/Contact.webp"
      />

      {/* Main Contact Section: Left Info, Right Map */}
<ContactSection/>

      {/* FAQ Section */}
      <FAQSection />

    </div>
  );
}