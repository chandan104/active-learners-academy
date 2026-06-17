export interface GalleryItem {
  id: string;
  title: string;
  category: "classroom" | "events" | "results" | "facilities";
  image: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "gallery-01", title: "Classroom Session", category: "classroom", image: "/images/gallery/gallery-01.webp" },
  { id: "gallery-02", title: "Student Activities", category: "events", image: "/images/gallery/gallery-02.webp" },
  { id: "gallery-03", title: "Result Celebration", category: "results", image: "/images/gallery/gallery-03.webp" },
  { id: "gallery-04", title: "Institute Building", category: "facilities", image: "/images/gallery/gallery-04.webp" },
];

export const galleryCategories = [
  { value: "all", label: "All" },
  { value: "classroom", label: "Classroom" },
  { value: "events", label: "Events" },
  { value: "results", label: "Results" },
  { value: "facilities", label: "Facilities" },
] as const;
