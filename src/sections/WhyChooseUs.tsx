import { Users, Brain, FileCheck, MessageSquare, BookOpen, Shield, UserCheck, Lightbulb } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Our team includes faculty with 10+ years of teaching experience, UPSC Mains experience, and cleared NPSC exam credentials.",
  },
  {
    icon: Brain,
    title: "Conceptual Clarity",
    description: "We move beyond rote memorization by building fundamental subject knowledge and the critical thinking required for governance.",
  },
  {
    icon: FileCheck,
    title: "Regular Tests & Analysis",
    description: "Weekly tests, subject-wise tests, monthly mock tests, daily evaluations, and detailed performance analysis to track progress.",
  },
  {
    icon: MessageSquare,
    title: "Doubt Clearing & Feedback",
    description: "One-on-one doubt clearing sessions with individual feedback and constructive criticism from approachable mentors.",
  },
  {
    icon: BookOpen,
    title: "Free Study Materials",
    description: "No separate charges for study materials, prospectus, weekly tests, or monthly mock tests. All essential services are free.",
  },
  {
    icon: Shield,
    title: "Easy Exit & Refund Policy",
    description: "Genuine exit requests are handled with pro-rata fee refunds within 10 days. No hidden charges or complications.",
  },
  {
    icon: UserCheck,
    title: "Interview & Personality Grooming",
    description: "Mock boards, behavioral assessments, real-world scenario discussions, group discussion prep, and confidence building.",
  },
  {
    icon: Lightbulb,
    title: "Affordable Quality Education",
    description: "Top-notch quality teaching at affordable fees to ensure all eligible and economically disadvantaged students get equitable access.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-navy-600">
            We are committed to providing quality education with a student-centered approach that produces real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-navy-50 rounded-xl p-5 hover:bg-navy-900 transition-colors duration-300 border border-transparent hover:border-navy-800"
            >
              <div className="w-11 h-11 rounded-lg bg-white group-hover:bg-accent-500 flex items-center justify-center mb-4 transition-colors shadow-sm">
                <reason.icon size={22} className="text-navy-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-navy-900 group-hover:text-white text-base mb-2 transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-navy-600 group-hover:text-navy-200 leading-relaxed transition-colors">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
