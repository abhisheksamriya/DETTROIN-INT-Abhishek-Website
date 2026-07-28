"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/constant/contant";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./Icons";
import PopUpModal from "./PopUPModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);



  return (
    <header className="fixed top-0 w-full z-1000 shadow-md">  
      {/* top yellow bar */}
      <div className="hidden md:flex bg-brand-yellow text-brand-green text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8 justify-between items-center gap-2">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <a href="tel:+917055582117" className="flex items-center gap-1 hover:opacity-80 transition">
            <Phone size={14} />
            <span className="font-medium ">+91 7055582117</span>
          </a>
          <a href="mailto:info@excellenceinternationalschool.com" className="flex items-center gap-1 hover:opacity-80 transition">
            <Mail size={14} />
            <span className="font-medium">info@excellenceinternationalschool.com</span>
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="font-bold">Follow Us:</span>
          <div className="flex items-center gap-2">
            <Link href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100 transition">
                <FacebookIcon/>
            </Link>
            <Link href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100 transition">
                <InstagramIcon/>
            </Link>
            <Link href="#" className="bg-white p-1.5 rounded-full hover:bg-gray-100 transition">
                <YoutubeIcon/>
            </Link>
          </div>
        </div>
      </div>

    {/* green bar */}
      <div className="bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 sm:h-20">
            
            {/* website logo */}
            <div className="shrink-0 flex items-center bg-white px-4 p-2 shadow-sm">
              <Link href="/" className="flex flex-col items-center justify-center text-brand-green">
                <Image src="/logo.webp" alt="Logo" width={50} height={50} className="object-contain" />
              </Link>
            </div>

            {/* menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-semibold hover:text-brand-yellow transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* cta button */}
            <div className="hidden md:flex items-center">
              <button onClick={() => setIsPopUpOpen(true)} className="bg-brand-yellow text-brand-green px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-transform hover:scale-105 flex items-center gap-2 shadow-md cursor-pointer">
                Admissions Open
              </button>
            </div>

            {/* mobile  */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-brand-yellow focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-brand-green border-t border-white/10 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-white hover:text-brand-yellow hover:bg-black/10 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button onClick={()=>setIsPopUpOpen(true)} className="w-full mt-4 bg-brand-yellow text-brand-green px-6 py-3 rounded-md text-base font-bold hover:brightness-110 transition-colors">
                Admissions Open
              </button>
            </div>
          </div>
        )}
      </div>

      <PopUpModal
        isOpen={isPopUpOpen} 
        onClose={() => setIsPopUpOpen(false)} 
      />
    </header>
  );
}