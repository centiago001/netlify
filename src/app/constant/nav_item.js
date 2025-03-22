export const NAV__ITEMS = [
  {
    isDropDown: false,
    name: "Home",
    path: "/",
  },
  {
    isDropDown: true,
    name: "About Team",
    dropDownItems: [
      { name: "About Us", path: "#" },
      { name: "Group Photo", path: "#" },
      { name: "Testimonial", path: "#" },
      { name: "Why Choose Us", path: "#" },
    ],
  },
  
  {
    isDropDown: false,
    name: "Facilities",
    path: "#",
  },
  {
    isDropDown: false,
    name: "Careers",
    path: "#",
  },
  {
    isDropDown: true,
    name: "Notice",
    dropDownItems: [
      { name: "Event", path: "#" },
      { name: "Programs", path: "#" },
    ],
  },
  {
    isDropDown: true,
    name: "Equipments",
    dropDownItems: [
      { name: "devlopded", path: "#" },
      { name: "Imported ", path: "#" },
      { name: "old", path: "#" },
      
    ],
  },
  {
    isDropDown: false,
    name: "Gallery",
    path: "/gallery",
  },
  {
    isDropDown: false,
    name: "Feedback",
    dropDownItems: [
      { name: "Student", path: "/feedback/student" },
      { name: "College", path: "/feedback/college" },
      { name: "Class", path: "/feedback/class" },
      { name: "Event", path: "/feedback/Event" },
    ],
  },
];
