"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ExploreDestinations({ data }: any) {
  const pathname = usePathname();

  const Section = ({ title, items }: any) => (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        {title}
      </h3>

      <ul className="space-y-1">
        {items.map((item: any, index: number) => {
          const isLink = typeof item !== "string";
          const href = isLink ? `/destinations/${item.slug}` : "#";
          const isActive = pathname === href;

          return (
            <li key={index}>
              {isLink ? (
                <Link
                  href={href}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-teal-50 text-teal-600 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="group-hover:translate-x-1 transition">
                    {item.name}
                  </span>

                  {/* Arrow */}
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition">
                    →
                  </span>
                </Link>
              ) : (
                <span className="block px-3 py-2 text-gray-600 hover:text-teal-600 cursor-pointer transition">
                  {item}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg space-y-6 border border-gray-100">

      <Section
        title="🌍 International Trips"
        items={data.international}
      />

      <Section
        title="🇮🇳 India Trips"
        items={data.india}
      />

      <Section
        title="✨ WanderOn Special"
        items={data.special}
      />

      <Section
        title="🔗 Quick Links"
        items={data.links}
      />

    </div>
  );
}