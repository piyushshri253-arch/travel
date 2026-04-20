"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage("❌ " + (data.message || "Login failed"));
        setLoading(false);
        return;
      }

      // Save user
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("✅ Login successful!");

      setTimeout(() => {
        router.push("/booking");
      }, 1000);

    } catch (error) {
      setMessage("❌ Server error. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f1a] text-white px-6">
      <div className="w-full max-w-md bg-[#1b1b2b] p-8 rounded-2xl shadow-lg space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-1">
            Login to continue your journey ✈️
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#0f0f1a] border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#0f0f1a] border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-medium disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-center text-sm text-green-400">{message}</p>
        )}

        {/* Footer */}
        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}