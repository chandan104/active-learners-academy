import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { siteConfig, navLinks } from '../content/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/91${siteConfig.whatsapp}?text=Hi%20Active%20Learners%20Academy,%20I%20would%20like%20to%20enquire%20about%20your%20courses.`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavClick('#hero')} className="flex items-center gap-2 shrink-0">
            <img
              src="/images/logo/logo.webp"
              alt="Active Learners Academy Logo"
              className="h-10 w-auto rounded-lg"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-navy-900 text-base lg:text-lg leading-tight">
                Active Learners
              </h1>
              <p className="text-[10px] lg:text-xs text-navy-600 font-medium tracking-wide uppercase">
                Academy
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-navy-700 hover:text-accent-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-accent-600 transition-colors"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-navy-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-accent-600 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-3 flex flex-col gap-2">
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-navy-700 py-2"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageCircle size={16} />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
