export interface Course {
  id: string;
  name: string;
  fullName: string;
  duration: string;
  totalClasses: string;
  classHours: string;
  weeklyLectures: string;
  fees: string;
  description: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: "npsc",
    name: "NPSC",
    fullName: "Nagaland Public Service Commission",
    duration: "10 Months",
    totalClasses: "200 Days",
    classHours: "2-3 hours per day",
    weeklyLectures: "5 Lectures",
    fees: "Rs. 30,000/-",
    description:
      "Comprehensive coaching for the NPSC Civil Services Examination covering Preliminary, Mains, and Interview stages with expert faculty guidance.",
    features: [
      "Complete Prelims, Mains & Interview coverage",
      "200 days of structured classroom teaching",
      "Weekly 5 lectures with expert faculty",
      "Daily answer writing practice",
      "Rigorous test series & performance analysis",
      "Free study materials & monthly current affairs",
      "Mock interviews & personality development",
    ],
  },
  {
    id: "nssb",
    name: "NSSB",
    fullName: "Nagaland Staff Selection Board",
    duration: "6 Months",
    totalClasses: "120 Days",
    classHours: "2-3 hours per day",
    weeklyLectures: "5 Lectures",
    fees: "Rs. 18,000/-",
    description:
      "Focused coaching for NSSB examinations with structured syllabus navigation, regular tests, and result-oriented teaching methods.",
    features: [
      "Complete NSSB syllabus coverage",
      "120 days of intensive classroom coaching",
      "Weekly 5 lectures with experienced faculty",
      "Regular mock tests & doubt clearing sessions",
      "Free study materials & test papers",
      "CSAT & General Science specialization",
      "Career guidance & interview preparation",
    ],
  },
];
