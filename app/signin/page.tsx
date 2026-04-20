"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
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
      console.log("LOGIN RESPONSE:", data); // 🔍 Debug

      if (!res.ok) {
        setMessage("❌ " + (data.message || "Login failed"));
        return;
      }

      // ✅ Safety check
      if (!data.user) {
        setMessage("❌ Invalid server response");
        return;
      }

      // ✅ Normalize user object safely
      const userData = {
        id: data.user._id || data.user.id,
        firstName: data.user.firstName || "User",
        email: data.user.email,
      };

      // ✅ Clear old data first (important)
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      // ✅ Save fresh login data
      localStorage.setItem("user", JSON.stringify(userData));

      if (data.token) {
        localStorage.setItem("token", data.token);
      } else {
        console.warn("⚠ Token not received from backend");
      }

      setMessage("✅ Login successful!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 800);

    } catch (error) {
      console.error(error);
      setMessage("❌ Server error. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-white space-y-6 hidden md:block">
          <p className="tracking-[0.3em] text-xs uppercase text-gray-300">
            Travel Platform
          </p>
          <h1 className="text-6xl font-bold leading-tight">
            Explore <br /> Horizons
          </h1>
          <p className="text-lg text-gray-200 max-w-md">
            Discover breathtaking destinations and create unforgettable journeys.
          </p>
          <div className="h-1 w-16 bg-blue-500 rounded-full" />
        </div>

        {/* RIGHT CARD */}
        <div className="relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-white/40 via-white/10 to-white/40 shadow-2xl">
          <div className="backdrop-blur-3xl bg-white/10 rounded-3xl border border-white/30 p-10">

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">Welcome Back</h2>
              <p className="text-sm text-white/70">
                Sign in to continue your journey
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              
              <div>
                <label className="text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/60 transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white/80">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/60 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-white/90 active:scale-[0.98] transition"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {message && (
              <p className="text-center text-sm text-white mt-4">
                {message}
              </p>
            )}

            <p className="text-center text-sm text-white/70 mt-8">
              New here?{" "}
              <Link
                href="/signup"
                className="text-white font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}