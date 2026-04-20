"use client";

import { useRef, useState } from "react";

type ItineraryItem = {
  title: string;
  description: string;
};

type TripData = {
  title: string;
  duration: string;
  price: string;
  pickupDrop?: string;
  routeLine?: string;
  overview?: string;
  itinerary?: ItineraryItem[];
  inclusion?: string[];
  exclusion?: string[];
  otherInfo?: string;
};

export default function TabsSection({ data }: { data: TripData }) {
  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const overviewRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const inclusionRef = useRef<HTMLDivElement>(null);
  const exclusionRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="wrapper">

      {/* TITLE */}
      <h1 className="title">{data.title}</h1>

      {/* INFO CARDS */}
      <div className="infoRow">
        <div className="card">
          <span>📍 Pickup & Drop</span>
          <p>{data.pickupDrop || "N/A"}</p>
        </div>

        <div className="card">
          <span>⏳ Duration</span>
          <p>{data.duration}</p>
        </div>
      </div>

      {/* ROUTE */}
      <div className="routeBar">
        {data.routeLine || "Route not available"}
      </div>

      {/* TABS */}
      <div className="tabs">
        <button onClick={() => scrollToSection(overviewRef)}>Overview</button>
        <button onClick={() => scrollToSection(itineraryRef)}>Itinerary</button>
        <button onClick={() => scrollToSection(inclusionRef)}>Inclusions</button>
        <button onClick={() => scrollToSection(exclusionRef)}>Exclusions</button>
        <button onClick={() => scrollToSection(infoRef)}>Info</button>
      </div>

      {/* OVERVIEW */}
      <div ref={overviewRef} className="section overview">
        <h3>Overview</h3>

        <p className={`text ${!showMore ? "clamp" : ""}`}>
          {data.overview || "No overview available"}
        </p>

        {data.overview && data.overview.length > 220 && (
          <button
            className="readMore"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* ITINERARY */}
      <div ref={itineraryRef} className="section">
        <h3>Itinerary</h3>

        <div className="timeline">
          {data?.itinerary?.length ? (
            data.itinerary.map((day, i) => (
              <div key={i} className="timelineItem">
                <div className="dot" />

                <div className="content">
                  <div
                    className="header"
                    onClick={() => toggleAccordion(i)}
                  >
                    <h4>{day.title}</h4>
                    <span>{openIndex === i ? "−" : "+"}</span>
                  </div>

                  <div
                    className={`desc ${
                      openIndex === i ? "show" : ""
                    }`}
                  >
                    <p>{day.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text">No itinerary available</p>
          )}
        </div>
      </div>

      {/* INCLUSIONS */}
      <div ref={inclusionRef} className="section">
        <h3>Inclusions</h3>

        <div className="grid">
          {data?.inclusion?.length ? (
            data.inclusion.map((item, idx) => (
              <div key={idx} className="pill green">
                ✔ {item}
              </div>
            ))
          ) : (
            <p className="text">No inclusions available</p>
          )}
        </div>
      </div>

      {/* EXCLUSIONS */}
      <div ref={exclusionRef} className="section">
        <h3>Exclusions</h3>

        <div className="grid">
          {data?.exclusion?.length ? (
            data.exclusion.map((item, idx) => (
              <div key={idx} className="pill red">
                ✖ {item}
              </div>
            ))
          ) : (
            <p className="text">No exclusions available</p>
          )}
        </div>
      </div>

      {/* INFO */}
      <div ref={infoRef} className="section">
        <h3>Other Info</h3>
        <p className="text">
          {data.otherInfo || "No additional information"}
        </p>
      </div>

      {/* STYLES (UNCHANGED DESIGN) */}
      <style jsx>{`
        .wrapper {
          max-width: 1000px;
          margin: auto;
          padding: 20px 14px;
          font-family: "Inter", sans-serif;
        }

        .title {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.3;
        }

        .infoRow {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .infoRow::-webkit-scrollbar {
          display: none;
        }

        .card {
          min-width: 180px;
          background: #f3f4f6;
          padding: 12px;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .card span {
          font-size: 12px;
          color: #666;
        }

        .card p {
          font-size: 13px;
          font-weight: 600;
        }

        .routeBar {
          margin-top: 12px;
          background: linear-gradient(90deg, #111, #333);
          color: #fff;
          padding: 10px;
          border-radius: 10px;
          font-size: 12px;
        }

        .tabs {
          position: sticky;
          top: 0;
          background: #fff;
          display: flex;
          gap: 8px;
          padding: 10px 0;
          margin-top: 14px;
          overflow-x: auto;
          border-bottom: 1px solid #eee;
          z-index: 10;
        }

        .tabs::-webkit-scrollbar {
          display: none;
        }

        .tabs button {
          border: none;
          background: #f3f4f6;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 12px;
          white-space: nowrap;
        }

        .section {
          margin-top: 22px;
          padding: 16px;
          background: #fafafa;
          border-radius: 12px;
        }

        .section h3 {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .overview {
          background: #fff;
          border: 1px solid #eee;
        }

        .text {
          font-size: 13px;
          line-height: 1.6;
          color: #444;
        }

        .clamp {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .readMore {
          margin-top: 6px;
          font-size: 12px;
          color: #2563eb;
          background: none;
          border: none;
        }

        .timeline {
          border-left: 2px solid #eee;
          padding-left: 12px;
        }

        .timelineItem {
          position: relative;
          margin-bottom: 16px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #111;
          border-radius: 50%;
          position: absolute;
          left: -16px;
          top: 6px;
        }

        .content {
          background: #fff;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #eee;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header h4 {
          font-size: 13px;
          font-weight: 600;
        }

        .header span {
          font-size: 16px;
        }

        .desc {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .desc.show {
          max-height: 400px;
          margin-top: 8px;
        }

        .desc p {
          font-size: 12px;
          color: #555;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        .pill {
          padding: 10px;
          border-radius: 8px;
          font-size: 12px;
        }

        .green {
          background: #ecfdf5;
          color: #065f46;
        }

        .red {
          background: #fef2f2;
          color: #991b1b;
        }

        @media (min-width: 768px) {
          .title {
            font-size: 28px;
          }

          .section {
            padding: 20px;
          }

          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}