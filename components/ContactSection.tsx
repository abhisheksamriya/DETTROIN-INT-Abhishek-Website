import Link from "next/link"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./Icons"
import { Mail, MapPin, Phone } from "lucide-react"

const ContactSection = () => {
  return (
          <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* left address */}
            <div className="lg:col-span-6 space-y-8 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1.5 rounded-full">
                  Get in Touch
                </span>
                <h2 className="text-3xl font-extrabold text-brand-green tracking-tight">
                  Reach Us
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Have questions about admissions or campus visits? Feel free to connect with us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-gray-100 my-auto">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/10 text-brand-green p-3 rounded-2xl shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green text-base mb-1">Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Excellence International School, Ramghat Road Aligarh 202001 Uttar Pradesh, Aligarh, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/10 text-brand-green p-3 rounded-2xl shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green text-base mb-1">Email</h4>
                    <a href="mailto:rahulexcellence85@gmail.com" className="block text-gray-600 text-sm hover:text-brand-yellow transition-colors">
                      rahulexcellence85@gmail.com
                    </a>
                    <a href="mailto:info@excellenceinternationalschool.com" className="block text-gray-600 text-sm hover:text-brand-yellow transition-colors">
                      info@excellenceinternationalschool.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/10 text-brand-green p-3 rounded-2xl shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green text-base mb-1">Phone no.</h4>
                    <a href="tel:+917055582117" className="text-gray-600 text-sm hover:text-brand-yellow transition-colors font-medium">
                      +91 7055582117
                    </a>
                  </div>
                </div>

              </div>

              {/* Social Follow */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-brand-green text-sm mb-4">Follow Us:</h4>
                <div className="flex items-center gap-3">
                  <Link href="#" className="bg-gray-100 hover:bg-brand-green hover:text-white text-gray-700 p-3 rounded-2xl transition-all">
                    <FacebookIcon />
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-brand-green hover:text-white text-gray-700 p-3 rounded-2xl transition-all">
                    <InstagramIcon />
                  </Link>
                  <Link href="#" className="bg-gray-100 hover:bg-brand-green hover:text-white text-gray-700 p-3 rounded-2xl transition-all">
                    <YoutubeIcon />
                  </Link>
                </div>
              </div>

            </div>

            {/* google map */}
            <div className="lg:col-span-6 lg:h-auto">
              <iframe 
                title="School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.3204773632947!2d78.08555319999999!3d27.892137100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974b7a50c9c6457%3A0x5cd02be223374122!2sExcellence%20International%20School%20%7C%20Kids%20Play%20School%20in%20Aligarh%20%7C%20kindergarten%20in%20aligarh%20%7C%20Kids%20Play%20school%20in%20Aligarh%20%7C!5e0!3m2!1sen!2sin!4v1785203758807!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>

          </div>

        </div>
      </section>
  )
}

export default ContactSection
