"use client";

import Link from "next/link";
import styles from "./CommunityTrips.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Clock3, MapPin, Calendar } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const trips = [
  {
    slug: "europe-group-trip-with-tomorrowland",
    image: "/e1.avif",
    price: "₹2,99,999/- onwards",
    title: "Ultimate Europe Trip: Amsterdam Canals to Tomorrowland Beats",
    route: "Amsterdam • Zaanse Schans • Brussels • +3 More",
    days: "7N/8D",
    airport: "Amsterdam Schiphol (AMS) - Brussels (BRU)",
    date: "13 Jul",
  },
  {
    slug: "spain-community-trip-la-tomatina",
    image: "/span.avif",
    price: "₹1,89,990/- onwards",
    title: "10 Days Spain Community Trip | Ibiza & La Tomatina Edition",
    route: "Barcelona • Ibiza • Valencia • Madrid • +3 More",
    days: "9N/10D",
    airport: "Barcelona Airport - Madrid Airport",
    date: "20 Aug",
  },
  {
    slug: "europe-backpacking-trip-paris-amsterdam-prague-vienna-11n-12d",
    image: "/e3.avif",
    price: "₹2,29,990/- onwards",
    title: "12-Day Europe Backpacking: Paris, Amsterdam, Prague, Vienna",
    route: "3N Paris • 3N Amsterdam • 3N Prague • +2 More",
    days: "11N/12D",
    airport: "Paris Airport - Vienna Airport",
    date: "27 Jun, 18 Jul +1 Batch",
  },
  {
    slug: "europe-group-trip-paris-to-budapest-14n-15d",
    image: "/e4.avif",
    price: "₹2,59,990/- onwards",
    title: "15-Day Europe Group Trip 2026: Paris to Budapest",
    route: "Paris • Amsterdam • Prague • Vienna • +3 More",
    days: "14N/15D",
    airport: "Paris CDG - Budapest Airport",
    date: "27 Jun, 18 Jul +1 Batch",
  },
  {
    slug: "europe-backpacking-tour-amsterdam-prague-vienna-budapest-11n-12d",
    image: "/e5.avif",
    price: "₹2,19,990/- onwards",
    title: "12 Day Europe Backpacking Tour: Amsterdam, Prague & Budapest",
    route: "Amsterdam • Prague • Vienna • Budapest • +2 More",
    days: "11N/12D",
    airport: "Amsterdam Airport - Budapest Airport",
    date: "30 Jun, 21 Jul +1 Batch",
  },
  {
    slug: "europe-backpacking-tour-prague-to-budapest-8n-9d",
    image: "/e6.avif",
    price: "₹1,39,990/- onwards",
    title: "9-Day Europe Backpacking Tour 2026: Prague to Budapest",
    route: "Prague • Vienna • Budapest • +1 More",
    days: "8N/9D",
    airport: "Prague Airport - Budapest Airport",
    date: "3 Jul, 24 Jul +1 Batch",
  },
  {
    slug: "spain-ibiza-portugal-community-group-trip-11n-12d",
    image: "/e7.avif",
    price: "₹2,29,990/- onwards",
    title: "12-Day Spain, Ibiza & Portugal Community Trip",
    route: "Barcelona • Ibiza • Madrid • Lisbon • +3 More",
    days: "11N/12D",
    airport: "Barcelona (BCN) - Porto (OPO)",
    date: "11 Jul",
  },
  {
    slug: "spain-ibiza-community-group-trip-8n-9d",
    image: "/e8.avif",
    price: "₹1,79,990/- onwards",
    title: "9 Days Spain & Ibiza Community Trip | 8N/9D Group Adventure",
    route: "Barcelona • Ibiza • Madrid • Toledo • +1 More",
    days: "8N/9D",
    airport: "Barcelona (BCN) - Madrid (MAD)",
    date: "11 Jul",
  },
  {
    slug: "northern-lights-group-trip-stockholm-to-tromso-9n-10d",
    image: "/e9.avif",
    price: "₹2,59,990/- onwards",
    title: "10-Day Northern Lights Community Tour: Stockholm to Tromsø",
    route: "Stockholm • Finland • Tromsø • +1 More",
    days: "9N/10D",
    airport: "Stockholm Airport - Tromsø Airport",
    date: "6 Nov, 26 Dec +1 Batch",
  },
];


export default function CommunityTrips() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Europe Trip Packages with UK

</h2>
        <p>
         Experience classic Europe with the Royal Charm of the UK - from London’s charm to Europe’s iconic cities and landscapes.


        </p>
      </div>

      <div className={styles.sliderWrapper}>
        <button
          className={`custom-prev ${styles.navBtn}`}
          aria-label="Previous"
        >
          ❮
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={24}
          speed={700}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {trips.map((trip) => (
            <SwiperSlide key={trip.slug}>
              <Link
                href={`/trip/${trip.slug}`}
                className={styles.cardLink}
              >
                <div
                  className={styles.card}
                  style={{
                    backgroundImage: `url(${trip.image})`,
                  }}
                >
                  <div className={styles.overlay} />

                  <div className={styles.price}>
                    {trip.price}
                  </div>

                  <button
                    className={styles.invite}
                    type="button"
                  >
                    Request Invite
                  </button>

                  <div className={styles.content}>
                    <h3>{trip.title}</h3>

                    <div className={styles.route}>
                      {trip.route}
                    </div>

                    <div className={styles.meta}>
                      <span>
                        <Clock3 size={15} />
                        {trip.days}
                      </span>

                      <span>
                        <MapPin size={15} />
                        {trip.airport}
                      </span>
                    </div>

                    <div className={styles.date}>
                      <Calendar size={15} />
                      {trip.date}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`custom-next ${styles.navBtn}`}
          aria-label="Next"
        >
          ❯
        </button>
      </div>
    </section>
  );
}