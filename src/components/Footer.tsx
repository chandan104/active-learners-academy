import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '../content/site';

export default function Footer() {
  const whatsappUrl = `https://wa.me/91${siteConfig.whatsapp}?text=Hi%20Active%20Learners%20Academy,%20I%20would%20like%20to%20enquire%20about%20your%20courses.`;

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-500 flex items-center justify-center text-white font-heading font-bold text-lg">
                ALA
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base leading-tight">
                  Active Learners
                </h3>
                <p className="text-[10px] text-navy-300 tracking-wide uppercase">Academy</p>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-navy-400 text-xs mt-3">
              Established {siteConfig.established}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Courses', href: '#courses' },
                { label: 'Faculty', href: '#faculty' },
                { label: 'Results', href: '#results' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-accent-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Our Courses</h4>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="text-navy-300 hover:text-accent-400 text-sm transition-colors">
                  NPSC Coaching (10 Months)
                </a>
              </li>
              <li>
                <a href="#courses" className="text-navy-300 hover:text-accent-400 text-sm transition-colors">
                  NSSB Coaching (6 Months)
                </a>
              </li>
              <li>
                <a href="#faq" className="text-navy-300 hover:text-accent-400 text-sm transition-colors">
                  Fee Structure & Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-accent-400 mt-0.5 shrink-0" />
                <div className="text-sm text-navy-300">
                  <a href={`tel:+91${siteConfig.phone}`} className="hover:text-white transition-colors block">
                    {siteConfig.phone}
                  </a>
                  <a href={`tel:+91${siteConfig.phoneSecondary}`} className="hover:text-white transition-colors block">
                    {siteConfig.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-accent-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-navy-300 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent-400 mt-0.5 shrink-0" />
                <span className="text-sm text-navy-300">
                  {siteConfig.address}
                </span>
              </li>
              <li className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 text-center">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} Active Learners Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
