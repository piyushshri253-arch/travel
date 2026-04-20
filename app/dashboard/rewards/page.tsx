"use client";
import { useEffect, useState } from "react";

export default function RewardsPage() {
  const [coins, setCoins] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const userId = "123";

  useEffect(() => {
    const fetchCoins = async () => {
      try {

        const res = await fetch(`/api/user-coins/${userId}`);

        if (!res.ok) {
          throw new Error("Failed to fetch coins");
        }

        const data = await res.json();
        setCoins(data.coins);

      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [userId]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🎁 Rewards</h1>

      <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-xl">
        {loading ? (
          <p>Loading coins...</p>
        ) : (
          <>
            <p className="text-lg">
              Available Coins:
              <span className="text-cyan-600 font-bold ml-2 text-2xl">
                {coins} 🪙
              </span>
            </p>

            <p className="text-gray-600 mt-2">
              You earn coins whenever you complete a ride.
            </p>
          </>
        )}
      </div>
    </div>
  );
}