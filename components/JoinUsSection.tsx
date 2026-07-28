import Link from "next/link"

const JoinUsSection = () => {
  return (
          <section className="py-20 bg-brand-yellow/10 border-y border-brand-yellow/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green tracking-tight">
            Join Excellence International School
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choosing the right school plays an important role in shaping a child’s future. Admissions are open for multiple classes. Become a part of our growing family today!
          </p>
          <div className="pt-4">
            <Link 
              href="/contact-us" 
              className="inline-block bg-brand-green text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Contact Us for Admissions
            </Link>
          </div>
        </div>
      </section>
  )
}

export default JoinUsSection