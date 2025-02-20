
export const FEATURED_SECTIONS = [
  {
    id: 1,
    title: "Characters",
    description: "From noble lords to fearless warriors, discover the compelling characters that shape this epic tale.",
    link: "/characters",
    delay: "0.1s"
  },
  {
    id: 2,
    title: "Noble Houses",
    description: "Learn about the great houses of Westeros, their histories, sigils, and words.",
    link: "/houses",
    delay: "0.2s"
  },
  {
    id: 3,
    title: "Locations",
    description: "Journey through the Seven Kingdoms and beyond, from Castle Black to King's Landing.",
    link: "/locations",
    delay: "0.3s"
  }
];

export const MAP_LOCATIONS = [
  {
    id: 1,
    name: "King's Landing",
    coordinates: { x: 50, y: 60 },
    description: "Capital of the Seven Kingdoms",
    region: "Crownlands"
  },
  {
    id: 2,
    name: "Winterfell",
    coordinates: { x: 45, y: 20 },
    description: "Ancestral seat of House Stark",
    region: "The North"
  },
  {
    id: 3,
    name: "Casterly Rock",
    coordinates: { x: 20, y: 55 },
    description: "Seat of House Lannister",
    region: "Westerlands"
  },
  {
    id: 4,
    name: "The Eyrie",
    coordinates: { x: 60, y: 40 },
    description: "Seat of House Arryn",
    region: "The Vale"
  }
];

export const KEY_LOCATIONS = [
  {
    id: 1,
    name: "King's Landing",
    description: "The capital and largest city of the Seven Kingdoms, located on the east coast of Westeros.",
    imageUrl: "/kings-landing.jpg"
  },
  {
    id: 2,
    name: "Winterfell",
    description: "The ancient seat of House Stark and the capital of the North, known for its strong fortifications.",
    imageUrl: "/winterfell.jpg"
  },
  {
    id: 3,
    name: "The Wall",
    description: "A colossal fortification of ice that stretches along the northern border of the Seven Kingdoms.",
    imageUrl: "/the-wall.jpg"
  }
];

export const FOOTER_LINKS = {
  navigation: [
    { title: "Characters", path: "/characters" },
    { title: "Houses", path: "/houses" },
    { title: "Locations", path: "/locations" },
    { title: "Books", path: "/books" }
  ],
  resources: [
    { title: "World Map", path: "/map" },
    { title: "Timeline", path: "/timeline" },
    { title: "About", path: "/about" }
  ],
  legal: [
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Terms of Use", path: "/terms" }
  ]
};
