import PageBanner from "@/components/PageBanner";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function ContactUsPage() {
  return (
    <div>
      <PageBanner
        tag="Contact Us"
        title="Excellence International School"
        subtitle="Shaping future leaders through quality education, moral values, and a safe, nurturing environment in Aligarh."
        imageSrc="/Contact.webp"
      />

      <ContactSection/>
      <FAQSection />

    </div>
  );
}