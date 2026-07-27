import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green tracking-tight">
            Our Vision & Mission
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Dedicated to providing modern education with a balanced approach to academics, co-curricular activities, and character development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/vision.webp"
                alt="Vision and Mission"
                width={800}
                height={500}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3 border-l-4 border-brand-yellow pl-6">
              <h3 className="text-2xl font-bold text-brand-green">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                To create confident, responsible, and innovative individuals who contribute positively to society.
              </p>
            </div>

            <div className="space-y-4 border-l-4 border-brand-green pl-6">
              <h3 className="text-2xl font-bold text-brand-green">Our Mission</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-brand-yellow font-bold">✓</span> Deliver high-quality education
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-yellow font-bold">✓</span> Encourage curiosity & creativity
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-yellow font-bold">✓</span> Build strong academic foundations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-yellow font-bold">✓</span> Promote discipline & values
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}