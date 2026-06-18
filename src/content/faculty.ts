export interface FacultyMember {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  subjects: string[];
  photo: string;
  achievements?: string[];
}

export const faculty: FacultyMember[] = [
  {
    id: "apem",
    name: "Apem Hongvah",
    qualification: "BA (Hons) Political Science",
    experience: "10 Years",
    subjects: ["Polity", "Ethics", "International Relations", "History"],
    photo: "/images/faculty/faculty-01.jpg",
    achievements: ["Wrote UPSC Mains", "4 Years teaching in Delhi", "6 Years NPSC/NSSB experience"],
  },
  {
    id: "lanu",
    name: "Lanu Yanger Walling",
    qualification: "B.Tech",
    experience: "6 Years",
    subjects: ["General Science", "CSAT"],
    photo: "/images/faculty/faculty-02.webp",
    achievements: ["Appeared NPSC Mains Twice", "Faced Departmental Interview"],
  },
  {
    id: "ateih",
    name: "C. Ateih Konyak",
    qualification: "MA (Political Science)",
    experience: "3 Years",
    subjects: ["Geography", "Economy", "Polity"],
    photo: "/images/faculty/faculty-03.webp",
    achievements: ["Cleared CAPF Written Exam", "Cleared NPSC Mains Twice", "Faced Interview"],
  },
  {
    id: "omei",
    name: "Omei M. Phom",
    qualification: "PG (History)",
    experience: "5 Years",
    subjects: ["History", "Nagaland", "Economy", "Geography"],
    photo: "/images/faculty/faculty-04.webp",
    achievements: ["Cleared NPSC"],
  },
  {
    id: "pipemo",
    name: "Pipemo T. Ngullie",
    qualification: "MA (Political Science)",
    experience: "4 Years",
    subjects: ["Polity", "Nagaland"],
    photo: "/images/faculty/faculty-05.webp",
    achievements: ["Cleared NPSC", "Guest Faculty"],
  },
  {
    id: "hitimo",
    name: "Hitimo Semy",
    qualification: "MCA",
    experience: "3 Years",
    subjects: ["Basic Computer Knowledge"],
    photo: "/images/faculty/faculty-06.webp",
    achievements: ["Cleared Departmental Exam"],
  },
];
