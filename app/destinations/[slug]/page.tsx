// DestinationPage.tsx
import { notFound } from "next/navigation";
import DestinationGallery from "../../../components/DestinationGallery";
import ReviewsSection from "../../../components/Reviews";
import RightSidebar from "@/components/RightSidebar";
import DestinationHero from "@/components/DestinationHero";
import ExploreDestinations from "@/components/ExploreDestinations";
import FadeUp from "@/components/FadeUp";
import DestinationTabs from "@/components/DestinationTabs";

/* DESTINATIONS DATA */
const destinations: any = {
  bali: {
    title: "Bali, Indonesia",
    description: "Tropical beaches, temples, and stunning sunsets.",
    hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    gallery: [
      "https://wallpaperaccess.com/full/373636.jpg",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1533683006051-c3de28941638?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1526481280690-3a3fa13f6a51?auto=format&fit=crop&w=1400&q=80",
    ],
    price: "₹24,999",
    overview:
      "Bali is a tropical paradise known for beaches, temples, rice terraces and vibrant nightlife.",
    highlights: [
      "Uluwatu Temple sunset",
      "Ubud rice terraces",
      "Water sports at Nusa Dua",
      "Tanah Lot temple",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival & Relax", desc: "Arrival at Bali, hotel check-in & beach relaxation." },
      { day: "Day 2", title: "Ubud Tour", desc: "Visit Monkey Forest, rice terraces & local markets." },
      { day: "Day 3", title: "Water Sports", desc: "Enjoy parasailing, banana boat & jet ski." },
    ],
    inclusions: ["Hotel stay", "Breakfast", "Airport transfer"],
    exclusions: ["Flights", "Visa", "Personal expenses"],
    otherInfo: "Best time: April to October.",
  },

    singapore: {
      title: "Singapore",
      description: "Modern city with skyline & luxury lifestyle.",
      hero: "https://images.unsplash.com/photo-1508962914676-134849a727f0",
      gallery: [
        "https://images.unsplash.com/photo-1496939376851-89342e90adcd",
        "https://images.unsplash.com/photo-1506157786151-b8491531f063",
      ],
      price: "₹49,999",
      overview: "Singapore is a vibrant city with modern skyline and cultural diversity.",
      highlights: ["Marina Bay Sands", "Sentosa Island", "Gardens by the Bay"],
      itinerary: [
        { day: "Day 1", title: "City Tour", desc: "Explore Marina Bay & skyline." },
        { day: "Day 2", title: "Sentosa", desc: "Universal Studios & beach time." },
      ],
      inclusions: ["Hotel", "Breakfast"],
      exclusions: ["Flights"],
      otherInfo: "Clean & safe city.",
    },
europe: {
  title: "Europe",
  description: "Explore iconic cities, historic landmarks, and breathtaking landscapes across Europe.",
  hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  gallery: [
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    "https://images.unsplash.com/photo-1471623817296-9e82d6fbc3c1",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  ],
  price: "₹1,20,000",
  overview:
    "Europe offers a mix of history, culture, food, and scenic beauty with famous destinations like Paris, Rome, and Switzerland.",
  highlights: [
    "Eiffel Tower in Paris",
    "Swiss Alps",
    "Colosseum in Rome",
    "Canals of Venice",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Paris",
      desc: "Check-in & explore Eiffel Tower and city lights.",
    },
    {
      day: "Day 2",
      title: "City Tour",
      desc: "Visit Louvre Museum & Seine River cruise.",
    },
    {
      day: "Day 3",
      title: "Switzerland",
      desc: "Travel to Swiss Alps and enjoy mountain views.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "City tours"],
  exclusions: ["Flights", "Visa", "Personal expenses"],
  otherInfo: "Best time: April to October.",
},
vietnam: {
  title: "Vietnam",
  description: "Discover stunning landscapes, rich culture, and vibrant street life in Vietnam.",
  hero: "https://images.unsplash.com/photo-1504457047772-27faf1c00561",
  gallery: [
    "https://images.unsplash.com/photo-1528127269322-539801943592",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
    "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5",
    "https://images.unsplash.com/photo-1559599238-9c8b3c0f2d6d",
  ],
  price: "₹55,999",
  overview:
    "Vietnam is known for its breathtaking natural beauty, historic cities, and delicious street food culture.",
  highlights: [
    "Ha Long Bay cruise",
    "Hoi An ancient town",
    "Ho Chi Minh City nightlife",
    "Golden Bridge (Da Nang)",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Hanoi",
      desc: "Check-in and explore local markets and street food.",
    },
    {
      day: "Day 2",
      title: "Ha Long Bay",
      desc: "Cruise through limestone islands and caves.",
    },
    {
      day: "Day 3",
      title: "Da Nang & Hoi An",
      desc: "Visit Golden Bridge and explore lantern streets.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "City tours"],
  exclusions: ["Flights", "Visa", "Personal expenses"],
  otherInfo: "Best time: November to April.",
},
thailand: {
  title: "Thailand",
  description: "Enjoy tropical beaches, vibrant nightlife, and rich cultural experiences in Thailand.",
  hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  gallery: [
    "https://images.unsplash.com/photo-1528181304800-259b08848526",
    "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    "https://images.unsplash.com/photo-1505731132164-cca1c3d0b66c",
  ],
  price: "₹44,999",
  overview:
    "Thailand is famous for its beautiful islands, lively cities, delicious food, and rich traditions.",
  highlights: [
    "Phi Phi Islands",
    "Bangkok nightlife",
    "Phuket beaches",
    "Floating markets",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Bangkok",
      desc: "Check-in and explore city nightlife.",
    },
    {
      day: "Day 2",
      title: "City Tour",
      desc: "Visit temples and floating markets.",
    },
    {
      day: "Day 3",
      title: "Phuket",
      desc: "Relax on beaches and enjoy island tours.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "City tours"],
  exclusions: ["Flights", "Visa", "Personal expenses"],
  otherInfo: "Best time: November to April.",
},
kazakhstan: {
  title: "Kazakhstan",
  description: "Explore vast landscapes, mountains, and modern cities in the heart of Central Asia.",
  hero: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
  gallery: [
    "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090",
  ],
  price: "₹65,999",
  overview:
    "Kazakhstan offers stunning natural beauty with mountains, lakes, deserts, and a blend of modern and traditional culture.",
  highlights: [
    "Almaty city",
    "Charyn Canyon",
    "Kolsai Lakes",
    "Big Almaty Lake",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Almaty",
      desc: "Check-in and explore city attractions.",
    },
    {
      day: "Day 2",
      title: "Charyn Canyon",
      desc: "Visit the stunning canyon landscapes.",
    },
    {
      day: "Day 3",
      title: "Lakes Tour",
      desc: "Explore Kolsai & Big Almaty Lake.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "City tours"],
  exclusions: ["Flights", "Visa", "Personal expenses"],
  otherInfo: "Best time: May to September.",
},
bhutan: {
  title: "Bhutan",
  description: "Experience peaceful monasteries, scenic mountains, and rich Himalayan culture in Bhutan.",
  hero: "https://images.unsplash.com/photo-1544739313-6fad67c37d4f",
  gallery: [
    "https://images.unsplash.com/photo-1594819047050-99defca82545",
    "https://images.unsplash.com/photo-1609948543911-7a1d3e41e80c",
    "https://images.unsplash.com/photo-1589187155473-2c8b0a9c8e3b",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
  ],
  price: "₹58,999",
  overview:
    "Bhutan is known for its serene landscapes, monasteries, and commitment to happiness and sustainability.",
  highlights: [
    "Tiger’s Nest Monastery",
    "Paro Valley",
    "Thimphu city",
    "Punakha Dzong",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Paro",
      desc: "Check-in and explore local surroundings.",
    },
    {
      day: "Day 2",
      title: "Tiger’s Nest",
      desc: "Hike to the famous monastery.",
    },
    {
      day: "Day 3",
      title: "Thimphu Tour",
      desc: "Visit capital city and cultural sites.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Guided tours"],
  exclusions: ["Flights", "Visa", "Personal expenses"],
  otherInfo: "Best time: March to May & September to November.",
},
maldives: {
  title: "Maldives",
  description: "Relax in crystal-clear waters, luxury resorts, and white sandy beaches in Maldives.",
  hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  gallery: [
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b9",
    "https://images.unsplash.com/photo-1505731131651-1f9a37b1f41f",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
  ],
  price: "₹89,999",
  overview:
    "Maldives is a dream destination known for its overwater villas, turquoise lagoons, and luxury experiences.",
  highlights: [
    "Overwater villas",
    "Snorkeling & scuba diving",
    "Private island resorts",
    "Sunset cruises",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival & Resort Check-in",
      desc: "Transfer to resort and relax by the beach.",
    },
    {
      day: "Day 2",
      title: "Water Activities",
      desc: "Enjoy snorkeling, diving, and water sports.",
    },
    {
      day: "Day 3",
      title: "Leisure Day",
      desc: "Relax, spa, and sunset cruise.",
    },
  ],
  inclusions: ["Luxury resort stay", "Breakfast & Dinner", "Airport transfers"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: November to April.",
},
malaysia: {
  title: "Malaysia",
  description: "Explore vibrant cities, tropical islands, and rich cultural diversity in Malaysia.",
  hero: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  gallery: [
    "https://images.unsplash.com/photo-1526481280690-3a3fa13f6a51",
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    "https://images.unsplash.com/photo-1533674689012-7c5f08c3c0c2",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  ],
  price: "₹52,999",
  overview:
    "Malaysia is known for its modern skyline, beautiful islands, rainforests, and diverse culture.",
  highlights: [
    "Petronas Twin Towers",
    "Langkawi beaches",
    "Batu Caves",
    "Kuala Lumpur city tour",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Kuala Lumpur",
      desc: "Check-in and explore city nightlife.",
    },
    {
      day: "Day 2",
      title: "City Tour",
      desc: "Visit Petronas Towers, Batu Caves, and markets.",
    },
    {
      day: "Day 3",
      title: "Langkawi",
      desc: "Relax on beaches and enjoy island activities.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "City tours"],
  exclusions: ["Flights", "Visa", "Personal expenses"],
  otherInfo: "Best time: December to April.",
},
ladakh: {
  title: "Ladakh",
  description: "Experience breathtaking mountains, high-altitude lakes, and adventure in Ladakh.",
  hero: "https://images.unsplash.com/photo-1595815771614-ade5016a0c00",
  gallery: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    "https://images.unsplash.com/photo-1597047084897-51e81819a499",
    "https://images.unsplash.com/photo-1626621341527-8b3db0a9c8a5",
  ],
  price: "₹29,999",
  overview:
    "Ladakh is famous for its rugged landscapes, monasteries, and stunning high-altitude lakes like Pangong Lake.",
  highlights: [
    "Pangong Lake",
    "Nubra Valley",
    "Magnetic Hill",
    "Leh Palace",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Leh",
      desc: "Acclimatization and local sightseeing.",
    },
    {
      day: "Day 2",
      title: "Nubra Valley",
      desc: "Visit sand dunes and monasteries.",
    },
    {
      day: "Day 3",
      title: "Pangong Lake",
      desc: "Explore the famous blue lake.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Local transport"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: May to September.",
},
"spiti-valley": {
  title: "Spiti Valley",
  description: "Explore cold desert landscapes, monasteries, and untouched beauty in Spiti Valley.",
  hero: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  gallery: [
    "https://images.unsplash.com/photo-1597047084897-51e81819a499",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    "https://images.unsplash.com/photo-1626621341527-8b3db0a9c8a5",
    "https://images.unsplash.com/photo-1595815771614-ade5016a0c00",
  ],
  price: "₹27,999",
  overview:
    "Spiti Valley is known for its rugged mountains, ancient monasteries, and peaceful landscapes, often called ‘Little Tibet’.",
  highlights: [
    "Key Monastery",
    "Chandratal Lake",
    "Kaza Village",
    "Kunzum Pass",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Kaza",
      desc: "Check-in and explore local surroundings.",
    },
    {
      day: "Day 2",
      title: "Monastery Tour",
      desc: "Visit Key Monastery and nearby villages.",
    },
    {
      day: "Day 3",
      title: "Chandratal Lake",
      desc: "Visit the beautiful high-altitude lake.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Local transport"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: June to September.",
},
meghalaya: {
  title: "Meghalaya",
  description: "Explore lush green hills, waterfalls, and living root bridges in Meghalaya.",
  hero: "https://images.unsplash.com/photo-1590073242678-70ee3fc28b96",
  gallery: [
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    "https://images.unsplash.com/photo-1609948543911-7a1d3e41e80c",
    "https://images.unsplash.com/photo-1595514535415-dae1c51c5f7b",
    "https://images.unsplash.com/photo-1589187155473-2c8b0a9c8e3b",
  ],
  price: "₹25,999",
  overview:
    "Meghalaya, known as the ‘Abode of Clouds’, is famous for its waterfalls, caves, and natural beauty.",
  highlights: [
    "Cherrapunji waterfalls",
    "Living root bridges",
    "Dawki river",
    "Shillong city",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Shillong",
      desc: "Check-in and explore local markets.",
    },
    {
      day: "Day 2",
      title: "Cherrapunji Tour",
      desc: "Visit waterfalls and root bridges.",
    },
    {
      day: "Day 3",
      title: "Dawki River",
      desc: "Enjoy crystal clear water boating.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Local transport"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: October to April.",
},
kashmir: {
  title: "Kashmir",
  description: "Experience the paradise on earth with beautiful valleys, lakes, and snow-capped mountains.",
  hero: "https://images.unsplash.com/photo-1609948543911-7a1d3e41e80c",
  gallery: [
    "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    "https://images.unsplash.com/photo-1606293926075-69c0d3b8d7f3",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    "https://images.unsplash.com/photo-1595514535415-dae1c51c5f7b",
  ],
  price: "₹32,999",
  overview:
    "Kashmir is known for its stunning landscapes, houseboats, gardens, and serene lakes like Dal Lake.",
  highlights: [
    "Dal Lake houseboat",
    "Gulmarg snow activities",
    "Pahalgam valley",
    "Mughal gardens",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Srinagar",
      desc: "Check-in houseboat and Shikara ride.",
    },
    {
      day: "Day 2",
      title: "Gulmarg",
      desc: "Snow activities and Gondola ride.",
    },
    {
      day: "Day 3",
      title: "Pahalgam",
      desc: "Explore valleys and scenic views.",
    },
  ],
  inclusions: ["Hotel/Houseboat stay", "Breakfast", "Local transport"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: March to October.",
},
"himachal-pradesh": {
  title: "Himachal Pradesh",
  description: "Explore scenic mountains, hill stations, and adventure activities in Himachal Pradesh.",
  hero: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  gallery: [
    "https://images.unsplash.com/photo-1597047084897-51e81819a499",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    "https://images.unsplash.com/photo-1595815771614-ade5016a0c00",
    "https://images.unsplash.com/photo-1626621341527-8b3db0a9c8a5",
  ],
  price: "₹26,999",
  overview:
    "Himachal Pradesh is famous for its beautiful hill stations like Manali, Shimla, and Dharamshala, offering nature and adventure.",
  highlights: [
    "Manali & Solang Valley",
    "Shimla Mall Road",
    "Dharamshala & McLeodganj",
    "Kasol & Parvati Valley",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Shimla",
      desc: "Check-in and explore Mall Road.",
    },
    {
      day: "Day 2",
      title: "Manali",
      desc: "Visit Solang Valley and enjoy adventure sports.",
    },
    {
      day: "Day 3",
      title: "Dharamshala",
      desc: "Explore monasteries and scenic views.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Local transport"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: March to June & October to February.",
},
andaman: {
  title: "Andaman",
  description: "Experience crystal-clear beaches, coral reefs, and peaceful island life in Andaman.",
  hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  gallery: [
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb210b9",
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    "https://images.unsplash.com/photo-1505731131651-1f9a37b1f41f",
  ],
  price: "₹35,999",
  overview:
    "Andaman Islands are known for their turquoise waters, white sandy beaches, and rich marine life.",
  highlights: [
    "Radhanagar Beach",
    "Scuba diving & snorkeling",
    "Cellular Jail",
    "Havelock Island",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Port Blair",
      desc: "Check-in and visit Cellular Jail.",
    },
    {
      day: "Day 2",
      title: "Havelock Island",
      desc: "Visit Radhanagar Beach and relax.",
    },
    {
      day: "Day 3",
      title: "Water Activities",
      desc: "Enjoy scuba diving and snorkeling.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Island transfers"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: October to May.",
},
kerala: {
  title: "Kerala",
  description: "Explore lush greenery, backwaters, beaches, and rich culture in God’s Own Country.",
  hero: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
  gallery: [
    "https://images.unsplash.com/photo-1593691509543-c55fb32c0c0b",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28b96",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  ],
  price: "₹28,999",
  overview:
    "Kerala is famous for its serene backwaters, hill stations like Munnar, beaches, and Ayurvedic experiences.",
  highlights: [
    "Alleppey backwaters",
    "Munnar tea gardens",
    "Kovalam beach",
    "Kathakali cultural shows",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Kochi",
      desc: "Check-in and explore Fort Kochi.",
    },
    {
      day: "Day 2",
      title: "Munnar",
      desc: "Visit tea gardens and scenic hills.",
    },
    {
      day: "Day 3",
      title: "Alleppey",
      desc: "Enjoy houseboat stay in backwaters.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Houseboat stay"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: September to March.",
},
rajasthan: {
  title: "Rajasthan",
  description: "Explore royal palaces, desert landscapes, and vibrant culture in Rajasthan.",
  hero: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
  gallery: [
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    "https://images.unsplash.com/photo-1606293926075-69c0d3b8d7f3",
    "https://images.unsplash.com/photo-1595514535415-dae1c51c5f7b",
    "https://images.unsplash.com/photo-1505731131651-1f9a37b1f41f",
  ],
  price: "₹30,999",
  overview:
    "Rajasthan is known for its grand forts, palaces, desert safaris, and rich cultural heritage.",
  highlights: [
    "Jaipur City Palace",
    "Jaisalmer desert safari",
    "Udaipur lakes",
    "Mehrangarh Fort",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Jaipur",
      desc: "Visit Hawa Mahal and City Palace.",
    },
    {
      day: "Day 2",
      title: "Jodhpur",
      desc: "Explore Mehrangarh Fort.",
    },
    {
      day: "Day 3",
      title: "Jaisalmer",
      desc: "Desert safari and cultural evening.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Local transport"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: October to March.",
},
nagaland: {
  title: "Nagaland",
  description: "Discover vibrant tribal culture, scenic hills, and unique festivals in Nagaland.",
  hero: "https://images.unsplash.com/photo-1606293926075-69c0d3b8d7f3",
  gallery: [
    "https://images.unsplash.com/photo-1595514535415-dae1c51c5f7b",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28b96",
    "https://images.unsplash.com/photo-1609948543911-7a1d3e41e80c",
  ],
  price: "₹33,999",
  overview:
    "Nagaland is known for its rich tribal traditions, colorful festivals, and untouched natural beauty.",
  highlights: [
    "Hornbill Festival",
    "Kohima War Cemetery",
    "Dzukou Valley",
    "Traditional Naga villages",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Kohima",
      desc: "Check-in and explore local markets.",
    },
    {
      day: "Day 2",
      title: "Dzukou Valley",
      desc: "Trek and enjoy scenic landscapes.",
    },
    {
      day: "Day 3",
      title: "Cultural Tour",
      desc: "Visit villages and experience local culture.",
    },
  ],
  inclusions: ["Hotel stay", "Breakfast", "Local transport"],
  exclusions: ["Flights", "Personal expenses"],
  otherInfo: "Best time: October to May.",
},
  dubai: {
    title: "Dubai, UAE",
    description: "Luxury shopping, skyscrapers & desert safari.",
    hero: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    ],
    price: "₹59,999",
    overview: "Dubai is famous for luxury lifestyle and futuristic architecture.",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Marina"],
    itinerary: [
      { day: "Day 1", title: "Burj Khalifa", desc: "Visit tallest building & Dubai Mall." },
      { day: "Day 2", title: "Desert Safari", desc: "Dune bashing & dinner." },
    ],
    inclusions: ["Hotel", "Transfer"],
    exclusions: ["Flights"],
    otherInfo: "Best time: Nov–March.",
  },
};

/* REVIEWS */
const reviewsData: Record<string, any[]> = {
  bali: [
    { name: "Aman", text: "Best trip ever! Everything was perfectly managed.", photo: "/images/reviewers/aman.jpg" },
    { name: "Riya", text: "Amazing experience and great support team.", photo: "/images/reviewers/riya.jpg" },
    { name: "Kabir", text: "Highly recommended for hassle-free travel.", photo: "/images/reviewers/kabir.jpg" },
  ],
  singapore: [
    { name: "Sana", text: "Singapore is clean, modern & fun.", photo: "/images/reviewers/sana.jpg" },
    { name: "Rahul", text: "Loved the Marina Bay Sands experience!", photo: "/images/reviewers/rahul.jpg" },
  ],
  dubai: [
    { name: "Nina", text: "Dubai is luxurious and unforgettable.", photo: "/images/reviewers/nina.jpg" },
    { name: "Aakash", text: "Burj Khalifa views were breathtaking.", photo: "/images/reviewers/aakash.jpg" },
  ],
};

/* STATIC PARAMS */
export function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({ slug }));
}

/* SIDEBAR */
const destinationCategories = {
  international: [
    { name: "Bali", slug: "bali" },
    { name: "Singapore", slug: "singapore" },
    { name: "Dubai", slug: "dubai" },
  ],
  india: ["Ladakh", "Spiti Valley"],
  special: ["Honeymoon Trips"],
  links: ["About Us"],
};

/* PAGE */
export default async function DestinationPage({ params }: any) {
  const { slug } = await params;
  const place = destinations[slug];

  if (!place) return notFound();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HERO */}
        <DestinationHero place={place} />

        {/* TOP GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-20">
          <div className="md:col-span-2 space-y-10">
            <FadeUp>
              <h1 className="text-4xl font-bold mb-3 text-white">{place.title}</h1>
              <p className="text-gray-200">{place.description}</p>
            </FadeUp>

            <DestinationTabs place={place} />
          </div>

          <div className="space-y-6 sticky top-28 h-fit">
            <RightSidebar place={place} />
            <ExploreDestinations data={destinationCategories} />
          </div>
        </div>

        {/* WHITE SECTION */}
        <div className="w-full bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Explore {place.title}</h2>
              <DestinationGallery images={place.gallery} />
            </div>

            <div>
              <ReviewsSection destination={slug} reviewsData={reviewsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}