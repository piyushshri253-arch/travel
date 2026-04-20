type Slide = {
  title: string;
  subtitle: string;
  img: string;
};

/* 🔥 reusable function */
const createSlides = (name: string): Slide[] => [
  {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} Highlights`,
    subtitle: name.toUpperCase(),
    img: `/international/${name}/1.jpg`,
  },
  {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} Experience`,
    subtitle: "Top Attractions",
    img: `/international/${name}/2.jpg`,
  },
  {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} Luxury`,
    subtitle: "Premium Travel",
    img: `/international/${name}/3.jpg`,
  },
];

/* 💯 FINAL DATA */
export const destinationData: Record<string, Slide[]> = {
  europe: createSlides("europe"),
  vietnam: createSlides("vietnam"),
  bali: createSlides("bali"),
  thailand: createSlides("thailand"),
  japan: createSlides("japan"),
  kenya: createSlides("kenya"),
  georgia: createSlides("georgia"),
  "sri-lanka": createSlides("sri-lanka"),
  bhutan: createSlides("bhutan"),
  philippines: createSlides("philippines"),
  egypt: createSlides("egypt"),
  turkey: createSlides("turkey"),
  kazakhstan: createSlides("kazakhstan"),
  maldives: createSlides("maldives"),
  dubai: createSlides("dubai"),
};