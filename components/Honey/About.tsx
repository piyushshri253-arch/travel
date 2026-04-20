"use client";

import { useState } from "react";

export default function HoneymoonAbout() {
  const [expanded, setExpanded] = useState(false);

  const content = `
This is your sign to pack your bags and begin a beautiful journey of togetherness with our specially curated honeymoon packages for couples. Love deserves to be celebrated in the most magical way, and what better way to do that than exploring the world hand in hand with your partner? Imagine watching a golden sunset together, sharing laughter, and creating memories that will last forever. Sounds like a dream? We turn that dream into reality.

Our honeymoon tour packages are designed to deliver a perfect blend of romance, luxury, and unforgettable experiences. From waking up to the calming sound of ocean waves to staying in premium villas and indulging in candlelight dinners, every moment is crafted to elevate your honeymoon into something extraordinary.

Every couple is different, and so are their travel dreams. Whether you are looking for a peaceful escape or an adventurous getaway, our honeymoon packages cater to every kind of traveler. Walk together on sandy beaches, explore hidden gems, and cherish every moment as time slows down just for you.

With our thoughtfully designed honeymoon packages, you don’t just visit destinations — you experience them. From the tropical charm of Bali to the snowy romance of Kashmir, from the luxury of Maldives to the backwaters of Kerala, from the modern elegance of Dubai to the vibrant culture of Thailand — every destination offers something unique.

Finding the perfect honeymoon destination can often feel overwhelming, but that’s where we step in. We simplify your journey by offering the best-curated experiences, ensuring that you don’t have to worry about planning or arrangements. Just focus on enjoying your special time together.

Our honeymoon packages are more than just travel plans — they are a collection of unforgettable moments. Each destination unfolds a new story, a new adventure, and a deeper connection between you and your partner.

So get ready to celebrate love, laughter, and a lifetime of togetherness. Your honeymoon is not just a trip; it’s the beginning of your forever story.

----------------------------

PLACES TO VISIT WITH OUR HONEYMOON PACKAGES

1. Bali  
Bali is a tropical paradise where romance meets adventure. Picture yourself walking along serene beaches, enjoying breathtaking sunsets, and experiencing the rich culture of this magical island. From exploring temples to trying exciting activities like water sports and jungle treks, Bali offers the perfect mix of relaxation and thrill.

Places to Visit: Ubud, Kuta, Denpasar  
Things to Do: Bali Swing, Mount Batur Trek, Water Sports  

----------------------------

2. Kashmir  
Known as “Heaven on Earth,” Kashmir is a dream destination for honeymooners. From the peaceful Dal Lake to the snow-covered beauty of Gulmarg, every corner of Kashmir feels like a fairytale. Enjoy romantic shikara rides, cozy houseboat stays, and breathtaking mountain views.

Places to Visit: Gulmarg, Srinagar, Pahalgam, Sonamarg  
Things to Do: Shikara Ride, Gondola Ride, Shopping  

----------------------------

3. Maldives  
The Maldives is the ultimate luxury honeymoon destination. Crystal-clear waters, private villas, and romantic beach dinners create the perfect setting for love. Whether you want to relax or explore marine life, Maldives offers a once-in-a-lifetime experience.

Places to Visit: Male, Addu Atoll, Fulhadhoo  
Things to Do: Scuba Diving, Sunset Cruise, Beach Dinner  

----------------------------

4. Andaman & Nicobar  
The Andaman Islands are a hidden gem filled with natural beauty and romance. With turquoise waters, white sandy beaches, and unique experiences like bioluminescent beaches, it’s perfect for couples seeking something special.

Places to Visit: Swaraj Dweep, Port Blair, Barren Island  
Things to Do: Scuba Diving, Kayaking, Underwater Walk  

----------------------------

5. Vietnam  
Vietnam offers a unique blend of culture, adventure, and scenic beauty. Explore vibrant markets, enjoy romantic sunsets, and discover hidden gems together. It’s perfect for couples looking for something different and exciting.

Places to Visit: Ho Chi Minh, Ha Long Bay, Mui Ne  
Things to Do: Trekking, Street Food, Water Activities  

----------------------------

6. Kerala  
Kerala, known as “God’s Own Country,” is one of the most romantic destinations in India. From serene backwaters to lush greenery, it offers a peaceful and relaxing honeymoon experience.

Places to Visit: Munnar, Alleppey, Thekkady, Kovalam  
Things to Do: Houseboat Stay, Ayurveda, Trekking  

----------------------------

7. Dubai  
Dubai combines luxury with adventure, making it a perfect honeymoon destination. From desert safaris to fine dining experiences, it offers a mix of modern attractions and traditional charm.

Places to Visit: Burj Khalifa, Palm Jumeirah, Dubai Mall  
Things to Do: Desert Safari, Cruise Dinner, Skydive  

----------------------------

8. Thailand  
Thailand is a favorite among honeymooners for its affordability and variety. From beautiful beaches to vibrant nightlife and cultural experiences, it offers something for every couple.

Places to Visit: Phuket, Krabi, Bangkok, Chiang Mai  
Things to Do: Snorkelling, Spa, Island Tours  

----------------------------

Let your honeymoon be the beginning of a lifetime filled with love, adventure, and unforgettable memories. Choose your dream destination and let us create the perfect journey for you.
`;

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        About Honeymoon Packages
      </h2>

      {/* Content Box */}
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6 text-gray-700 leading-relaxed text-sm sm:text-base">
        
        {/* TEXT */}
        <p className="whitespace-pre-line">
          {expanded ? content : content.slice(0, 600) + "..."}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-blue-600 font-semibold hover:underline"
        >
          {expanded ? "Read Less ▲" : "Read More ▼"}
        </button>

      </div>
    </section>
  );
}