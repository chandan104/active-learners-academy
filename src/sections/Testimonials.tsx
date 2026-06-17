import { Quote } from 'lucide-react';
import { testimonials } from '../content/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-navy-600">
            Hear from our successful students about their journey at Active Learners Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <Quote size={24} className="text-accent-300 mb-4" />
              
              <p className="text-navy-700 text-sm leading-relaxed mb-6 flex-grow">
                "{item.quote}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white font-heading font-bold text-sm">
                    {item.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-navy-900 text-sm">
                      {item.name}
                    </h4>
                    {item.achievement && (
                      <p className="text-xs text-accent-600 font-medium">
                        {item.achievement}
                      </p>
                    )}
                    {item.exam && (
                      <p className="text-xs text-navy-500">
                        {item.exam} {item.year && `• ${item.year}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
