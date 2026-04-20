"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/signin");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return <div className="p-10 text-center">Loading...</div>;

  // 🎯 Membership Logic
  let membership = "Silver";
  let badgeColor = "bg-gray-400";

  if (user.points >= 1000) {
    membership = "Platinum";
    badgeColor = "bg-purple-600";
  } else if (user.points >= 500) {
    membership = "Gold";
    badgeColor = "bg-yellow-500";
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/signin");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-black to-indigo-900 flex justify-center items-center p-6">
      
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white">
        
        {/* Avatar + Name */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl font-bold shadow-lg">
            {user.firstName?.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-2xl font-bold mt-4">
            {user.firstName}
          </h1>

          <p className="text-sm text-white/70">
            {user.email}
          </p>

          {/* Membership Badge */}
          <div className={`mt-3 px-4 py-1 rounded-full text-sm font-semibold ${badgeColor}`}>
            {membership} Member
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-4 mt-6">

          {/* Coins Card */}
          <div className="bg-white/10 rounded-xl p-4 flex justify-between items-center border border-white/20">
            <span className="text-white/70">Reward Coins</span>
            <span className="text-xl font-bold text-yellow-400">
              {user.points || 0} 🪙
            </span>
          </div>

          {/* Subscription Card */}
          <div className="bg-white/10 rounded-xl p-4 flex justify-between items-center border border-white/20">
            <span className="text-white/70">Subscription</span>
            <span className="font-semibold text-cyan-400">
              Active
            </span>
          </div>

          {/* User ID */}
          <div className="bg-white/10 rounded-xl p-4 flex justify-between items-center border border-white/20">
            <span className="text-white/70">User ID</span>
            <span className="text-sm">
              {user.id}
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-3">
          
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Upgrade Membership
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500/80 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}