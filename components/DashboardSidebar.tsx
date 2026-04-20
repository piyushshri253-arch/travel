"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Bookings", href: "/dashboard/bookings" },
    { name: "Profile", href: "/dashboard/profile" },
    { name: "Rewards", href: "/dashboard/rewards" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/signin");
  };

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg border-r flex flex-col">
      
      {/* HEADER */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">My Account</h2>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg transition font-medium
                ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 font-medium transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}