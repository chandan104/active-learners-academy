import { Clock, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { courses } from '../content/courses';

export default function Courses() {
  return (
    <section id="courses" className="py-16 lg:py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
            Our Programs
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Courses We Offer
          </h2>
          <p className="text-navy-600">
            Structured coaching programs designed to take you from fundamentals to exam readiness with expert guidance at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block bg-navy-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {course.name}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-navy-900 mt-3">
                    {course.fullName}
                  </h3>
                </div>
              </div>

              <p className="text-navy-600 text-sm leading-relaxed mb-5">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <Clock size={16} className="text-accent-500" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <Calendar size={16} className="text-accent-500" />
                  {course.totalClasses}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <BookOpen size={16} className="text-accent-500" />
                  {course.classHours}
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <Calendar size={16} className="text-accent-500" />
                  {course.weeklyLectures}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h4 className="font-semibold text-navy-900 text-sm mb-3">What you get:</h4>
                <ul className="space-y-2">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-navy-600">
                      <CheckCircle size={16} className="text-accent-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
