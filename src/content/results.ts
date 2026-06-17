export interface ResultItem {
  id: string;
  studentName: string;
  achievement: string;
  exam: string;
  year: string;
  description?: string;
  image?: string;
}

export const results: ResultItem[] = [
  {
    id: "result-01",
    studentName: "Imtiyenla K",
    achievement: "EAC Rank 15",
    exam: "NPSC (CSE)",
    year: "2023",
    description: "Cleared NPSC after multiple attempts with guidance from ALA faculty.",
    image: "/images/results/result-01.webp",
  },
  {
    id: "result-02",
    studentName: "Elanthung Tsanglao",
    achievement: "All Nagaland Rank 1",
    exam: "NSSB (CASE) - Lokayukta",
    year: "2022-2023",
    description: "Topped Nagaland in NSSB CASE examination for Lokayukta post.",
    image: "/images/results/result-02.webp",
  },
];
