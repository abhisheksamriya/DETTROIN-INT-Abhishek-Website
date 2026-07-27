import EnquiryForm from "./EnquiryForm";

export default function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* left text part */}
          <div className="w-full lg:w-[55%] space-y-6">
            <div>
              <h2 className="text-brand-yellow font-semibold text-lg md:text-xl mb-2">
                Best School in Aligarh, Uttar Pradesh
              </h2>
              <h1 className="text-3xl md:text-4xl font-extrabold text-brand-green leading-tight">
                Excellence International School – Shaping Future Leaders Through Quality Education
              </h1>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                <strong className="text-gray-900 font-semibold">Excellence International School</strong> is one of the <strong className="text-brand-green font-semibold cursor-pointer hover:underline">best school in Aligarh</strong>, Uttar Pradesh, known for quality learning, discipline, and holistic development. Recognized as a top school in Aligarh, the institution is dedicated to nurturing young minds with knowledge, confidence, creativity, and strong ethical values for a bright future.
              </p>
              
              <p>
                The school focuses on building a strong academic foundation while encouraging innovation, leadership, and personal growth. Every student is guided to explore their potential and develop the skills needed to succeed in life.
              </p>

              <p>
                Education at Excellence International School is not limited to textbooks. It aims to create responsible individuals who are prepared for academic success as well as real-world challenges.
              </p>
            </div>
          </div>
{/* form */}
          <div className="w-full lg:w-[40%] lg:pl-10 mt-8 lg:mt-0">
            <div className="sticky top-28">
              <EnquiryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}