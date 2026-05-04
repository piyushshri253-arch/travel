"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Gift, Search, Menu, X, PhoneCall } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";

/* ===== DATA ===== */
const internationalTrips = [
  {
    title: "Europe",
    href: "/international-trips/europe-tour-packages",
  },
  {
    title: "Vietnam",
    href: "/international-trips/vietnam-tour-packages",
  },
  {
    title: "Bali",
    href: "/international-trips/bali-tour-packages",
  },
  {
    title: "Thailand",
    href: "/international-trips/thailand-tour-package",
  },
  {
    title: "Japan",
    href: "/international-trips/japan-tour-packages",
  },
  {
    title: "Kenya",
    href: "/international-trips/kenya-tour-packages",
  },
  {
    title: "Georgia",
    href: "/international-trips/georgia-tour-packages",
  },
  {
    title: "Sri Lanka",
    href: "/international-trips/sri-lanka-tour-packages",
  },
  {
    title: "Bhutan",
    href: "/international-trips/bhutan-tour-packages",
  },
  {
    title: "Philippines",
    href: "/international-trips/philippines-tour-packages",
  },
  {
    title: "Egypt",
    href: "/international-trips/egypt-tour-packages",
  },
  {
    title: "Turkey",
    href: "/international-trips/turkey-tour-packages",
  },
  {
    title: "Kazakhstan",
    href: "/international-trips/kazakhstan-tour-packages",
  },
  {
    title: "Maldives",
    href: "/international-trips/maldives-tour-packages",
  },
];

const indiaTrips = [
  {
    title: "Ladakh",
    href: "/india-trips/leh-ladakh-tour-packages",
  },
  {
    title: "Spiti",
    href: "/india-trips/spiti-valley-tour-packages",
  },
  {
    title: "Meghalaya",
    href: "/india-trips/meghalaya-tour-packages",
  },
  {
    title: "Kashmir",
    href: "/india-trips/kashmir-tour-packages",
  },
  {
    title: "Sikkim",
    href: "/india-trips/sikkim-tour-packages",
  },
  {
    title: "Himachal",
    href: "/india-trips/himachal-tour-packages",
  },
  {
    title: "Uttarakhand",
    href: "/india-trips/uttarakhand-tour-packages",
  },
  {
    title: "Andaman",
    href: "/india-trips/andaman-tour-packages",
  },
  {
    title: "Kerala",
    href: "/india-trips/kerala-tour-packages",
  },
];

const groupTours = [
  {
    title: "Europe",
    href: "/group-tours/europe-group-tour-packages",
  },
  {
    title: "Ladakh",
    href: "/group-tours/ladakh-group-tour-packages",
  },
  {
    title: "Vietnam",
    href: "/group-tours/vietnam-group-tour-packages",
  },
  {
    title: "Japan",
    href: "/group-tours/japan-group-tour-packages",
  },
  {
    title: "Sri Lanka",
    href: "/group-tours/sri-lanka-group-tour-packages",
  },
  {
    title: "Dubai",
    href: "/group-tours/dubai-group-tour-packages",
  },
  {
    title: "Thailand",
    href: "/group-tours/thailand-group-tour-packages",
  },
  {
    title: "Bhutan",
    href: "/group-tours/bhutan-group-tour-packages",
  },
  {
    title: "Spiti",
    href: "/group-tours/spiti-group-tour-packages",
  },
  {
    title: "Bali",
    href: "/group-tours/bali-group-tour-packages",
  },
  {
    title: "Meghalaya",
    href: "/group-tours/meghalaya-group-tour-packages",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.5,
          ease: "power3.out",
        }
      );

      gsap.from(".mobile-item", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        delay: 0.2,
      });
    }
  }, [menuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 shadow bg-white">
      {/* TOP BAR */}
      <div className="border-b bg-gray-50">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-4 h-[72px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={170}
              height={40}
              priority
            />
          </Link>

          <div className="hidden md:flex w-[280px] items-center border rounded-full px-4 h-[44px] bg-white">
            <input
              className="flex-1 outline-none text-sm"
              placeholder="Search..."
            />
            <Search size={18} />
          </div>

          <div className="hidden md:flex gap-3 items-center">
            <a
              href="tel:+918384076491"
              className="flex items-center gap-2 font-semibold"
            >
              <PhoneCall size={17} />
              +91-8384076491
            </a>

            <Link
              href="/signin"
              className="px-6 py-2 bg-[#606060] text-white rounded-full font-semibold"
            >
              Sign In
            </Link>
          </div>

          <div className="md:hidden">
            {menuOpen ? (
              <X size={28} onClick={() => setMenuOpen(false)} />
            ) : (
              <Menu size={28} onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:block bg-[#079ff7] text-white">
        <div className="max-w-[1240px] mx-auto flex gap-10 px-6 h-[55px] items-center">
          <Dropdown
            title="International Trips"
            items={internationalTrips}
          />

          <Dropdown
            title="India Trips"
            items={indiaTrips}
          />

          <Dropdown
            title="Group Tours"
            items={groupTours}
          />

          <NavItem
            title="Honeymoon Packages"
            href="/honeymoon-packages"
          />

          <NavItem
            title="Gift Cards"
            href="/gift-cards"
            icon={<Gift size={16} />}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-full h-screen bg-white z-50 p-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <X size={28} onClick={() => setMenuOpen(false)} />
          </div>

          <div className="mobile-item flex items-center border rounded-full px-4 h-[45px] mb-6">
            <input
              className="flex-1 outline-none"
              placeholder="Search trips..."
            />
            <Search />
          </div>

          <MobileDropdown
            title="International Trips"
            items={internationalTrips}
          />

          <MobileDropdown
            title="India Trips"
            items={indiaTrips}
          />

          <MobileDropdown
            title="Group Tours"
            items={groupTours}
          />
        </div>
      )}
    </header>
  );
}

/* ===== NAV ITEM ===== */
function NavItem({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 hover:text-yellow-300 transition"
    >
      {icon}
      {title}
    </Link>
  );
}

/* ===== DESKTOP DROPDOWN ===== */
function Dropdown({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  return (
    <div className="relative group">
      <div className="cursor-pointer font-medium">
        {title}
      </div>

      <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black shadow-2xl rounded-2xl p-6 w-[650px]">
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium hover:text-[#079ff7] transition"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== MOBILE DROPDOWN ===== */
function MobileDropdown({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.35,
        }
      );
    }
  }, [open]);

  return (
    <div className="mobile-item border-b py-3">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between cursor-pointer font-semibold"
      >
        {title}
        <span>{open ? "-" : "+"}</span>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden"
      >
        {open && (
          <div className="mt-3 space-y-2 pl-3">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block text-sm text-gray-600 hover:text-[#079ff7]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}