"use client";

import Link from "next/link";
import styles from "./CommunityTrips.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Clock3, MapPin, Calendar } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type Trip = {
  slug: string;
  image: string;
  price: string;
  title: string;
  route: string;
  days: string;
  airport: string;
  date: string;
};

type Props = {
  heading: string;
  description: string;
  trips: Trip[];
};

export default function Uk({
  heading,
  description,
  trips,
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{heading}</h2>
        <p>{description}</p>
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