import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { siteConfig } from '../content/site';

export default function Contact() {
  const whatsappUrl = `https://wa.me/91${siteConfig.whatsapp}?text=Hi%20Active%20Learners%20Academy,%20I%20would%20like%20to%20enquire%20about%20your%20courses.`;
  const emailSubject = encodeURIComponent("Enquiry about Active Learners Academy courses");
  const emailBody = encodeURIComponent("Hi,\n\nI would like to enquire about the courses offered at Active Learners Academy.\n\nName: \nPhone: \nCourse interested in: \n\nPlease contact me with details.\n\nThank you.");

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-wider mb-2">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-navy-600">
            Have questions? Reach out to us directly via WhatsApp, phone, or email. We are here to help you start your preparation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-navy-50 rounded-2xl p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-navy-900 text-lg mb-5">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900 mb-0.5">Phone</p>
                    <a href={`tel:+91${siteConfig.phone}`} className="text-sm text-navy-600 hover:text-accent-600 transition-colors block">
                      +91 {siteConfig.phone}
                    </a>
                    <a href={`tel:+91${siteConfig.phoneSecondary}`} className="text-sm text-navy-600 hover:text-accent-600 transition-colors block">
                      +91 {siteConfig.phoneSecondary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900 mb-0.5">WhatsApp</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-navy-600 hover:text-accent-600 transition-colors block">
                      +91 {siteConfig.whatsapp}
                    </a>
                    <p className="text-xs text-navy-400 mt-0.5">Fastest response</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900 mb-0.5">Email</p>
                    <a href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`} className="text-sm text-navy-600 hover:text-accent-600 transition-colors block">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900 mb-0.5">Address</p>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {siteConfig.address}
                    </p>
                    <a
                      href={siteConfig.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-600 hover:text-accent-700 font-medium mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-accent-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900 mb-0.5">Class Timings</p>
                    <p className="text-sm text-navy-600">Morning: 10:00 AM – 12:00 Noon</p>
                    <p className="text-sm text-navy-600">Evening: 3:00 PM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl p-5 transition-colors shadow-md"
            >
              <MessageCircle size={24} />
              <div className="text-left">
                <p className="font-semibold text-base">Enquire on WhatsApp</p>
                <p className="text-xs text-accent-100">Click to send a pre-filled message</p>
              </div>
              <Send size={18} className="ml-auto" />
            </a>
          </div>

          {/* Map / Visual */}
          <div className="flex flex-col gap-6">
            <div className="bg-navy-50 rounded-2xl p-6 lg:p-8 flex-grow">
              <h3 className="font-heading font-semibold text-navy-900 text-lg mb-4">
                Find Us on the Map
              </h3>
              {siteConfig.mapEmbedUrl ? (
                <div className="rounded-xl overflow-hidden border border-gray-200 h-80">
                  <iframe
                    src={siteConfig.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Active Learners Academy Location"
                  />
                </div>
              ) : (
                <div className="rounded-xl overflow-hidden border border-gray-200 h-80 bg-white flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mb-3">
                    <MapPin size={32} className="text-navy-500" />
                  </div>
                  <h4 className="font-heading font-semibold text-navy-800 mb-1">Map Not Configured</h4>
                  <p className="text-sm text-navy-500 mb-3">
                    To add a Google Maps embed, go to{" "}
                    <code className="bg-navy-100 px-1.5 py-0.5 rounded text-xs font-mono text-navy-700">
                      src/content/site.ts
                    </code>{" "}
                    and paste your Google Maps embed URL in the{" "}
                    <code className="bg-navy-100 px-1.5 py-0.5 rounded text-xs font-mono text-navy-700">
                      mapEmbedUrl
                    </code>{" "}
                    field.
                  </p>
                  <a
                    href={siteConfig.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:text-accent-700"
                  >
                    <MapPin size={16} />
                    Open Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
