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
  { id: "gallery-05", title: "ALA Signboard – Daytime", category: "facilities", image: "/images/gallery/gallery-05.jpg" },
  { id: "gallery-06", title: "Active Learners Academy – Street View", category: "facilities", image: "/images/gallery/gallery-06.jpg" },
  { id: "gallery-07", title: "ALA Signboard – Night", category: "facilities", image: "/images/gallery/gallery-07.jpg" },
  { id: "gallery-08", title: "Classroom – Study Hall", category: "classroom", image: "/images/gallery/gallery-08.jpg" },
  { id: "gallery-09", title: "Classroom – Projector Session", category: "classroom", image: "/images/gallery/gallery-09.jpg" },
  { id: "gallery-10", title: "GK Guide Book – NPSC & NSSB", category: "results", image: "/images/gallery/gallery-10.jpg" },
  { id: "gallery-11", title: "Naharbari Junction – Our Location", category: "facilities", image: "/images/gallery/gallery-11.jpg" },
];

export const galleryCategories = [
  { value: "all", label: "All" },
  { value: "classroom", label: "Classroom" },
  { value: "events", label: "Events" },
  { value: "results", label: "Results" },
  { value: "facilities", label: "Facilities" },
] as const;
