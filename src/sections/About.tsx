import { Target, BookOpen, Award, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../content/site';

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Instagram Reel Embed */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-navy-100 shadow-xl flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/reel/C_TEyOFv2iD/?utm_source=ig_embed"
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: '100%',
                }}
              />
            </div>
            
            {/* Established badge */}
            <div className="absolute -bottom-4 -right-4 bg-navy-900 text-white rounded-xl px-5 py-3 shadow-lg z-10">
              <div className="font-heading text-2xl font-bold">Since</div>
              <div className="text-accent-400 font-bold text-lg">{siteConfig.established}</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
              About Us
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              Building Future Leaders Since {siteConfig.established.split(' ').pop()}
            </h2>
            
            <p className="text-navy-700 leading-relaxed mb-4">
              Active Learners Academy was established on <strong>16th July 2018</strong> with an aim to mentor and coach State Civil Service aspirants in their Civil Service preparation and other allied exams. Our journey began with a small classroom and a big dream.
            </p>
            <p className="text-navy-700 leading-relaxed mb-6">
              Today, we have grown into a trusted institution that has shaped the futures of thousands of NPSC &amp; NSSB aspirants. Our commitment to excellence, innovation, and student-centered learning remains unwavering.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Target, title: "Our Mission", text: "To move beyond rote memorization by building fundamental subject knowledge and critical thinking required for governance." },
                { icon: Award, title: "Our Vision", text: "To be the forerunner of NPSC/NSSB coaching with top-notch quality teaching and transformative impact on students' lives." },
              ].map((item) => (
                <div key={item.title} className="bg-navy-50 rounded-xl p-4">
                  <item.icon size={24} className="text-accent-500 mb-2" />
                  <h4 className="font-heading font-semibold text-navy-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-navy-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: HeartHandshake, text: "Ethics, empathy, and commitment to societal betterment" },
                { icon: BookOpen, text: "Comprehensive, exam-oriented study materials" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon size={20} className="text-accent-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-navy-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Load Instagram embed script */}
      <script async src="https://www.instagram.com/embed.js" />
    </section>
  );
}
