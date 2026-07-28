import { highlights } from "@/constant/contant";

export default function Pillars() {
  return (
    <section className="py-24 bg-gray-50/50  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3.5 py-1.5 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-green tracking-tight">
            Our Core Pillars
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Everything your child needs for a balanced and successful educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${item.accent} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

              <div>
                <div className="text-3xl mb-6 bg-gray-50 group-hover:bg-brand-green/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-100 transition-colors duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-brand-green mb-3 group-hover:text-brand-yellow transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs font-semibold text-brand-green/60">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                <span>Core Pillar</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}