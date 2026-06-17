import { Award, BookOpen, GraduationCap } from 'lucide-react';
import { faculty } from '../content/faculty';
import ImageWithFallback from '../components/ImageWithFallback';

export default function Faculty() {
  return (
    <section id="faculty" className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
            Our Team
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-navy-600">
            Learn from experienced educators who have cleared competitive exams and bring real expertise to the classroom.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Photo */}
              <div className="relative h-56 bg-navy-100">
                <ImageWithFallback
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  fallbackClassName="absolute inset-0 flex flex-col items-center justify-center p-4"
                  icon={<div className="w-16 h-16 rounded-full bg-navy-200 flex items-center justify-center mb-2"><GraduationCap size={32} className="text-navy-600" /></div>}
                  fallbackText="Faculty Photo"
                  fallbackSubText={`Replace at: ${member.photo}`}
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-navy-900 text-lg">{member.name}</h3>
                  <span className="inline-flex items-center gap-1 bg-accent-100 text-accent-700 text-xs font-semibold px-2 py-1 rounded-md">
                    <Award size={12} />
                    {member.experience}
                  </span>
                </div>

                <p className="text-sm text-navy-500 mb-3 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-accent-500" />
                  {member.qualification}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {member.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded-md font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                {member.achievements && member.achievements.length > 0 && (
                  <div className="border-t border-gray-100 pt-3">
                    <ul className="space-y-1">
                      {member.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-navy-500 flex items-start gap-1.5">
                          <span className="text-accent-500 mt-0.5">•</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
