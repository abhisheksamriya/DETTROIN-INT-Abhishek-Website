"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/hero1.webp", 
  "/hero2.webp",
  "/hero3.webp",
  "/hero4.webp",
  "/hero5.webp",
  "/hero6.webp",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  return (
    <section className="relative w-full bg-gray-100 overflow-hidden">
      {/* image for fix size  of container*/}
      <Image
        src={images[0]}
        alt="placeholder"
        width={1920}
        height={700}
        className="w-full h-auto invisible pointer-events-none min-h-45"
        priority
        unoptimized
      />

      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full "
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <Image
            src={images[currentIndex]}
            alt={`School Activity ${currentIndex + 1}`}
            fill
            className="object-cover pointer-events-none"
            priority={currentIndex === 0}
            unoptimized
          />
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white text-brand-green p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronLeft size={28} />
      </button>

      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/60 hover:bg-white text-brand-green p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center items-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 md:h-3 rounded-full border border-black/30 shadow-md transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? "bg-brand-yellow w-6 md:w-8" 
                : "bg-white/80 w-2 md:w-3 hover:bg-white cursor-pointer" 
            }`}
          />
        ))}
      </div>
      
    </section>
  );
}