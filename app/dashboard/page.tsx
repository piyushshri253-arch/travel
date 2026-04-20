"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardHome() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/signin");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [router]);

  const membershipPlans = [
    { name: "SILVER", price: 199, coins: 1000 },
    { name: "GOLD", price: 399, coins: 3000 },
    { name: "PLATINUM", price: 699, coins: 7000 },
  ];

  // 🎯 Redeem with coins
  const handleRedeemMembership = async (planName: string) => {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/buy-membership", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: user.id,
        planName,
        paymentMethod: "coins",
      }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      router.refresh();
    }
  };

  // 💳 Buy with money
  const handleBuyMembership = async (planName: string) => {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/buy-membership", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: user.id,
        planName,
        paymentMethod: "money",
      }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      router.refresh();
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">
        Welcome back, {user.firstName} 👋
      </h1>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Coins Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-lg font-semibold mb-2">Your Coins</h2>
          <p className="text-3xl font-bold text-cyan-600">
            {user.points} 🪙
          </p>
        </div>

        {/* Current Membership */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-lg font-semibold mb-2">Your Membership</h2>
          <p className="text-xl font-bold text-purple-600">
            {user.membership}
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h2 className="text-lg font-semibold mb-2">Membership Benefits</h2>
          <p className="text-gray-600 text-sm">
            Higher plans earn bonus coins on every booking.
          </p>
        </div>

      </div>

      {/* Membership Plans */}
      <div>
        <h2 className="text-xl font-bold mb-4">Upgrade Plans</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {membershipPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white shadow-lg rounded-xl p-6 border text-center"
            >
              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>

              <p className="text-gray-600 mb-2">
                Redeem: {plan.coins} Coins 🪙
              </p>

              <p className="text-2xl font-semibold mb-4">
                ₹{plan.price}
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleRedeemMembership(plan.name)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Redeem with Coins
                </button>

                <button
                  onClick={() => handleBuyMembership(plan.name)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  Buy with Money
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}