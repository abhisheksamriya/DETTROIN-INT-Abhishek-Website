import { navLinks } from "@/constant/contant";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-wide">EXCELLENCE INTERNATIONAL</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Excellence International School is dedicated to nurturing young minds through academic excellence, modern learning methods, and holistic development.
            </p>
          </div>

          <div>
            <h4 className="text-brand-yellow font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/80">
            {navLinks.map((l)=>
              <li key={l.name}><a  href={l.href} className="hover:text-brand-yellow transition-colors">{l.name}</a></li>
            )}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-yellow font-bold text-base mb-4">Academics</h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Pre Primary School</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Primary School</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Middle School</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Daycare Facility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-yellow font-bold text-base mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/80 leading-relaxed">
              <p>Ramghat Road Aligarh 202001 Uttar Pradesh, Aligarh, India</p>
              <p>Phone: +91 7055582117</p>
              <p>Email: info@excellenceinternationalschool.com</p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-xs text-white/60">
          <p className="text-center">© Copyright 2026 Excellence International School. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}