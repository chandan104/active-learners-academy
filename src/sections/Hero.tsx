import { useState, useEffect } from 'react';
import { MessageCircle, BookOpen } from 'lucide-react';
import { siteConfig } from '../content/site';

const heroSlides = [
  { src: '/images/gallery/gallery-10.jpg', alt: 'GK Guide Book for NPSC & NSSB by Active Learners Academy' },
  { src: '/images/gallery/gallery-11.jpg', alt: 'Active Learners Academy – Naharbari Junction, Dimapur' },
  { src: '/images/gallery/gallery-09.jpg', alt: 'Live classroom projector session at Active Learners Academy' },
  { src: '/images/gallery/gallery-06.jpg', alt: 'Active Learners Academy building, Dimapur' },
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % heroSlides.length);
        setFading(false);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-navy-800 shadow-2xl border border-white/10">
      <img
        src={heroSlides[current].src}
        alt={heroSlides[current].alt}
        className="w-full h-full object-cover transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.4s ease' }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const whatsappUrl = `https://wa.me/91${siteConfig.whatsapp}?text=Hi%20Active%20Learners%20Academy,%20I%20would%20like%20to%20enquire%20about%20your%20courses.`;

  return (
    <section id="hero" className="relative pt-20 lg:pt-24 min-h-[92vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 z-0" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Accent shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-500/5 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-sm text-white/90 font-medium">Established {siteConfig.established}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Active Learners
              <span className="block text-accent-400">Academy</span>
            </h1>

            <p className="text-lg lg:text-xl text-navy-200 font-medium mb-3">
              {siteConfig.tagline}
            </p>

            <p className="text-base lg:text-lg text-navy-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Premier coaching institute for <span className="text-white font-medium">NPSC</span> & <span className="text-white font-medium">NSSB</span> aspirants in Dimapur. Expert faculty, result-oriented teaching, and affordable fees since 2018.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={20} />
                Enquire Now
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl text-base font-semibold transition-all w-full sm:w-auto justify-center"
              >
                <BookOpen size={20} />
                View Courses
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="font-heading text-2xl lg:text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-navy-300">Expert Faculty</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading text-2xl lg:text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-navy-300">Days of Classes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-heading text-2xl lg:text-3xl font-bold text-white">1000+</div>
                <div className="text-sm text-navy-300">Students Guided</div>
              </div>
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-accent-500/20" />
              <div className="absolute -inset-8 rounded-3xl border border-white/5" />
              
              <HeroSlideshow />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                    <span className="text-accent-600 font-bold text-sm">#1</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-900">All Nagaland Rank 1</p>
                    <p className="text-[10px] text-navy-500">NSSB 2022-23</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
