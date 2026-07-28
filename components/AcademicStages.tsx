import { features } from "@/constant/contant";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
            Our Strengths
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green tracking-tight">
            Why Choose Excellence?
          </h2>
          <p className="text-gray-500 text-base">
            Providing a holistic ecosystem where students thrive academically, socially, and safely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 bg-brand-green/10 text-brand-green w-14 h-14 rounded-2xl flex items-center justify-center">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}