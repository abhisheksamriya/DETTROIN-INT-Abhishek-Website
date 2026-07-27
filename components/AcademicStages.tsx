import { stages } from "@/constant/contant";
import Image from "next/image";



export default function AcademicStages() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green">
            Academic Stages
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At Excellence International School, the academic journey is structured to support students at every stage of their development with age-appropriate methods.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stage, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-200">
                <Image 
                  src={stage.image} 
                  alt={stage.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-brand-green mb-2">{stage.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{stage.desc}</p>
                  
                  <div className="space-y-1.5 border-t border-gray-200/60 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Key Focus Areas:</p>
                    {stage.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}