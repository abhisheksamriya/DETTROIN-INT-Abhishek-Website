"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/constant/contant";



export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green tracking-tight">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-gray-500 text-base">
            Find answers to common questions about admissions, campus, and academics.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:border-brand-green/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between font-bold transition-colors ${
                    isOpen ? "bg-brand-green text-white" : "bg-gray-50 text-gray-800 hover:bg-gray-100/80"
                  }`}
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-yellow" : "text-gray-500"}`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-6 py-4 bg-white text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}