import { useEffect, useRef, useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const posts = [
  { id: 'DAYeUchvgj_', type: 'post' },
  { id: 'Co_p7bZPyP-', type: 'post' }, //new post
  { id: 'Ct3hyx1vItK', type: 'post' },
  { id: 'C9rY6HoP2oh', type: 'post' },
  { id: 'C_TEyOFv2iD', type: 'reel' },
];

function InstagramEmbed({ postId }: { postId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Inject Instagram embed script if not already present
    if (!document.getElementById('ig-embed-script')) {
      const script = document.createElement('script');
      script.id = 'ig-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
        setLoaded(true);
      };
    } else {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
      setLoaded(true);
    }
  }, [postId]);

  return (
    <div
      ref={ref}
      className="flex-shrink-0 w-[340px] sm:w-[380px] rounded-2xl overflow-hidden bg-white shadow-lg"
      style={{ minHeight: '480px' }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/p/${postId}/?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        data-instgrm-captioned=""
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '16px',
          boxShadow: 'none',
          margin: '0',
          padding: '0',
          width: '100%',
          minWidth: '326px',
        }}
      />
      {!loaded && (
        <div className="flex items-center justify-center h-64 bg-gray-50">
          <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

export default function InstagramFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 420;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section id="instagram" className="py-16 lg:py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3">
            <Instagram size={18} />
            <span>Follow Our Journey</span>
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            We Are on Instagram
          </h2>
          <p className="text-navy-600">
            Stay updated with our latest activities, results, and announcements.
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            <Instagram size={16} />
            @activelearnersacademy
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 transition-colors"
          >
            <ChevronLeft size={22} className="text-navy-700" />
          </button>

          {/* Scrollable strip */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post) => (
              <InstagramEmbed key={post.id} postId={post.id} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 transition-colors"
          >
            <ChevronRight size={22} className="text-navy-700" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {posts.map((post) => (
            <div key={post.id} className="w-2 h-2 rounded-full bg-amber-300" />
          ))}
        </div>
      </div>
    </section>
  );
}
