import { Trophy, Medal, Star } from 'lucide-react';
import { results } from '../content/results';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Results() {
  return (
    <section id="results" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
            Student Success
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Our Results & Achievements
          </h2>
          <p className="text-navy-600">
            Real students. Real ranks. Real success stories that inspire the next generation of aspirants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {results.map((result) => (
            <div
              key={result.id}
              className="relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 lg:p-8 text-white overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                    <Trophy size={24} className="text-accent-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <Star size={14} className="text-accent-400 fill-accent-400" />
                      <span className="text-xs font-semibold text-accent-400 uppercase tracking-wide">Top Rank</span>
                    </div>
                    <p className="text-sm text-navy-300">{result.exam} • {result.year}</p>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-1">
                  {result.studentName}
                </h3>
                <p className="text-accent-400 font-semibold text-lg mb-3">
                  {result.achievement}
                </p>
                <p className="text-navy-200 text-sm leading-relaxed">
                  {result.description}
                </p>

                {/* Result image if available */}
                {result.image && (
                  <div className="mt-4 rounded-xl overflow-hidden bg-navy-700/50 h-40 relative">
                    <ImageWithFallback
                      src={result.image}
                      alt={result.studentName}
                      className="w-full h-full object-cover"
                      fallbackClassName="absolute inset-0 flex items-center justify-center"
                      icon={<div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center"><Medal size={24} className="text-navy-400" /></div>}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: "NPSC Ranks", value: "15+" },
            { label: "NSSB Ranks", value: "All Nagaland #1" },
            { label: "Years of Excellence", value: "6+" },
            { label: "Students Coached", value: "1000+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-navy-50 rounded-xl p-4 text-center">
              <div className="font-heading text-2xl font-bold text-navy-900">{stat.value}</div>
              <div className="text-xs text-navy-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
