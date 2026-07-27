"use client";

import { reviews } from "@/constant/contant";
import { motion } from "framer-motion";

export default function Testimonials() {


  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green tracking-tight">
            What Parents Say
          </h2>
          <p className="text-gray-500 text-base">
            Hear from families who trust us with their children's bright future.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <div className="absolute left-0 inset-y-0 w-20 bg-linear-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-20 bg-linear-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedReviews.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-w-[320px] sm:min-w-95 max-w-100 shrink-0"
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{item.feedback}"
              </p>
              <div>
                <h4 className="font-bold text-brand-green text-base">{item.name}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{item.role}</p>
                <div className="flex gap-1 text-brand-yellow text-sm mt-3">★★★★★</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}