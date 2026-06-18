import { useState } from 'react';
import { ImageIcon, X, ZoomIn } from 'lucide-react';
import { galleryItems, galleryCategories } from '../content/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
            Gallery
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Life at ALA
          </h2>
          <p className="text-navy-600">
            Glimpses of our classrooms, students, celebrations, and facilities.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat.value
                  ? 'bg-navy-900 text-white'
                  : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-100 cursor-pointer"
                onClick={() => setLightboxImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-navy-50 rounded-2xl p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
              <ImageIcon size={32} className="text-navy-400" />
            </div>
            <h3 className="font-heading font-semibold text-navy-900 text-lg mb-2">
              Gallery Coming Soon
            </h3>
            <p className="text-navy-500 text-sm max-w-md mx-auto">
              No gallery images have been added yet. To add images, place them in{" "}
              <code className="bg-white px-1.5 py-0.5 rounded text-xs font-mono text-navy-700">
                public/images/gallery/
              </code>{" "}
              and update{" "}
              <code className="bg-white px-1.5 py-0.5 rounded text-xs font-mono text-navy-700">
                src/content/gallery.ts
              </code>
              .
            </p>
          </div>
        )}

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
