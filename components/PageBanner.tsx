import Image from "next/image";

interface PageBannerProps {
  title: string;
  subtitle: string;
  tag?: string;
  imageSrc: string;
}

export default function PageBanner({ title, subtitle, tag = "Excellence International School", imageSrc }: PageBannerProps) {
  return (
    <section className="bg-brand-green text-white pb-16">
      <div className="w-full">
        
        <div className="relative w-full h-75 sm:h-112.5 md:h-130 overflow-hidden shadow-2xl">
          <Image 
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow bg-white/10 px-3 py-1.5 rounded-full">
            {tag}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

      </div>
    </section>
  );
}