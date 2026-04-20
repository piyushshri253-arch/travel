"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Gift, Search, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
/* ===== DATA ===== */
const internationalTrips = [
  "Europe","Vietnam","Bali","Thailand","Japan","Kenya","Georgia","Sri Lanka",
  "Bhutan","Philippines","Egypt","Turkey","Kazakhstan","Maldives"
];

const indiaTrips = [
  "Ladakh","Spiti","Meghalaya","Kashmir","Sikkim",
  "Himachal","Uttarakhand","Andaman","Kerala"
];

const groupTours = [
  "Europe","Ladakh","Vietnam","Japan","Sri Lanka","Dubai",
  "Thailand","Bhutan","Spiti","Bali","Meghalaya"
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ===== MENU ANIMATION ===== */
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" }
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

      {/* ===== MARQUEE ===== */}
      <div className="bg-yellow-400 text-sm font-semibold overflow-hidden whitespace-nowrap">
        <div className="animate-marquee py-2 px-4">
          🎉 Flat 30% OFF | Bali @ ₹49,999 | Europe @ ₹1,29,999 ✈️
        </div>
      </div>

      {/* ===== TOP BAR ===== */}
      <div className="border-b bg-gray-50">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-4 h-[65px]">

          {/* LOGO */}
         <div className="flex items-center">
  <Image
    src="/logo.png"   // public folder me logo rakho
    alt="TicketON Logo"
    width={170}
    height={40}
    priority
  />
</div>

          {/* SEARCH (desktop) */}
          <div className="hidden md:flex w-[260px] items-center border rounded-full px-4 h-[42px] bg-white">
            <input className="flex-1 outline-none text-sm" placeholder="Search..." />
            <Search size={18} />
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex gap-3 text-sm">

           <a
    href="tel:+918384076491"
    className="flex items-center gap-2 px-4 py-2 rounded-full  text-black  transition"
  >
    <PhoneCall size={16} className="fill-black" />
    <span className="font-bold">+91-8384076491</span>
  </a>
            <Link
  href="/signin"
  className="px-6 py-2 bg-[#606060] text-white rounded-full text-base font-semibold" >
  Sign In
</Link>
            
          </div>

          {/* MOBILE ICON */}
          <div className="md:hidden">
            {menuOpen ? (
              <X size={28} onClick={() => setMenuOpen(false)} />
            ) : (
              <Menu size={28} onClick={() => setMenuOpen(true)} />
            )}
          </div>

        </div>
      </div>

      {/* ===== DESKTOP NAV ===== */}
      <div className="hidden md:block bg-[#079ff7] text-white">
        <div className="max-w-[1240px] mx-auto flex gap-10 px-6 h-[55px] items-center">
          <Dropdown title="International Trips" items={internationalTrips} />
          <Dropdown title="India Trips" items={indiaTrips} />
          <Dropdown title="Group Tours" items={groupTours} />
          <NavItem title="Honeymoon Packages" />
          <div className="flex items-center gap-2 cursor-pointer">
            <Gift size={16} /> Gift Cards
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-full h-screen bg-white z-50 p-6 overflow-y-auto"
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <X size={28} onClick={() => setMenuOpen(false)} />
          </div>

          {/* SEARCH */}
          <div className="mobile-item flex items-center border rounded-full px-4 h-[45px] mb-6">
            <input className="flex-1 outline-none" placeholder="Search trips..." />
            <Search />
          </div>

          {/* DROPDOWNS */}
          <MobileDropdown title="International Trips" items={internationalTrips} />
          <MobileDropdown title="India Trips" items={indiaTrips} />
          <MobileDropdown title="Group Tours" items={groupTours} />

          {/* STATIC */}
          <div className="mobile-item py-3 border-b">Honeymoon Packages</div>

          <div className="mobile-item flex items-center gap-2 py-3 border-b">
            <Gift size={16} /> Gift Cards
          </div>

          {/* CTA */}
          <Link
            href="/signin"
            className="mobile-item block text-center mt-6 py-3 bg-indigo-600 text-white rounded-full"
          >
            Sign In
          </Link>
        </div>
      )}

    </header>
  );
}

/* ===== NAV ITEM ===== */
function NavItem({ title }: { title: string }) {
  return <div className="cursor-pointer hover:text-yellow-300">{title}</div>;
}

/* ===== DESKTOP DROPDOWN ===== */
function Dropdown({ title, items }: any) {
  return (
    <div className="relative group">
      <div className="cursor-pointer">{title}</div>

      <div className="absolute hidden group-hover:block bg-white text-black shadow-xl rounded-xl p-6 w-[600px]">
        <div className="grid grid-cols-3 gap-3">
          {items.map((item: string) => (
            <Link key={item} href="#" className="text-sm hover:text-indigo-600">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== MOBILE DROPDOWN ===== */
function MobileDropdown({ title, items }: any) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4 }
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

      <div ref={contentRef} className="overflow-hidden">
        {open && (
          <div className="mt-2 space-y-2 pl-3">
            {items.map((item: string) => (
              <Link key={item} href="#" className="block text-sm text-gray-600">
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}