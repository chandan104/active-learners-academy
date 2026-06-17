export const siteConfig = {
  name: "Active Learners Academy",
  shortName: "ALA",
  tagline: "Educating Today's Learners For Tomorrow's World",
  established: "16th July 2018",
  phone: "7629015229",
  phoneSecondary: "9366940084",
  whatsapp: "7629015229",
  email: "activelearnersdmp@gmail.com",
  address: "ABC Building, 1st Floor, Opp. Hollotoli School, 2½ Mile, Naharbari, Dimapur, Nagaland 797116",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.654321!2d93.7473022!3d25.9399866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU2JzIzLjkiTiA5M8KwNDQnNTAuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
  mapLink: "https://maps.google.com/?q=ABC+Building+Opp+Hollotoli+School+Naharbari+Dimapur+797116",
  social: {
    facebook: "", // Add link when available
    instagram: "", // Add link when available
    youtube: "", // Add link when available
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Results", href: "#results" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
